// bazi-data.js — 四柱八字排盘算法（纯JS，无依赖，浏览器可直接引入）

// ==============================
// 1. 天干地支基础数据
// ==============================

var TIAN_GAN = ['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];

var TIAN_GAN_WUXING = {
  '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水'
};

var TIAN_GAN_YINYANG = {
  '甲':'阳','乙':'阴','丙':'阳','丁':'阴','戊':'阳','己':'阴','庚':'阳','辛':'阴','壬':'阳','癸':'阴'
};

var DI_ZHI = ['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];

var DI_ZHI_WUXING = {
  '子':'水','丑':'土','寅':'木','卯':'木','辰':'土','巳':'火','午':'火','未':'土','申':'金','酉':'金','戌':'土','亥':'水'
};

var DI_ZHI_SHENG_XIAO = {
  '子':'鼠','丑':'牛','寅':'虎','卯':'兔','辰':'龙','巳':'蛇','午':'马','未':'羊','申':'猴','酉':'鸡','戌':'狗','亥':'猪'
};

var DI_ZHI_SHI_CHEN = {
  '子':'23:00-01:00','丑':'01:00-03:00','寅':'03:00-05:00','卯':'05:00-07:00',
  '辰':'07:00-09:00','巳':'09:00-11:00','午':'11:00-13:00','未':'13:00-15:00',
  '申':'15:00-17:00','酉':'17:00-19:00','戌':'19:00-21:00','亥':'21:00-23:00'
};

// 六十甲子表（含纳音）
var JIA_ZI_60 = [
  {gz:'甲子',naYin:'海中金'},  {gz:'乙丑',naYin:'海中金'},
  {gz:'丙寅',naYin:'炉中火'},  {gz:'丁卯',naYin:'炉中火'},
  {gz:'戊辰',naYin:'大林木'},  {gz:'己巳',naYin:'大林木'},
  {gz:'庚午',naYin:'路旁土'},  {gz:'辛未',naYin:'路旁土'},
  {gz:'壬申',naYin:'剑锋金'},  {gz:'癸酉',naYin:'剑锋金'},
  {gz:'甲戌',naYin:'山头火'},  {gz:'乙亥',naYin:'山头火'},
  {gz:'丙子',naYin:'涧下水'},  {gz:'丁丑',naYin:'涧下水'},
  {gz:'戊寅',naYin:'城头土'},  {gz:'己卯',naYin:'城头土'},
  {gz:'庚辰',naYin:'白蜡金'},  {gz:'辛巳',naYin:'白蜡金'},
  {gz:'壬午',naYin:'杨柳木'},  {gz:'癸未',naYin:'杨柳木'},
  {gz:'甲申',naYin:'泉中水'},  {gz:'乙酉',naYin:'泉中水'},
  {gz:'丙戌',naYin:'屋上土'},  {gz:'丁亥',naYin:'屋上土'},
  {gz:'戊子',naYin:'霹雳火'},  {gz:'己丑',naYin:'霹雳火'},
  {gz:'庚寅',naYin:'松柏木'},  {gz:'辛卯',naYin:'松柏木'},
  {gz:'壬辰',naYin:'长流水'},  {gz:'癸巳',naYin:'长流水'},
  {gz:'甲午',naYin:'砂石金'},  {gz:'乙未',naYin:'砂石金'},
  {gz:'丙申',naYin:'山下火'},  {gz:'丁酉',naYin:'山下火'},
  {gz:'戊戌',naYin:'平地木'},  {gz:'己亥',naYin:'平地木'},
  {gz:'庚子',naYin:'壁上土'},  {gz:'辛丑',naYin:'壁上土'},
  {gz:'壬寅',naYin:'金箔金'},  {gz:'癸卯',naYin:'金箔金'},
  {gz:'甲辰',naYin:'覆灯火'},  {gz:'乙巳',naYin:'覆灯火'},
  {gz:'丙午',naYin:'天河水'},  {gz:'丁未',naYin:'天河水'},
  {gz:'戊申',naYin:'大驿土'},  {gz:'己酉',naYin:'大驿土'},
  {gz:'庚戌',naYin:'钗钏金'},  {gz:'辛亥',naYin:'钗钏金'},
  {gz:'壬子',naYin:'桑柘木'},  {gz:'癸丑',naYin:'桑柘木'},
  {gz:'甲寅',naYin:'大溪水'},  {gz:'乙卯',naYin:'大溪水'},
  {gz:'丙辰',naYin:'沙中土'},  {gz:'丁巳',naYin:'沙中土'},
  {gz:'戊午',naYin:'天上火'},  {gz:'己未',naYin:'天上火'},
  {gz:'庚申',naYin:'石榴木'},  {gz:'辛酉',naYin:'石榴木'},
  {gz:'壬戌',naYin:'大海水'},  {gz:'癸亥',naYin:'大海水'}
];

// ==============================
// 2. 四柱排盘算法
// ==============================

// 年柱（以立春约2月4日为界）
function getYearGanZhi(year, month, day) {
  var y = year;
  if (month < 2 || (month === 2 && day < 4)) {
    y = year - 1;
  }
  var ganIdx = (y - 4) % 10;
  var zhiIdx = (y - 4) % 12;
  if (ganIdx < 0) ganIdx += 10;
  if (zhiIdx < 0) zhiIdx += 12;
  return { gan: TIAN_GAN[ganIdx], zhi: DI_ZHI[zhiIdx], ganIdx: ganIdx, zhiIdx: zhiIdx };
}

// 节令近似日期表（月干支界限）
var JIE_QI_TABLE = [
  {month:2,  day:4,  zhiIdx:2,  name:'立春'},   // 寅月始
  {month:3,  day:6,  zhiIdx:3,  name:'惊蛰'},   // 卯月始
  {month:4,  day:5,  zhiIdx:4,  name:'清明'},   // 辰月始
  {month:5,  day:6,  zhiIdx:5,  name:'立夏'},   // 巳月始
  {month:6,  day:6,  zhiIdx:6,  name:'芒种'},   // 午月始
  {month:7,  day:7,  zhiIdx:7,  name:'小暑'},   // 未月始
  {month:8,  day:8,  zhiIdx:8,  name:'立秋'},   // 申月始
  {month:9,  day:8,  zhiIdx:9,  name:'白露'},   // 酉月始
  {month:10, day:8,  zhiIdx:10, name:'寒露'},   // 戌月始
  {month:11, day:7,  zhiIdx:11, name:'立冬'},   // 亥月始
  {month:12, day:7,  zhiIdx:0,  name:'大雪'},   // 子月始
  {month:1,  day:6,  zhiIdx:1,  name:'小寒'}    // 丑月始
];

// 五虎遁：年干 → 寅月（正月）天干起始序号
var WU_HU_DUN = {
  0:2,  // 甲己 → 丙寅
  1:4,  // 乙庚 → 戊寅
  2:6,  // 丙辛 → 庚寅
  3:8,  // 丁壬 → 壬寅
  4:0,  // 戊癸 → 甲寅
  5:2,  // 己甲 → 丙寅
  6:4,  // 庚乙 → 戊寅
  7:6,  // 辛丙 → 庚寅
  8:8,  // 壬丁 → 壬寅
  9:0   // 癸戊 → 甲寅
};

// 月柱
function getMonthGanZhi(year, month, day) {
  var yearGZ = getYearGanZhi(year, month, day);
  var yearGanIdx = yearGZ.ganIdx;

  // 判断当前属于哪个节气月
  var zhiIdx = -1;
  // 按月份排序判断
  for (var i = 0; i < JIE_QI_TABLE.length; i++) {
    var jq = JIE_QI_TABLE[i];
    var jqMonth = jq.month;
    var jqDay = jq.day;

    // 将节气日期统一到年度时间轴上比较
    // 处理丑月(1月)在子月(12月)之后的情况
    var jqOrder;
    if (jqMonth >= 2) {
      jqOrder = jqMonth * 100 + jqDay;
    } else {
      jqOrder = 13 * 100 + jqDay; // 1月排在12月之后
    }
    var curOrder;
    if (month >= 2) {
      curOrder = month * 100 + day;
    } else {
      curOrder = 13 * 100 + day;
    }

    // 找到最后一个已通过的节气
    if (curOrder >= jqOrder) {
      zhiIdx = jq.zhiIdx;
    }
  }

  // 兜底：若未匹配，默认为丑月
  if (zhiIdx === -1) zhiIdx = 1;

  // 五虎遁求月干：寅月天干起始 = WU_HU_DUN[yearGanIdx]，月干 = (起始 + (zhiIdx - 2)) % 10
  var startGan = WU_HU_DUN[yearGanIdx];
  var monthGanIdx = (startGan + zhiIdx - 2) % 10;
  if (monthGanIdx < 0) monthGanIdx += 10;

  return { gan: TIAN_GAN[monthGanIdx], zhi: DI_ZHI[zhiIdx], ganIdx: monthGanIdx, zhiIdx: zhiIdx };
}

// 日柱：基准1900年1月1日=甲戌日（干序号0甲，支序号10戌）
// 甲戌在六十甲子中序号为10
var BASE_DATE = new Date(1900, 0, 1); // 1900-01-01
var BASE_JIA_ZI_IDX = 10; // 甲戌在六十甲子表中序号

function getDayGanZhi(year, month, day) {
  var targetDate = new Date(year, month - 1, day);
  var diffMs = targetDate.getTime() - BASE_DATE.getTime();
  var diffDays = Math.round(diffMs / (24 * 60 * 60 * 1000));

  var jiaZiIdx = (BASE_JIA_ZI_IDX + diffDays) % 60;
  if (jiaZiIdx < 0) jiaZiIdx += 60;

  var ganIdx = jiaZiIdx % 10;
  var zhiIdx = jiaZiIdx % 12;

  return {
    gan: TIAN_GAN[ganIdx],
    zhi: DI_ZHI[zhiIdx],
    ganIdx: ganIdx,
    zhiIdx: zhiIdx,
    jiaZiIdx: jiaZiIdx,
    naYin: JIA_ZI_60[jiaZiIdx].naYin
  };
}

// 五鼠遁：日干 → 子时天干起始序号
var WU_SHU_DUN = {
  0:0,  // 甲己 → 甲子
  1:2,  // 乙庚 → 丙子
  2:4,  // 丙辛 → 戊子
  3:6,  // 丁壬 → 庚子
  4:8,  // 戊癸 → 壬子
  5:0,  // 己甲 → 甲子
  6:2,  // 庚乙 → 丙子
  7:4,  // 辛丙 → 戊子
  8:6,  // 壬丁 → 庚子
  9:8   // 癸戊 → 壬子
};

// 时柱（hour为0-23整数，23点算次日子时）
function getHourGanZhi(hour, dayGanIdx) {
  var adjustedDayGanIdx = dayGanIdx;

  // 时支：每2小时一个地支，子时=23-1点
  // 23点归入次日，日干需推进一位
  if (hour === 23) {
    adjustedDayGanIdx = (dayGanIdx + 1) % 10;
  }

  // 时支序号
  var zhiIdx;
  if (hour === 23 || hour === 0) {
    zhiIdx = 0; // 子时
  } else {
    zhiIdx = Math.floor((hour + 1) / 2);
  }

  // 五鼠遁求时干
  var startGan = WU_SHU_DUN[adjustedDayGanIdx];
  var hourGanIdx = (startGan + zhiIdx) % 10;

  return { gan: TIAN_GAN[hourGanIdx], zhi: DI_ZHI[zhiIdx], ganIdx: hourGanIdx, zhiIdx: zhiIdx };
}

// ==============================
// 3. 十神计算
// ==============================

var WUXING_SHENG_KE = {
  '木':{生:'火',克:'土',被生:'水',被克:'金'},
  '火':{生:'土',克:'金',被生:'木',被克:'水'},
  '土':{生:'金',克:'水',被生:'火',被克:'木'},
  '金':{生:'水',克:'木',被生:'土',被克:'火'},
  '水':{生:'木',克:'火',被生:'金',被克:'土'}
};

function getTenGods(dayGan, otherGan) {
  var dayWx = TIAN_GAN_WUXING[dayGan];
  var otherWx = TIAN_GAN_WUXING[otherGan];
  var dayYy = TIAN_GAN_YINYANG[dayGan];
  var otherYy = TIAN_GAN_YINYANG[otherGan];
  var sameYy = (dayYy === otherYy);

  if (dayGan === otherGan) return '比肩';

  if (otherWx === dayWx) {
    return sameYy ? '比肩' : '劫财';
  }
  if (otherWx === WUXING_SHENG_KE[dayWx].生) {
    return sameYy ? '食神' : '伤官';
  }
  if (otherWx === WUXING_SHENG_KE[dayWx].克) {
    return sameYy ? '偏财' : '正财';
  }
  if (otherWx === WUXING_SHENG_KE[dayWx].被克) {
    return sameYy ? '七杀' : '正官';
  }
  if (otherWx === WUXING_SHENG_KE[dayWx].被生) {
    return sameYy ? '偏印' : '正印';
  }

  return '未知';
}

// ==============================
// 4. 地支藏干表
// ==============================

var DI_ZHI_CANG_GAN = {
  '子': ['癸'],
  '丑': ['己','癸','辛'],
  '寅': ['甲','丙','戊'],
  '卯': ['乙'],
  '辰': ['戊','乙','癸'],
  '巳': ['丙','庚','戊'],
  '午': ['丁','己'],
  '未': ['己','丁','乙'],
  '申': ['庚','壬','戊'],
  '酉': ['辛'],
  '戌': ['戊','辛','丁'],
  '亥': ['壬','甲']
};

// ==============================
// 5. 纳音表（已包含在 JIA_ZI_60 中）
// ==============================

function getNaYin(gan, zhi) {
  var ganIdx = TIAN_GAN.indexOf(gan);
  var zhiIdx = DI_ZHI.indexOf(zhi);
  // 干支序号必须奇偶一致才成甲子
  if (ganIdx % 2 !== zhiIdx % 2) return null;
  var jiaZiIdx = ((ganIdx % 2 === 0) ? ganIdx * 6 : (ganIdx - 1) * 6) + zhiIdx / 2;
  // 简化：直接搜索
  for (var i = 0; i < JIA_ZI_60.length; i++) {
    if (JIA_ZI_60[i].gz === gan + zhi) {
      return JIA_ZI_60[i].naYin;
    }
  }
  return null;
}

// ==============================
// 6. 大运排法
// ==============================

function getDaYun(yearGan, birthMonthZhiIdx, gender, count) {
  // gender: '男' 或 '女'
  // 阳男阴女顺排，阴男阳女逆排
  var yearGanIdx = TIAN_GAN.indexOf(yearGan);
  var yearYy = TIAN_GAN_YINYANG[yearGan];
  var isMale = (gender === '男');

  var forward;
  if ((yearYy === '阳' && isMale) || (yearYy === '阴' && !isMale)) {
    forward = true; // 顺排
  } else {
    forward = false; // 逆排
  }

  // 起运岁数简化计算
  // 顺排：从出生到下一个节的天数 / 3
  // 逆排：从出生到上一个节的天数 / 3
  // 简化：用月支序号估算
  var startAge;
  if (forward) {
    startAge = Math.abs(birthMonthZhiIdx - 2) + 1; // 简化
    if (startAge > 9) startAge = 1;
  } else {
    startAge = Math.abs(birthMonthZhiIdx - 2) + 1;
    if (startAge > 9) startAge = 1;
  }
  // 更通用的简化：取3-9之间
  startAge = Math.max(1, Math.min(9, startAge));

  var result = [];
  var monthGanIdxBase; // 月干起始用于推大运干

  // 大运从月柱下一步开始
  // 顺排：月柱干支往后推；逆排：月柱干支往前推
  // 需要月柱的甲子序号
  // 用干支组合找六十甲子序号
  var baseGanIdx = yearGanIdx; // 用年干推月干起始
  var startMonthGan = WU_HU_DUN[yearGanIdx];
  var monthGanIdx = (startMonthGan + birthMonthZhiIdx - 2) % 10;
  if (monthGanIdx < 0) monthGanIdx += 10;

  // 六十甲子序号
  var baseJiaZiIdx = -1;
  for (var i = 0; i < JIA_ZI_60.length; i++) {
    if (JIA_ZI_60[i].gz === TIAN_GAN[monthGanIdx] + DI_ZHI[birthMonthZhiIdx]) {
      baseJiaZiIdx = i;
      break;
    }
  }
  if (baseJiaZiIdx === -1) {
    // 干支不匹配奇偶，用数学方式计算
    baseJiaZiIdx = (monthGanIdx * 6 + birthMonthZhiIdx) % 60;
  }

  var actualCount = count || 8;
  for (var step = 1; step <= actualCount; step++) {
    var dyIdx;
    if (forward) {
      dyIdx = (baseJiaZiIdx + step) % 60;
    } else {
      dyIdx = (baseJiaZiIdx - step) % 60;
      if (dyIdx < 0) dyIdx += 60;
    }
    result.push({
      order: step,
      age: startAge + (step - 1) * 10,
      ganZhi: JIA_ZI_60[dyIdx].gz,
      naYin: JIA_ZI_60[dyIdx].naYin
    });
  }

  return { startAge: startAge, forward: forward, daYun: result };
}

// ==============================
// 7. 旺衰判断
// ==============================

var WUXING_WANG_TABLE = {
  '木': {wangZhi:['寅','卯'],xiangZhi:['亥']},
  '火': {wangZhi:['巳','午'],xiangZhi:['寅']},
  '土': {wangZhi:['辰','戌','丑','未'],xiangZhi:['巳','午']},
  '金': {wangZhi:['申','酉'],xiangZhi:['辰','戌','丑','未']},
  '水': {wangZhi:['亥','子'],xiangZhi:['申','酉']}
};

function getDayMasterStrength(dayGan, monthZhi, otherStems, otherBranches) {
  var dayWx = TIAN_GAN_WUXING[dayGan];
  var dayYy = TIAN_GAN_YINYANG[dayGan];
  var wangInfo = WUXING_WANG_TABLE[dayWx];

  var reasons = [];
  var score = 0;

  // 得令：日干五行旺于月令
  if (wangInfo.wangZhi.indexOf(monthZhi) !== -1) {
    score += 3;
    reasons.push('得令：日干' + dayWx + '旺于' + monthZhi + '月');
  } else if (wangInfo.xiangZhi.indexOf(monthZhi) !== -1) {
    score += 2;
    reasons.push('相令：日干' + dayWx + '相于' + monthZhi + '月');
  } else {
    score -= 1;
    reasons.push('失令：日干' + dayWx + '不旺于' + monthZhi + '月');
  }

  // 得地：地支有根（藏干含日干同类）
  var hasRoot = false;
  var branches = otherBranches || [];
  branches.push(monthZhi);
  for (var i = 0; i < branches.length; i++) {
    var cangGan = DI_ZHI_CANG_GAN[branches[i]] || [];
    for (var j = 0; j < cangGan.length; j++) {
      if (TIAN_GAN_WUXING[cangGan[j]] === dayWx) {
        hasRoot = true;
        break;
      }
    }
  }
  if (hasRoot) {
    score += 1;
    reasons.push('得地：地支藏干有日干' + dayWx + '之根');
  } else {
    score -= 1;
    reasons.push('失地：地支无日干之根');
  }

  // 得势：天干多同类（比肩劫财多）
  var tongLeiCount = 0;
  var stems = otherStems || [];
  for (var k = 0; k < stems.length; k++) {
    var tenGod = getTenGods(dayGan, stems[k]);
    if (tenGod === '比肩' || tenGod === '劫财') {
      tongLeiCount++;
    }
  }
  if (tongLeiCount >= 2) {
    score += 1;
    reasons.push('得势：天干有' + tongLeiCount + '个同类助力');
  } else if (tongLeiCount === 0) {
    score -= 1;
    reasons.push('失势：天干无同类助力');
  }

  var strength = (score >= 3) ? '旺' : (score >= 1) ? '偏旺' : (score >= -1) ? '偏弱' : '弱';

  return { strength: strength, score: score, reasons: reasons };
}

// ==============================
// 8. 命局格局术语表
// ==============================

var GE_JU_TABLE = {
  '正官格': {feature:'月令透正官，主清贵端正，忌伤官破格'},
  '七杀格': {feature:'月令透七杀，主权势武职，宜制不宜无制'},
  '正财格': {feature:'月令透正财，主富足勤勉，忌比劫争财'},
  '偏财格': {feature:'月令透偏财，主意外之财、交际达变'},
  '正印格': {feature:'月令透正印，主学问文章，忌财星坏印'},
  '偏印格': {feature:'月令透偏印（枭神），主食禄不丰，见食神则枭神夺食'},
  '食神格': {feature:'月令透食神，主寿考福泽，忌枭神夺食'},
  '伤官格': {feature:'月令透伤官，主才艺傲骨，宜配印制或生财'},
  '从格':   {feature:'日主极弱无根，顺从旺势为从官、从杀、从财等'},
  '化气格': {feature:'日干与月干合化，化为别行之气，需合化条件充足'},
  '建禄格': {feature:'月支为日干之禄位（如甲日寅月），身旺需财官配合'},
  '羊刃格': {feature:'月支为日干之刃位（如甲日卯月），极旺需制伏'}
};

// ==============================
// 综合排盘入口
// ==============================

function paiPan(year, month, day, hour, gender) {
  var yearGZ  = getYearGanZhi(year, month, day);
  var monthGZ = getMonthGanZhi(year, month, day);
  var dayGZ   = getDayGanZhi(year, month, day);
  var hourGZ  = getHourGanZhi(hour, dayGZ.ganIdx);

  // 十神（年干、月干对日干）
  var yearTenGod = getTenGods(dayGZ.gan, yearGZ.gan);
  var monthTenGod = getTenGods(dayGZ.gan, monthGZ.gan);

  // 旺衰
  var otherStems = [yearGZ.gan, monthGZ.gan];
  var otherBranches = [yearGZ.zhi, monthGZ.zhi, hourGZ.zhi];
  var strength = getDayMasterStrength(dayGZ.gan, monthGZ.zhi, otherStems, otherBranches);

  // 大运
  var daYun = getDaYun(yearGZ.gan, monthGZ.zhiIdx, gender, 8);

  // 纳音
  var yearNaYin = getNaYin(yearGZ.gan, yearGZ.zhi);
  var monthNaYin = getNaYin(monthGZ.gan, monthGZ.zhi);
  var dayNaYin = getNaYin(dayGZ.gan, dayGZ.zhi);
  var hourNaYin = getNaYin(hourGZ.gan, hourGZ.zhi);

  return {
    year:  {gan:yearGZ.gan,  zhi:yearGZ.zhi,  tenGod:yearTenGod,  naYin:yearNaYin,  cangGan:DI_ZHI_CANG_GAN[yearGZ.zhi]},
    month: {gan:monthGZ.gan, zhi:monthGZ.zhi, tenGod:monthTenGod, naYin:monthNaYin, cangGan:DI_ZHI_CANG_GAN[monthGZ.zhi]},
    day:   {gan:dayGZ.gan,   zhi:dayGZ.zhi,   naYin:dayNaYin,     cangGan:DI_ZHI_CANG_GAN[dayGZ.zhi]},
    hour:  {gan:hourGZ.gan,  zhi:hourGZ.zhi,  naYin:hourNaYin,    cangGan:DI_ZHI_CANG_GAN[hourGZ.zhi]},
    dayMaster: dayGZ.gan,
    dayMasterWuxing: TIAN_GAN_WUXING[dayGZ.gan],
    dayMasterYinyang: TIAN_GAN_YINYANG[dayGZ.gan],
    strength: strength,
    daYun: daYun,
    geJu: GE_JU_TABLE
  };
}

// 依据：渊海子平、滴天髓、子平真诠、三命通会、穷通宝鉴
// 节气近似处理，精确排盘建议用专业软件二次校验
