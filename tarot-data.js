var TAROT_CARDS = [
  // ==================== 大阿尔卡纳 (0-21) ====================
  {
    id: 0,
    nameEn: 'The Fool',
    nameZh: '愚人',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['新的开始', '冒险', '自由', '纯真', '潜力'],
      reversed: ['鲁莽', '冒险', '混乱', '错误的决定', '不切实际']
    },
    description: '一个年轻人站在悬崖边，背着小包袱，眼睛望向天空，小狗在脚边吠叫。象征踏上未知旅程的勇气与天真。',
    uprightMeaning: '正位时代表新的旅程即将开始，怀着开放的心态迎接未知。鼓励你相信直觉，勇敢迈出第一步。纯真与自由的力量。',
    reversedMeaning: '逆位时提示鲁莽与不计后果，可能因缺乏规划而陷入困境。或在需要决断时犹豫不决，错失良机。'
  },
  {
    id: 1,
    nameEn: 'The Magician',
    nameZh: '魔术师',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['创造力', '意志力', '行动', '专注', '显化'],
      reversed: ['欺骗', '操纵', '未发挥的才能', '浪费天赋', '不诚实']
    },
    description: '魔术师站在桌前，一手举杖指天，一手指地，桌上摆放着权杖、圣杯、宝剑和星币。头顶上方有无限符号。',
    uprightMeaning: '正位表示你拥有实现目标所需的一切工具和资源。现在是集中意志、付诸行动的时候。你具备将想法转化为现实的创造力和能力。',
    reversedMeaning: '逆位暗示才能被浪费或用于操纵他人。可能存在欺骗或自我欺骗。需要重新审视动机，诚实地面对自己的天赋与责任。'
  },
  {
    id: 2,
    nameEn: 'The High Priestess',
    nameZh: '女祭司',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['直觉', '潜意识', '神秘', '内在智慧', '静默'],
      reversed: ['秘密', '脱离直觉', '表面化', '压抑', '信息不完整']
    },
    description: '女祭司端坐在两根柱子之间（黑柱与白柱），膝上放着卷轴，脚边有一弯新月，身后帷幕上有石榴图案。',
    uprightMeaning: '正位召唤你倾听内在声音，关注梦境和直觉信号。此刻不宜急于行动，而应静心观察。答案在深处等待你发现。',
    reversedMeaning: '逆位提示你与直觉脱节，或忽视潜意识传递的信息。可能有秘密被隐藏，或过度依赖逻辑而忽略感受。需要重新连接内在智慧。'
  },
  {
    id: 3,
    nameEn: 'The Empress',
    nameZh: '皇后',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['丰饶', '母性', '创造', '自然', '繁荣'],
      reversed: ['依赖', '过度保护', '创造阻塞', '忽视自我', '停滞']
    },
    description: '皇后坐在丰茂的花园中，头戴十二星冠冕，手持权杖，盾牌上是金星符号。周围麦田金黄，溪流潺潺。',
    uprightMeaning: '正位象征丰盛与成长的能量。适合创造性项目、孕育新生命或享受感官之乐。大地母亲般的滋养力量正在你生活中显现。',
    reversedMeaning: '逆位暗示过度依赖他人或创造能量受阻。可能在关系中失去自我，或因过度付出而忽视自身需求。需要找回独立与平衡。'
  },
  {
    id: 4,
    nameEn: 'The Emperor',
    nameZh: '皇帝',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['权威', '结构', '控制', '领导力', '稳定'],
      reversed: ['独裁', '僵化', '滥用权力', '控制欲', '缺乏纪律']
    },
    description: '皇帝坐在石制宝座上，身穿铠甲，手持权杖和宝球。白色长须面容威严，身后山脉耸立，红色旗帜飘扬。',
    uprightMeaning: '正位代表建立秩序与掌控局面。通过纪律和结构获得稳定。适合承担领导角色，运用理性与规则推动事情向前发展。',
    reversedMeaning: '逆位警告过于僵化或滥用权威。可能因控制欲过强而疏远他人，或缺乏自律导致混乱。需要在掌控与灵活之间找到平衡。'
  },
  {
    id: 5,
    nameEn: 'The Hierophant',
    nameZh: '教皇',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['传统', '信仰', '教育', '归属', '指导'],
      reversed: ['反叛', '非传统', '自由思考', '挑战权威', '个人信念']
    },
    description: '教皇身穿红袍，头戴三重冠，坐在两根灰色石柱之间。他举起右手祝福，两名信徒跪在脚下。',
    uprightMeaning: '正位表示寻求精神指导或遵循传统智慧。适合学习、加入团体或接受导师引领。传统和制度在此时提供有价值的支持。',
    reversedMeaning: '逆位暗示打破常规或质疑既定权威。你可能在寻求属于自己的信仰之路，而非接受他人传授的教条。个人信念优于集体规范。'
  },
  {
    id: 6,
    nameEn: 'The Lovers',
    nameZh: '恋人',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['爱情', '选择', '和谐', '价值观', '结合'],
      reversed: ['分离', '失衡', '错误选择', '价值观冲突', '不忠']
    },
    description: '一男一女站在花园中，上方有带翅膀的天使，太阳照耀。女人身后有知识之树，男人身后有生命之树。',
    uprightMeaning: '正位代表真挚的情感联结与重要的选择。涉及价值观的统一与心灵的结合。提醒你在选择中忠于内心的真实渴望。',
    reversedMeaning: '逆位暗示关系中的不和谐或价值观冲突。可能面临艰难选择或做出违背内心的决定。需要诚实面对分歧，避免逃避。'
  },
  {
    id: 7,
    nameEn: 'The Chariot',
    nameZh: '战车',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['胜利', '意志', '控制', '决心', '前进'],
      reversed: ['失控', '方向不明', '内耗', '盲目冲撞', '挫败']
    },
    description: '战士站在战车上，头戴桂冠，手持权杖。拉车的一黑一白两匹斯芬克斯方向相反。车篷上点缀星辰。',
    uprightMeaning: '正位象征通过意志力和决心取得胜利。你需要统合内心对立的力量，保持专注向前推进。成功来自自律和清晰的方向感。',
    reversedMeaning: '逆位提示失控或方向不明。内在矛盾消耗你的力量，或因冲动而偏离目标。需要停下来重新校准方向，停止内耗。'
  },
  {
    id: 8,
    nameEn: 'Strength',
    nameZh: '力量',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['勇气', '内在力量', '耐心', '温柔', '自制'],
      reversed: ['自我怀疑', '软弱', '缺乏信心', '失控', '内在恐惧']
    },
    description: '一位女子温柔地抚摸一只狮子，头顶上方有无限符号。她身穿白袍，头戴花环，狮子顺从地低下头。',
    uprightMeaning: '正位代表以柔克刚的内在力量。不是压制而是温柔地驯服内心的野兽。勇气与耐心让你在困难中保持坚定而不失柔软。',
    reversedMeaning: '逆位暗示自我怀疑或缺乏勇气。可能因恐惧而退缩，或以粗暴方式处理需要温柔对待的问题。需要重新连接内在信心。'
  },
  {
    id: 9,
    nameEn: 'The Hermit',
    nameZh: '隐士',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['内省', '独处', '寻求真理', '智慧', '指引'],
      reversed: ['孤立', '退缩', '固执', '迷失', '拒绝建议']
    },
    description: '一位老者站在雪山之巅，身穿灰色斗篷，一手举着发光的灯笼，一手持权杖。灯笼中的六芒星发出内在之光。',
    uprightMeaning: '正位召唤你暂时抽离喧嚣，进入内省与独处。答案不在外界而在内心深处。此刻适合静心冥想，寻找内在真相。',
    reversedMeaning: '逆位提示过度孤立或拒绝他人的帮助。可能因固执而迷失方向，或在孤独中陷入消极循环。需要适度敞开，接受指引。'
  },
  {
    id: 10,
    nameEn: 'Wheel of Fortune',
    nameZh: '命运之轮',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['转变', '机遇', '命运', '循环', '好运'],
      reversed: ['厄运', '抗拒变化', '失控', '延迟', '因果']
    },
    description: '巨大的轮子居中，轮上写着TARO和希伯来字母。四角有带翅膀的生物（天使、鹰、狮子、牛）各持一书。',
    uprightMeaning: '正位代表命运的转机和好运降临。循环正在转向对你有利的方向。抓住机遇，同时理解一切盛衰皆有周期。',
    reversedMeaning: '逆位暗示运势低落或抗拒不可避免的变化。可能面临延迟或挫折。需要接受周期规律，在低谷中为未来积蓄力量。'
  },
  {
    id: 11,
    nameEn: 'Justice',
    nameZh: '正义',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['公正', '真相', '因果', '平衡', '法律'],
      reversed: ['不公', '不诚实', '逃避责任', '偏颇', '法律纠纷']
    },
    description: '正义女神端坐在石座上，手持宝剑和天平。红袍垂落，右脚从袍下露出。背景是紫色帷幕。',
    uprightMeaning: '正位代表公正与真相将得到彰显。你的行为产生了相应的结果，善恶有报。适合做出理性、公平的决定，或面临法律事务。',
    reversedMeaning: '逆位暗示不公或逃避责任。可能有人不诚实，或你面对不公平的对待。需要面对自己的偏见，承担应尽的责任。'
  },
  {
    id: 12,
    nameEn: 'The Hanged Man',
    nameZh: '倒吊人',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['牺牲', '放下', '新视角', '等待', '臣服'],
      reversed: ['拖延', '无谓牺牲', '抗拒', '停滞', '犹豫']
    },
    description: '一个年轻人头朝下悬挂在T形木架上，腿交叉成三角形。面容安详，头部散发金色光芒。',
    uprightMeaning: '正位代表自愿牺牲以获得更高理解。通过反转视角获得新洞察。此刻需要放下控制，耐心等待，允许转变自然发生。',
    reversedMeaning: '逆位暗示无意义的牺牲或抗拒必要的放下。可能在拖延决定，或因固执而陷入困境。需要评估付出是否值得，停止犹豫。'
  },
  {
    id: 13,
    nameEn: 'Death',
    nameZh: '死神',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['转变', '结束', '释放', '过渡', '重生'],
      reversed: ['抗拒变化', '停滞', '恐惧', '无法放下', '拖延结束']
    },
    description: '骷髅骑士身披铠甲骑在白马上，手持黑色旗帜。地上有倒下的国王，少女转身，主教祈求，远处太阳在双塔间升起。',
    uprightMeaning: '正位不代表肉身死亡，而是深刻转变。旧的形式结束，为新生让路。虽然可能伴随不舍，但释放过去是必要的过渡。',
    reversedMeaning: '逆位暗示你抗拒必要的结束或变化。 clinging to旧模式让你停滞不前。需要勇敢面对终结，才能开启新的篇章。'
  },
  {
    id: 14,
    nameEn: 'Temperance',
    nameZh: '节制',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['平衡', '调和', '耐心', '适度', '疗愈'],
      reversed: ['失衡', '过度', '缺乏耐心', '不协调', '自我疗愈']
    },
    description: '大天使站在池塘边，一脚在水中一脚在陆地，两手各持一金一银杯倾倒水。额头有发光的太阳符号，远处有一条向上小路通往山顶王冠。',
    uprightMeaning: '正位代表通过调和与平衡找到中道。适合整合对立面，以耐心和适度的方式处理事务。疗愈正在发生，保持平和的节奏。',
    reversedMeaning: '逆位暗示生活失衡或缺乏耐心。可能过度或不足，各层面难以协调。需要重新审视哪里失去了节奏，逐步恢复平衡。'
  },
  {
    id: 15,
    nameEn: 'The Devil',
    nameZh: '恶魔',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['束缚', '成瘾', '物质主义', '欲望', '依附'],
      reversed: ['释放', '觉醒', '挣脱束缚', '重获自由', '克服成瘾']
    },
    description: '恶魔头顶倒置五芒星，坐于黑色祭坛上，右手举起。一男一女被松散的锁链拴在祭坛脚边，头上有角和尾。',
    uprightMeaning: '正位揭示你被某种执着或欲望束缚。可能是成瘾、不健康的关系或物质主义。锁链松散——你比想象中更有选择权。',
    reversedMeaning: '逆位表示开始觉察束缚并寻求挣脱。你正在挣脱枷锁，重新夺回自由。这是觉醒的时刻，改变已经发生。'
  },
  {
    id: 16,
    nameEn: 'The Tower',
    nameZh: '高塔',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['突变', '崩塌', '觉醒', '真相揭露', '解放'],
      reversed: ['抗拒变化', '延迟崩塌', '避免灾难', '内在动荡', '恐惧']
    },
    description: '高塔被闪电击中，顶部王冠被掀落。两人从塔中坠下。黑暗的天空下火光与碎石四散。',
    uprightMeaning: '正位代表突然的剧变和旧结构的崩塌。虽然震撼，但这是打破虚假根基、揭露真相的必要过程。灾后将有更真实的重建。',
    reversedMeaning: '逆位暗示你正抗拒不可避免的改变，或勉强推迟崩塌。内在动荡仍在持续。越早接受变化，越能减少不必要的痛苦。'
  },
  {
    id: 17,
    nameEn: 'The Star',
    nameZh: '星星',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['希望', '信心', '灵感', '疗愈', '宁静'],
      reversed: ['绝望', '失去信心', '悲观', ' disconnected', '希望渺茫']
    },
    description: '裸身女子跪在水边，一脚踏入池中，一手将水倒入池中、一手倒向大地。头顶上方有八颗星，中央一颗大星闪耀。',
    uprightMeaning: '正位是风暴后的希望之光。提醒你宇宙在支持你，保持信心和开放。灵感与疗愈正在流动，心灵获得宁静与滋养。',
    reversedMeaning: '逆位暗示失去希望或与内在之光断联。可能陷入悲观或自我怀疑。需要重新连接灵性源头，允许自己被滋养和指引。'
  },
  {
    id: 18,
    nameEn: 'The Moon',
    nameZh: '月亮',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['幻觉', '恐惧', '潜意识', '不确定', '直觉'],
      reversed: ['释放恐惧', '真相浮现', '驱散迷雾', '清晰', '理性回归']
    },
    description: '月亮悬于夜空，有人脸。两座塔之间有一条蜿蜒小路通向远方。一只狼和一只狗对月嚎叫，水中有一只龙虾爬出。',
    uprightMeaning: '正位代表迷雾与不确定。潜意识中的恐惧和幻觉浮现。并非一切如表面所见。此刻需要信任直觉，谨慎前行，等待迷雾散去。',
    reversedMeaning: '逆位暗示恐惧开始消散，真相逐渐浮现。你开始看清先前隐藏的事物。理性回归，迷雾退去， clarity正在重建。'
  },
  {
    id: 19,
    nameEn: 'The Sun',
    nameZh: '太阳',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['喜悦', '成功', '活力', '清晰', '乐观'],
      reversed: ['暂时的阴霾', '过度乐观', '延迟成功', '失去热情', '自我中心']
    },
    description: '一轮巨大的太阳照耀大地，一个裸身孩童骑在白马上，双手举着红色旗帜。身后花园向日葵盛开，阳光四射。',
    uprightMeaning: '正位代表纯粹的喜悦、成功和活力。事情朝着光明方向发展，充满自信与乐观。适合庆祝、展现自我和享受生命的丰盛。',
    reversedMeaning: '逆位暗示暂时的阴云或过度膨胀。成功可能延迟，或因过于乐观而忽视实际问题。需要保持热忱的同时脚踏实地。'
  },
  {
    id: 20,
    nameEn: 'Judgement',
    nameZh: '审判',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['觉醒', '重生', '召唤', '反思', '宽恕'],
      reversed: ['自我怀疑', '忽视召唤', '回避', '苛刻评判', '犹豫']
    },
    description: '大天使加百列在云端吹响号角，号角上挂着十字旗帜。下方坟墓中三人从棺中站起，举手仰望，孩童背对画面。',
    uprightMeaning: '正位代表觉醒的时刻和内在召唤。过去的经历经过审视带来宽恕与重生。你被召唤迈向更高的存在状态，回应灵魂的呼唤。',
    reversedMeaning: '逆位暗示你忽略或怀疑内在的召唤。可能过度苛责自己或他人，阻碍了重生。需要诚实地自我反思，放下评判，聆听召唤。'
  },
  {
    id: 21,
    nameEn: 'The World',
    nameZh: '世界',
    type: 'major',
    element: null,
    suit: null,
    rank: null,
    keywords: {
      upright: ['完成', '成就', '圆满', '整合', '旅途的终点'],
      reversed: ['未完成', '延迟', '缺收尾', '循环未闭', '近终点']
    },
    description: '一位舞者被椭圆形花环环绕，手持两根权杖。花环四角同样有天使、鹰、狮、牛四活物。舞者身披紫色轻纱。',
    uprightMeaning: '正位象征一个周期的圆满完成和成就的达成。你已经整合了旅途中的所有经验。庆祝这一里程碑，同时新的循环即将开启。',
    reversedMeaning: '逆位暗示项目或阶段尚未真正完成。可能差最后一步，或因拖延而未能收尾。需要坚持到底，完成未尽之事。'
  },

  // ==================== 小阿尔卡纳 - 权杖组 (22-35) ====================
  {
    id: 22,
    nameEn: 'Ace of Wands',
    nameZh: '权杖Ace',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: 'ace',
    keywords: {
      upright: ['新创意', '灵感', '热情', '机遇', '种子'],
      reversed: ['延迟', '缺乏热情', '错失良机', '创意枯竭', '犹豫']
    },
    description: '一只手从云中伸出，紧握一根发芽的权杖。权杖上长出新叶，下方有城堡和河流，背景明亮温暖。',
    uprightMeaning: '正位代表一股新的创意或热情之火被点燃。灵感和机遇正在涌现，适合开启新项目或追逐梦想。抓住这股初始的能量。',
    reversedMeaning: '逆位暗示热情消退或创意被延迟。可能因犹豫而错失良机，或灵感未能转化为行动。需要重新点燃内在火焰。'
  },
  {
    id: 23,
    nameEn: 'Two of Wands',
    nameZh: '权杖二',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '2',
    keywords: {
      upright: ['规划', '决策', '未来视野', '探索', '掌控'],
      reversed: ['恐惧未知', '计划不周', '短视', '犹豫不决', '放弃掌控']
    },
    description: '一个人站在城堡墙上，手持地球仪，旁边两根权杖固定在墙上。远处有陆地和海洋，玫瑰与百合装饰城墙。',
    uprightMeaning: '正位代表正在规划未来并审视全局。你站在有利位置评估选择，世界在你掌中。是做出战略决策并迈出城堡的时刻。',
    reversedMeaning: '逆位暗示因恐惧未知而犹豫，或计划不够长远。可能放弃掌控让命运随机决定。需要更勇敢地面对选择。'
  },
  {
    id: 24,
    nameEn: 'Three of Wands',
    nameZh: '权杖三',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '3',
    keywords: {
      upright: ['扩展', '前瞻', '进展', '等待回报', '远眺'],
      reversed: ['延迟', '障碍', '短视', '失望', '缺乏远见']
    },
    description: '一个人站在悬崖上，背对画面，望向远方海面上的船只。三根权杖扎根于地面，黄色天空下帆船远航。',
    uprightMeaning: '正位代表你的计划正在推进，开始看到扩展的前景。已经种下的种子正在生长，等待船只带回成果。保持耐心与远见。',
    reversedMeaning: '逆位暗示计划受阻或回报延迟。可能因短视而错过更好的机会，或对前景过于乐观。需要调整预期，寻找替代方案。'
  },
  {
    id: 25,
    nameEn: 'Four of Wands',
    nameZh: '权杖四',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '4',
    keywords: {
      upright: ['庆祝', '欢聚', '和谐', '里程碑', '归属感'],
      reversed: ['过渡期', '不稳固', '缺乏归属', '推迟庆祝', '暂时的家']
    },
    description: '四根权杖搭成花架，上面缠绕花果。两人手持花束跳舞庆祝，远处有城堡，人们挥舞旗帜欢迎。',
    uprightMeaning: '正位代表值得庆祝的里程碑和欢聚时刻。和谐与归属感正在形成。适合举办聚会、乔迁之喜或享受社群的温暖。',
    reversedMeaning: '逆位暗示过渡阶段或归属感不足。可能正在搬迁或暂居过渡之所，庆祝需要推迟。根基尚未完全稳固。'
  },
  {
    id: 26,
    nameEn: 'Five of Wands',
    nameZh: '权杖五',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '5',
    keywords: {
      upright: ['竞争', '冲突', '摩擦', '磨练', '多元声音'],
      reversed: ['内耗', '回避冲突', '妥协', ' tensions缓和', '放弃竞争']
    },
    description: '五个年轻人各持权杖在空中挥舞交锋，姿势不同，似在争斗又似在比试。天空明亮，地面起伏不平。',
    uprightMeaning: '正位代表竞争和意见的碰撞。虽然表面混乱，但多元声音可以磨砺出更好的方案。冲突不必是破坏性的，也是成长的机会。',
    reversedMeaning: '逆位暗示内耗或回避必要的冲突。可能为了表面和平而压抑分歧，或内部争斗消耗团队力量。需要直面并解决矛盾。'
  },
  {
    id: 27,
    nameEn: 'Six of Wands',
    nameZh: '权杖六',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '6',
    keywords: {
      upright: ['胜利', '认可', '荣誉', '信心', '领导'],
      reversed: ['失败', '失去认可', '自负', '声望下降', '延迟成功']
    },
    description: '一位骑者头戴桂冠，手持权杖上系着花环，高高举过头顶。周围有行人跟随庆祝，也手持权杖。',
    uprightMeaning: '正位代表公开的胜利和他人的认可。你的努力得到回报，获得荣誉和信心。适合接受赞扬并享受成就感，保持谦逊。',
    reversedMeaning: '逆位暗示未能获得预期认可或成功延迟。可能因自负而失去支持，或在最后关头失利。需要调整态度，重新评估。'
  },
  {
    id: 28,
    nameEn: 'Seven of Wands',
    nameZh: '权杖七',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '7',
    keywords: {
      upright: ['防御', '坚守立场', '优势', '挑战', '不屈'],
      reversed: [' overwhelmed', '放弃', '不堪重负', '退让', '失去优势']
    },
    description: '一个人站在高处，手持权杖向下防御。下方六个权杖向他举起攻击。他处于有利位置但独自应对多个对手。',
    uprightMeaning: '正位代表你需要坚守立场抵御挑战。虽然处于有利位置，但面临来自多方的压力。保持坚定，捍卫自己的立场和价值观。',
    reversedMeaning: '逆位暗示你感到不堪重负或正在退让。可能放弃了自己的立场，或力量不足以抵挡压力。需要寻求支援或重新选择战场。'
  },
  {
    id: 29,
    nameEn: 'Eight of Wands',
    nameZh: '权杖八',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '8',
    keywords: {
      upright: ['速度', '消息', '行动', '进展', '通信'],
      reversed: ['延迟', '阻碍', '混乱', '计划打乱', '信息滞留']
    },
    description: '八根权杖如箭矢般在空中飞过，斜划过明亮的天空。下方有河流、绿地和一座小城堡。画面充满速度感。',
    uprightMeaning: '正位代表快速发展和消息的传递。停滞的局面突然加速，事情迅速推进。保持灵活，迎接突如其来的变化和机遇。',
    reversedMeaning: '逆位暗示延迟或阻碍。计划被打乱，信息流通不畅。可能因混乱或方向不清而行动滞后。需要理清头绪，等待时机。'
  },
  {
    id: 30,
    nameEn: 'Nine of Wands',
    nameZh: '权杖九',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '9',
    keywords: {
      upright: ['坚持', '韧性', '警惕', '最后防线', '疲惫但不放弃'],
      reversed: ['疲惫', '放弃', '防御过度', '倦怠', '不必要的戒备']
    },
    description: '一个士兵靠在权杖上，头上有绷带，神情疲惫但警惕。身后八根权杖排列成防御线。',
    uprightMeaning: '正位代表经历诸多考验后的坚韧。虽然疲惫，但胜利近在咫尺。不要放弃，再坚持最后一步。你的韧性将被证明是值得的。',
    reversedMeaning: '逆位暗示因倦怠而想要放弃，或防御过度以至于封闭自己。可能不再需要如此高度戒备。需要适当休整，重新评估防线。'
  },
  {
    id: 31,
    nameEn: 'Ten of Wands',
    nameZh: '权杖十',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: '10',
    keywords: {
      upright: ['重担', '过劳', '责任', '接近终点', '不堪负荷'],
      reversed: ['放下', '卸下重担', '委托', '释放', '恢复']
    },
    description: '一个人艰难地走向城镇，背负着十根权杖捆成的重负。虽然接近目的地，但几乎被重担压倒。',
    uprightMeaning: '正位代表承担了过多的责任和压力。虽然目标在望，但你已不堪重负。需要评估哪些重担是必要的，学会委托和放下。',
    reversedMeaning: '逆位暗示你正在放下不必要的重担。开始学会委托和释放，或拒绝承担超出能力的责任。卸下后将是解脱和恢复。'
  },
  {
    id: 32,
    nameEn: 'Page of Wands',
    nameZh: '权杖侍从',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: 'page',
    keywords: {
      upright: ['探索', '热情', '消息', '冒险精神', '新灵感'],
      reversed: ['浮躁', '半途而废', '消息延迟', '缺乏方向', '不成熟']
    },
    description: '一个年轻人身着橙色衣袍，站立举着权杖。头顶有羽毛装饰，身后是沙漠和三座金字塔。',
    uprightMeaning: '正位代表年轻的探索精神和新的冒险冲动。带来充满热情的消息或灵感。适合大胆尝试新事物，即便尚未成熟也值得追随。',
    reversedMeaning: '逆位暗示浮躁或缺乏持续力。热情来得快去得也快，计划可能半途而废。需要培养耐心和方向感，避免分散精力。'
  },
  {
    id: 33,
    nameEn: 'Knight of Wands',
    nameZh: '权杖骑士',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: 'knight',
    keywords: {
      upright: ['冲劲', '冒险', '行动力', '魅力', '远征'],
      reversed: ['鲁莽', '挫折', '三分钟热度', '急躁', '虎头蛇尾']
    },
    description: '骑士骑着后腿抬起的马，手持权杖向前冲。铠甲上有蝾螈装饰，头盔上有红羽毛，沙漠中奔驰。',
    uprightMeaning: '正位代表充满能量和魅力的行动者。勇往直前，敢于冒险和追求目标。适合果断出击，将想法付诸实践，但需注意方向。',
    reversedMeaning: '逆位暗示鲁莽或行动受阻。可能因急躁而犯错，或热情消退后虎头蛇尾。需要重新聚焦能量，控制冲动的节奏。'
  },
  {
    id: 34,
    nameEn: 'Queen of Wands',
    nameZh: '权杖王后',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: 'queen',
    keywords: {
      upright: ['自信', '魅力', '热情', '独立', '领导力'],
      reversed: ['自私', '嫉妒', '控制欲', '失去热情', '不安全感']
    },
    description: '王后端坐宝座，手持权杖和向日葵，身旁有黑猫。她头戴金色王冠，红色长袍垂下，宝座上有狮子雕刻。',
    uprightMeaning: '正位代表自信、有魅力的女性能量。热情洋溢，独立而温暖，天生具备感召力。适合展现个人魅力，以热忱引领他人。',
    reversedMeaning: '逆位暗示因不安全感而变得自私或嫉妒。可能控制欲过强，或热情被自我怀疑消耗。需要重建内在自信和真诚的连接。'
  },
  {
    id: 35,
    nameEn: 'King of Wands',
    nameZh: '权杖国王',
    type: 'minor',
    element: 'fire',
    suit: 'wands',
    rank: 'king',
    keywords: {
      upright: ['领导力', '远见', '魄力', '果断', '创业'],
      reversed: ['独断', '急躁', '控制欲', '冷酷', '不切实际']
    },
    description: '国王端坐宝座，手持权杖和火焰权球。他身穿橙红长袍，宝座上有狮子和蝾螈装饰，火蜥蜴在脚下。',
    uprightMeaning: '正位代表具有远见和魄力的领导者。果断而充满活力，善于激发团队和开创新局面。适合承担领导角色，以信念驱动行动。',
    reversedMeaning: '逆位暗示独断专行或急躁冒进。可能因控制欲过强而疏远他人，或缺乏耐心导致决策失误。需要倾听不同声音，脚踏实地。'
  },

  // ==================== 小阿尔卡纳 - 圣杯组 (36-49) ====================
  {
    id: 36,
    nameEn: 'Ace of Cups',
    nameZh: '圣杯Ace',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: 'ace',
    keywords: {
      upright: ['新情感', '爱', '直觉', '灵感', '心灵开放'],
      reversed: ['情感阻塞', '压抑感受', '失去灵感', '冷漠', '内心封闭']
    },
    description: '一只手从云中伸出，托着一个溢水的圣杯。水如五道溪流流入莲花池。一只鸽子叼着圣餐饼飞入杯中。',
    uprightMeaning: '正位代表新的情感体验或灵性觉醒。心扉打开，爱与灵感如泉水涌出。适合迎接新的关系或深化灵性连接。',
    reversedMeaning: '逆位暗示情感阻塞或压抑感受。可能因恐惧而关闭心扉，或灵感与直觉暂时枯竭。需要允许自己感受并释放。'
  },
  {
    id: 37,
    nameEn: 'Two of Cups',
    nameZh: '圣杯二',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '2',
    keywords: {
      upright: ['联结', '伙伴关系', '吸引', '和解', '互惠'],
      reversed: ['失衡', '分离', '误解', '关系破裂', '不对等']
    },
    description: '两人面对面站立，各持一杯互相举杯致敬。两人之间有双蛇缠绕的权杖，上有带翼狮子头。背景有房屋和绿色田野。',
    uprightMeaning: '正位代表两人之间的真挚联结和互惠关系。可能是新恋情的萌芽或伙伴关系的形成。双方平等尊重，心与心相呼应。',
    reversedMeaning: '逆位暗示关系失衡或出现裂痕。可能因误解而疏远，或一方付出过多。需要重新沟通和调整，或接受分离的现实。'
  },
  {
    id: 38,
    nameEn: 'Three of Cups',
    nameZh: '圣杯三',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '3',
    keywords: {
      upright: ['友谊', '庆祝', '欢聚', '社群', '分享喜悦'],
      reversed: ['过度纵乐', 'third party', '八卦', '社交疲劳', '疏远']
    },
    description: '三位女子翩翩起舞，各举一杯庆祝。她们身着花环和彩色长裙，脚下是丰茂的果实和蔬菜。',
    uprightMeaning: '正位代表友谊的温暖和欢聚的喜悦。适合与好友共度时光，庆祝生命中的美好时刻。分享让快乐加倍。',
    reversedMeaning: '逆位暗示过度纵乐或社交中的不和谐。可能有第三者介入或流言蜚语。需要审视社交圈，避免纵欲和失去分寸。'
  },
  {
    id: 39,
    nameEn: 'Four of Cups',
    nameZh: '圣杯四',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '4',
    keywords: {
      upright: ['倦怠', '冷漠', '不满足', '冥想', '机会盲视'],
      reversed: ['觉察', '重新振作', '接受机会', '走出倦怠', '新兴趣']
    },
    description: '一个年轻人坐在树下，双手交叉胸前，面前有三个杯子。云端伸出一只手递来第四个杯子，他视而不见。',
    uprightMeaning: '正位代表因倦怠或不满而忽略身边的机会。沉浸在自己的世界中，对眼前递来的礼物视而不见。需要走出停滞重新审视。',
    reversedMeaning: '逆位暗示你开始觉察到新的可能性，或从冷漠中振作。愿意接受曾被忽视的机会。心态正在转变，重新找回热情。'
  },
  {
    id: 40,
    nameEn: 'Five of Cups',
    nameZh: '圣杯五',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '5',
    keywords: {
      upright: ['失去', '遗憾', '悲伤', '聚焦负面', '残留希望'],
      reversed: ['释怀', '接受', '重建', '原谅', '前行']
    },
    description: '一个身披黑袍的人低头哀伤，面前三个杯子倒翻。身后两个杯子仍站立，一座桥跨过河流通往远处的城堡。',
    uprightMeaning: '正位代表因失去而悲伤，过度聚焦于已倒翻的杯子而忽略剩下的。允许自己哀悼，但不要忽视仍存的希望和可能性。',
    reversedMeaning: '逆位暗示你开始从悲伤中恢复，愿意接受现实并前行。或找到原谅自己和他人。残存的杯子被重新发现，重建开始。'
  },
  {
    id: 41,
    nameEn: 'Six of Cups',
    nameZh: '圣杯六',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '6',
    keywords: {
      upright: ['怀旧', '童年', '纯真', '回忆', '善意的给予'],
      reversed: ['放下过去', '前行', '活在当下', '过度怀旧', '幼稚']
    },
    description: '一个小男孩将一杯装满花递给小女孩。五杯排列在花园中，有花朵和房屋。画面充满温暖与天真。',
    uprightMeaning: '正位代表温暖的回忆和纯真的情感。可能是故人重逢或重温童年快乐。善意的给予和接受让心灵获得滋养。',
    reversedMeaning: '逆位暗示需要放下对过去的执着，活在当下。可能过度怀旧而阻碍前进，或需要从幼稚的行为中成长。'
  },
  {
    id: 42,
    nameEn: 'Seven of Cups',
    nameZh: '圣杯七',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '7',
    keywords: {
      upright: ['选择', '幻想', '白日梦', '诱惑', '多重可能'],
      reversed: ['清明', '做出选择', '看清现实', '从幻想中醒来', '专注']
    },
    description: '一个人影面对七个漂浮的杯子，杯中各有人面、蛇、城堡、珠宝、花环、龙头和阴影。画面如梦境般虚幻。',
    uprightMeaning: '正位代表面临多重选择和丰富的想象力。但也需警惕幻觉和自我欺骗。分辨真实与幻想，做出清醒的决定。',
    reversedMeaning: '逆位暗示从幻想中醒来，开始看清现实。或终于做出选择，聚焦于一个方向。迷雾正在消散， clarity浮现。'
  },
  {
    id: 43,
    nameEn: 'Eight of Cups',
    nameZh: '圣杯八',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '8',
    keywords: {
      upright: ['离开', '寻找更深意义', '放弃', '灵性探索', '前行'],
      reversed: ['害怕改变', '停滞', '回归', '犹豫不决', '浅尝辄止']
    },
    description: '一个旅人拄杖离开整齐排列的八个杯子，走向月光下的山路。他背对杯子，红衣映着月光，远处有山峦。',
    uprightMeaning: '正位代表主动离开不再满足的局面，寻找更深层的意义。情感上意识到现有的一切不再足够。踏上灵性探索的旅途。',
    reversedMeaning: '逆位暗示因恐惧改变而停滞不前。可能在离开与留下之间犹豫，或浅尝辄止。需要诚实面对内心真正的渴望。'
  },
  {
    id: 44,
    nameEn: 'Nine of Cups',
    nameZh: '圣杯九',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '9',
    keywords: {
      upright: ['满足', '愿望成真', '享受', '幸福', '自得'],
      reversed: ['不满足', '表面幸福', '贪婪', '愿望落空', '自私']
    },
    description: '一个丰满的人双手交叉胸前，满意地坐在弧形排列的九个杯子前。他戴着红色帽子，面带微笑。',
    uprightMeaning: '正位代表愿望成真和情感上的满足。你享受着自己努力带来的成果。这是一个值得庆祝和感恩的时刻。',
    reversedMeaning: '逆位暗示表面满足但内心不充实。可能因贪婪而永不餍足，或愿望未能真正带来幸福。需要审视什么才能让你真正满足。'
  },
  {
    id: 45,
    nameEn: 'Ten of Cups',
    nameZh: '圣杯十',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: '10',
    keywords: {
      upright: ['幸福', '和谐家庭', '圆满', '情感满足', '共同体'],
      reversed: ['家庭矛盾', '失衡', '破碎的梦想', '不和谐', '表里不一']
    },
    description: '一对夫妻牵手相拥，看着两个孩子在彩虹下跳舞。十杯排列成彩虹拱形，远处有房屋和小溪，绿色田野。',
    uprightMeaning: '正位代表情感上的圆满和家庭的和谐。是心灵归属的极致画面。爱与连结充盈生活，共同体的温暖滋养着每个人。',
    reversedMeaning: '逆位暗示家庭或关系中的不和谐。美好的画面下隐藏着裂痕，或理想与现实有落差。需要面对并修复关系中的问题。'
  },
  {
    id: 46,
    nameEn: 'Page of Cups',
    nameZh: '圣杯侍从',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: 'page',
    keywords: {
      upright: ['直觉', '灵感', '消息', '温柔', '艺术天赋'],
      reversed: ['不成熟', '情绪化', '缺乏灵感', '退缩', '过度敏感']
    },
    description: '年轻人身着蓝色花衣，头戴红色羽毛帽子，手持一杯。杯中有一条小鱼探头。他站在海边，表情温柔惊讶。',
    uprightMeaning: '正位代表直觉的闪现和温柔的情感消息。可能是创意灵感或来自潜意识的信号。保持开放和纯真的心态，聆听内在声音。',
    reversedMeaning: '逆位暗示情绪不成熟或灵感枯竭。可能过度敏感而退缩，或因不安全感而封闭。需要培养情感的稳定性和勇气。'
  },
  {
    id: 47,
    nameEn: 'Knight of Cups',
    nameZh: '圣杯骑士',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: 'knight',
    keywords: {
      upright: ['浪漫', '理想主义', '追求梦想', '魅力', '艺术'],
      reversed: ['不切实际', '情绪化', '虚伪', '失望', '懒散']
    },
    description: '骑士骑白马缓缓前行，手持举起的杯子。铠甲上有鱼图案，头盔和靴子有翅膀装饰，他神态优雅沉思。',
    uprightMeaning: '正位代表浪漫的追求和理想主义的行动。带着情感和创意去追逐梦想。可能有浪漫的邀请或艺术灵感降临。',
    reversedMeaning: '逆位暗示理想脱离现实或情感操控。可能许下不切实际的承诺，或因情绪波动而懒散。需要脚踏实地，言行一致。'
  },
  {
    id: 48,
    nameEn: 'Queen of Cups',
    nameZh: '圣杯王后',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: 'queen',
    keywords: {
      upright: ['共情', '温柔', '直觉', '倾听', '心灵滋养'],
      reversed: ['情绪失衡', '过度敏感', '情绪依赖', '自我牺牲', '压抑']
    },
    description: '王后端坐海边宝座，手持精美的杯盖。她凝视杯中，脚边水中有浪花。宝座上有海洋生物雕刻。',
    uprightMeaning: '正位代表深度的共情能力和温柔的滋养。直觉敏锐，善于倾听和理解他人的情感。是心灵疗愈者和支持者。',
    reversedMeaning: '逆位暗示情绪失衡或过度为他人牺牲自我。可能吸收了太多他人情绪而难以自理。需要建立情感边界，先照顾自己。'
  },
  {
    id: 49,
    nameEn: 'King of Cups',
    nameZh: '圣杯国王',
    type: 'minor',
    element: 'water',
    suit: 'cups',
    rank: 'king',
    keywords: {
      upright: ['情感成熟', '平衡', '智慧', '外交', 'calm'],
      reversed: ['情绪操控', '阴郁', '冷漠', '失衡', '情绪风暴']
    },
    description: '国王端坐海中漂浮的宝座，一手持杯一手持权杖。他身穿红色长袍和蓝色披风，脚下有鱼跳跃，波浪平稳。',
    uprightMeaning: '正位代表情感的成熟和内在平衡。即使风浪之中也能保持冷静和智慧。善于以温和的方式处理复杂的人际和情感事务。',
    reversedMeaning: '逆位暗示情绪暗流涌动或表面平静下隐藏问题。可能用沉默操控，或被压抑的情绪吞噬。需要面对并处理内心深处的不安。'
  },

  // ==================== 小阿尔卡纳 - 宝剑组 (50-63) ====================
  {
    id: 50,
    nameEn: 'Ace of Swords',
    nameZh: '宝剑Ace',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: 'ace',
    keywords: {
      upright: ['清晰', '突破', '真相', '决心', '新思路'],
      reversed: ['混乱', '错误判断', '不公', '缺乏计划', '扭曲真相']
    },
    description: '一只手从云中伸出，紧握一把直立的宝剑。剑尖有王冠，两旁有橄榄枝和棕榈枝。天空清晰明亮。',
    uprightMeaning: '正位代表思维的突破和真相的显现。一把利剑斩断迷雾，清晰的洞察力降临。适合做出果断的决定和新的心智方向。',
    reversedMeaning: '逆位暗示思维混乱或判断失误。可能被误导或面对不公。需要重新审视信息来源，避免草率决定。'
  },
  {
    id: 51,
    nameEn: 'Two of Swords',
    nameZh: '宝剑二',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '2',
    keywords: {
      upright: ['僵局', '两难', '回避决定', '平衡', '蒙蔽'],
      reversed: ['做出选择', '信息曝光', '释放', '看清', '打破僵局']
    },
    description: '一位蒙眼女子坐在海边，双手交叉各持一剑。身后有礁石和水面，月亮高悬于天空。',
    uprightMeaning: '正位代表面临两难抉择却回避做出决定。蒙蔽双眼以维持暂时的平衡。真相待被面对，拖延不能解决问题。',
    reversedMeaning: '逆位暗示你开始摘下眼罩，做出选择。信息或真相被揭露，僵局打破。虽然决定可能艰难，但行动是必要的。'
  },
  {
    id: 52,
    nameEn: 'Three of Swords',
    nameZh: '宝剑三',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '3',
    keywords: {
      upright: ['心碎', '悲伤', '痛苦', '分离', '受伤'],
      reversed: ['疗愈', '释放痛苦', '原谅', '恢复', '走出悲伤']
    },
    description: '三把剑穿过一颗红心，背景是灰暗的雨云和暴雨。画面直接而刺痛，没有其他元素分散注意力。',
    uprightMeaning: '正位代表情感的痛苦和心碎。可能经历分离、背叛或失望。允许自己感受这份伤痛，它是真实的，但会过去。',
    reversedMeaning: '逆位暗示伤痛开始愈合，你正从悲伤中恢复。愿意原谅和释放过去的痛苦。心灵的修复正在进行中。'
  },
  {
    id: 53,
    nameEn: 'Four of Swords',
    nameZh: '宝剑四',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '4',
    keywords: {
      upright: ['休息', '恢复', '冥想', '暂停', '静养'],
      reversed: ['倦怠', '被迫休息', '不安', '过早恢复', '停滞']
    },
    description: '一位骑士仰卧在石棺上，双手合十祈祷。三剑悬挂在墙上，一剑横放在骑士身旁。下方有彩色玻璃窗。',
    uprightMeaning: '正位代表必要的休息和恢复。身心需要暂停来疗愈和整合。这不是放弃而是为下一步积蓄能量。适合冥想和内省。',
    reversedMeaning: '逆位暗示需要休息却无法停下，或因倦怠被迫停摆。可能过早恢复行动导致反复。需要真正给身心恢复的时间。'
  },
  {
    id: 54,
    nameEn: 'Five of Swords',
    nameZh: '宝剑五',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '5',
    keywords: {
      upright: ['冲突', '胜之不武', '损失', '不和', '得不偿失'],
      reversed: ['和解', '释怀', ' regret', '放下争执', '修复关系']
    },
    description: '一个 swordsman得意地捡起三剑，远处两人背对离去。天空中乌云密布，水面波涛。',
    uprightMeaning: '正位代表以损害他人为代价的胜利。可能赢了争端却失去关系和尊重。或是冲突后的空虚。值得反思争胜的意义。',
    reversedMeaning: '逆位暗示开始释放对抗心态，寻求和解。或对过去的争执感到后悔。愿意放下胜负，修复破裂的关系。'
  },
  {
    id: 55,
    nameEn: 'Six of Swords',
    nameZh: '宝剑六',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '6',
    keywords: {
      upright: ['过渡', '远离困境', '前行', '恢复', '旅程'],
      reversed: ['抗拒变化', '停滞', '未解决的问题', '返回', '阻碍']
    },
    description: '一个船夫撑篙渡河，船上一位母亲和孩子坐在一起。六把剑竖插在船头。水面这边波涛，那边平静。',
    uprightMeaning: '正位代表从困境中走向平静的过渡。带着过去的经验和伤痛离开不安之地，前往更安稳的彼岸。旅程虽缓慢但方向正确。',
    reversedMeaning: '逆位暗示抗拒过渡或未解决的问题阻碍前行。可能试图逃避而非真正面对，或停滞不前。需要先处理内在问题再出发。'
  },
  {
    id: 56,
    nameEn: 'Seven of Swords',
    nameZh: '宝剑七',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '7',
    keywords: {
      upright: ['欺骗', '隐秘', '策略', '不诚实', '偷窃'],
      reversed: ['曝光', '坦白', '悔悟', '归还', '真相']
    },
    description: '一个人悄悄从军营中偷走五剑，回头看是否被发现。手中两剑被遗弃。远处帐篷中似有庆典。',
    uprightMeaning: '正位代表不诚实或秘密行动。可能有人在暗中行事，或你需要策略性地行事。警惕欺骗，也包括自我欺骗。',
    reversedMeaning: '逆位暗示秘密被揭露或你决定坦白。可能感到悔悟并寻求弥补。隐藏的事物浮出水面，是面对真相的时刻。'
  },
  {
    id: 57,
    nameEn: 'Eight of Swords',
    nameZh: '宝剑八',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '8',
    keywords: {
      upright: ['自我束缚', '被困感', '恐惧', '无助', '受限思维'],
      reversed: ['释放', '觉醒', '挣脱', '视角转换', '行动']
    },
    description: '一个女子被蒙眼绑缚，周围八剑如牢笼般插在地上。她站在浅水中，远处有城堡，天空多云。',
    uprightMeaning: '正位代表被恐惧和限制性信念困住。束缚看似来自外界，实则多半是自我设限。睁开眼睛你会发现出口一直都在。',
    reversedMeaning: '逆位暗示开始从束缚中觉醒，挣脱思维牢笼。视角转变后发现自己其实拥有更多自由。行动的勇气正在回来。'
  },
  {
    id: 58,
    nameEn: 'Nine of Swords',
    nameZh: '宝剑九',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '9',
    keywords: {
      upright: ['焦虑', '噩梦', '恐惧', '失眠', '过度忧虑'],
      reversed: ['释放恐惧', ' hope', '走出焦虑', '面对', '改善']
    },
    description: '一个人坐在床上惊醒，双手捂脸。上方墙上悬挂九剑。被子上有花卉和星座图案。',
    uprightMeaning: '正位代表被焦虑和恐惧困扰。噩梦和失眠反映内心的忧虑。但这些恐惧多半比现实更可怕。需要面对而非逃避。',
    reversedMeaning: '逆位暗示焦虑开始缓解，希望的曙光出现。愿意面对恐惧后发现它并非不可战胜。情况正在好转。'
  },
  {
    id: 59,
    nameEn: 'Ten of Swords',
    nameZh: '宝剑十',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: '10',
    keywords: {
      upright: ['终结', '痛苦底点', '背叛', '深谷', '黎明将至'],
      reversed: ['恢复', '最坏已过', ' surviving', '释怀', '重生']
    },
    description: '一个人俯卧在地上，背插十剑。远方地平线上太阳升起，水面平静。一切已到尽头。',
    uprightMeaning: '正位代表痛苦的终结和最低谷。一段艰难的循环画上句点。虽然痛苦，但最黑暗的时刻已过，黎明就在前方。',
    reversedMeaning: '逆位暗示最坏的已过去，开始从废墟中恢复。你 survived了最艰难的考验。释放和重生正在发生。'
  },
  {
    id: 60,
    nameEn: 'Page of Swords',
    nameZh: '宝剑侍从',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: 'page',
    keywords: {
      upright: ['好奇', '警觉', '新想法', '求知', '消息'],
      reversed: ['口无遮拦', '八卦', '过于好奇', '缺乏行动', '不成熟想法']
    },
    description: '年轻人站在悬崖上，双手举剑。风吹动他的头发和衣袍。他神态警觉好奇，天空中白云飘过。',
    uprightMeaning: '正位代表好奇求知和敏锐的观察力。新的想法和消息到来。适合学习和探索，保持警觉和开放的心智。',
    reversedMeaning: '逆位暗示口无遮拦或沉迷于八卦。想法多但缺乏行动力，或过于好奇而越界。需要培养言行的分寸和执行力。'
  },
  {
    id: 61,
    nameEn: 'Knight of Swords',
    nameZh: '宝剑骑士',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: 'knight',
    keywords: {
      upright: ['果断', '迅猛', '直接', ' intellect', '冲锋'],
      reversed: ['鲁莽', '冲动', '攻击性', '不考虑后果', '浮躁']
    },
    description: '骑士骑在飞奔的马上，举剑向前冲。马匹奔腾剧烈，树叶被狂风卷起。骑士神情专注急切。',
    uprightMeaning: '正位代表果断而迅猛的行动。以清晰的目标和坚定的意志冲向目的地。适合快速决策和直接沟通。',
    reversedMeaning: '逆位暗示鲁莽冲动或攻击性过强。可能因急躁而忽略后果，或言辞过于尖锐。需要控制速度和情绪，三思而后行。'
  },
  {
    id: 62,
    nameEn: 'Queen of Swords',
    nameZh: '宝剑王后',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: 'queen',
    keywords: {
      upright: ['独立', '理性', '公正', 'direct', '洞察'],
      reversed: ['冷漠', '刻薄', '过度批判', ' harsh', '孤独']
    },
    description: '王后面容严肃地端坐宝座，右手举剑。她头戴王冠，左手伸出。天空晴朗，一只鸟飞翔。她眼神锐利清晰。',
    uprightMeaning: '正位代表独立思考和清晰的判断力。以理性和公正看待事物，不感情用事。善于直接沟通，说出真相。',
    reversedMeaning: '逆位暗示过于冷漠或刻薄。可能因过度理性而失去温度，或批判过于严厉。需要在直接与温柔之间找到平衡。'
  },
  {
    id: 63,
    nameEn: 'King of Swords',
    nameZh: '宝剑国王',
    type: 'minor',
    element: 'air',
    suit: 'swords',
    rank: 'king',
    keywords: {
      upright: ['权威', '理性', '公正', ' truth', '决断'],
      reversed: ['独裁', '冷酷', '操控', '滥用权威', '不公']
    },
    description: '国王端坐宝座，右手举剑。他面容成熟威严，头戴王冠，左手持象征权力之物。宝座上有蝴蝶和月牙装饰，天空中有云。',
    uprightMeaning: '正位代表以理性和公正行事。运用知识和权威做出清晰、公平的决定。追求真相，以逻辑和专业性引领。',
    reversedMeaning: '逆位暗示滥用权威或冷酷无情。可能以理性为名行操控之实，或判断失去公正。需要审视权力的使用和对他人的影响。'
  },

  // ==================== 小阿尔卡纳 - 星币组 (64-77) ====================
  {
    id: 64,
    nameEn: 'Ace of Pentacles',
    nameZh: '星币Ace',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: 'ace',
    keywords: {
      upright: ['新机遇', '丰盛', '物质基础', '投资', '稳定开端'],
      reversed: ['错失良机', '匮乏', '不稳定', '缺乏计划', '浪费']
    },
    description: '一只手从云中伸出，掌中托着一枚金色星币。下方有盛开的花花园，有拱门和小径通向远方。阳光明媚。',
    uprightMeaning: '正位代表新的物质机遇和稳定的开端。可能是新工作、投资或财富的种子。脚踏实地开始建设，成果将逐渐显现。',
    reversedMeaning: '逆位暗示错失机遇或物质不稳定。可能因缺乏规划而浪费资源，或新计划根基不稳。需要重新审视财务和实际事务。'
  },
  {
    id: 65,
    nameEn: 'Two of Pentacles',
    nameZh: '星币二',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '2',
    keywords: {
      upright: ['平衡', '调整', '灵活', '多任务', ' juggling'],
      reversed: ['失衡', ' overwhelmed', '混乱', '优先级混乱', '过载']
    },
    description: '一个年轻人双手各持一币，如杂耍般抛接。两币间有无限符号。身后海面波涛起伏，船只在浪中起伏。',
    uprightMeaning: '正位代表在多个责任间灵活平衡。虽然忙碌但你能应对。需要调整优先级和灵活变通来维持各方面的运转。',
    reversedMeaning: '逆位暗示过载或失衡。试图同时做太多事导致混乱和倦怠。需要放下一些责任，重新排定优先级。'
  },
  {
    id: 66,
    nameEn: 'Three of Pentacles',
    nameZh: '星币三',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '3',
    keywords: {
      upright: ['协作', '技艺', '专业', '建设', '团队'],
      reversed: ['不协调', '缺乏配合', '质量低', ' lazy', '冲突']
    },
    description: '一位工匠站在脚手架上工作，与一位建筑师和一位修士讨论。下方有 architectural图纸和两枚星币。教堂拱门上雕刻着星币。',
    uprightMeaning: '正位代表通过协作和专业技能共同建设。各方贡献所长，团队合作带来品质。适合发展技能和参与共同项目。',
    reversedMeaning: '逆位暗示团队不协调或质量不够。可能因沟通不足或懒散而影响成果。需要重新审视合作关系和标准。'
  },
  {
    id: 67,
    nameEn: 'Four of Pentacles',
    nameZh: '星币四',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '4',
    keywords: {
      upright: ['守财', '安全', '控制', '物质执着', '稳定'],
      reversed: ['松动', '慷慨', '放下执念', '浪费', '不安全']
    },
    description: '一个人紧抱一枚星币，头上顶着一枚，脚下踩着两枚。他坐在矮凳上，背后是城市，神态紧张防备。',
    uprightMeaning: '正位代表对物质安全的紧抓和控制。虽然稳定但也可能过于执着。需要审视你是掌控财富还是被财富掌控。',
    reversedMeaning: '逆位暗示开始松开紧握的手。可能学会慷慨分享，或因不安全感而过度花费。需要找到收支间的健康平衡。'
  },
  {
    id: 68,
    nameEn: 'Five of Pentacles',
    nameZh: '星币五',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '5',
    keywords: {
      upright: ['匮乏', '困境', '被排斥', '贫困', '求助'],
      reversed: ['恢复', '援助到来', '改善', '归属', 'transient']
    },
    description: '两个衣衫褴褛的人在暴风雪中走过教堂彩窗。一人拄拐，另一人裹头巾。窗内透出温暖的光，五枚星币在窗上。',
    uprightMeaning: '正位代表物质或精神上的匮乏与困境。感觉被排斥在温暖之外。但援助可能近在咫尺——不要因羞耻而拒绝寻求帮助。',
    reversedMeaning: '逆位暗示困境开始缓解，援助正在到来。或你愿意接受支持。从精神和物质的低谷中恢复，重新找到归属。'
  },
  {
    id: 69,
    nameEn: 'Six of Pentacles',
    nameZh: '星币六',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '6',
    keywords: {
      upright: ['慷慨', '给予与接受', '平衡', '分享', '慈善'],
      reversed: ['不平等', '条件性的给予', '失衡', '债务', '操控']
    },
    description: '一位富商手持天平，一手施舍给两个跪着的乞丐。天平平衡，六枚星币。他身穿红袍，面容慈善。',
    uprightMeaning: '正位代表慷慨的给予和公平的分配。你可能有资源与他人分享，或正在接受他人的慷慨。保持给予与接受的平衡。',
    reversedMeaning: '逆位暗示给予与接受失衡。可能条件性地给予以操控他人，或一方付出过多。需要重新审视关系的公平性。'
  },
  {
    id: 70,
    nameEn: 'Seven of Pentacles',
    nameZh: '星币七',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '7',
    keywords: {
      upright: ['耐心', '评估', '等待收获', 'perseverance', '中期审视'],
      reversed: [' impatience', '浪费', '缺乏回报', '错误投资', '失望']
    },
    description: '一位农夫拄锄站立，审视藤蔓上结出的星币。他神情疲惫但期待，脚边有六枚已收获的星币。背景是绿野和山脉。',
    uprightMeaning: '正位代表耐心等待付出产生回报。适合停下来评估进展，审视方向是否正确。收获正在成熟，坚持值得。',
    reversedMeaning: '逆位暗示因缺乏回报而失望，或投入了错误的方向。可能浪费时间或资源在不值得的事上。需要重新评估策略。'
  },
  {
    id: 71,
    nameEn: 'Eight of Pentacles',
    nameZh: '星币八',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '8',
    keywords: {
      upright: ['精进', '专注', '技艺', '细节', 'dedication'],
      reversed: [' perfectionism', '缺乏热情', '粗心', '无进展', 'overwork']
    },
    description: '一位工匠坐在长凳上专注地在星币上雕刻。已完成六枚整齐排列，正在刻第七枚。远处有城堡，他神情专注。',
    uprightMeaning: '正位代表专注精进和技艺的提升。投入地打磨细节，追求品质。适合深耕一个领域，努力将带来专业成就。',
    reversedMeaning: '逆位暗示过度完美主义或因重复劳动而失去热情。可能过于追求细节而忽略大局，或工作粗糙。需要找到平衡。'
  },
  {
    id: 72,
    nameEn: 'Nine of Pentacles',
    nameZh: '星币九',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '9',
    keywords: {
      upright: ['成就', '独立', '丰盛', '享受', 'self-sufficiency'],
      reversed: ['依赖', '虚假繁荣', ' over-investment', '不满足', '孤芳自赏']
    },
    description: '一位女子身着华丽衣袍站在丰茂的花园中，手上有猎鹰。脚下有九枚星币散布于葡萄藤间。她神情满足自得。',
    uprightMeaning: '正位代表通过自身努力获得的丰盛和独立。享受自己创造的果实，精神与物质双丰收。自给自足的优雅与从容。',
    reversedMeaning: '逆位暗示表面的繁荣下有不满足或依赖。可能为物质牺牲了更深层的满足，或成就感来自他人认可。需要审视真正的丰盛。'
  },
  {
    id: 73,
    nameEn: 'Ten of Pentacles',
    nameZh: '星币十',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: '10',
    keywords: {
      upright: ['传承', '家族', '长久', '富裕', '根基'],
      reversed: ['家庭纠纷', '财产问题', ' loss of legacy', '无根', '短暂的繁荣']
    },
    description: '一位老者身着华丽长袍被犬围绕，旁边一对夫妻和孩子互动。拱门上有十枚星币。远处有家族旗帜和庄园。',
    uprightMeaning: '正位代表持久的财富和家族传承。长期积累的根基带来安定。适合考虑长远规划和与家庭、社区相关的事务。',
    reversedMeaning: '逆位暗示家庭纠纷或财产问题。可能根基不稳或传承面临威胁。需要关注家庭关系和长期投资的稳固性。'
  },
  {
    id: 74,
    nameEn: 'Page of Pentacles',
    nameZh: '星币侍从',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: 'page',
    keywords: {
      upright: ['学习', '新机遇', '踏实', ' student', '种子'],
      reversed: ['缺乏进展', '不专心', '懒惰', '物质 distraction', '推迟']
    },
    description: '年轻人身着绿色衣袍站立，双手虔诚地捧起一枚星币凝视。身后有绿色田野和树木，天空明朗。他神情专注认真。',
    uprightMeaning: '正位代表踏实的学习和新机遇的种子。怀着认真的态度开始新的学习或事业。适合打基础、设定实际目标。',
    reversedMeaning: '逆位暗示缺乏进展或不够专注。可能因懒散或分心而错过学习机会。需要重拾决心，脚踏实地行动。'
  },
  {
    id: 75,
    nameEn: 'Knight of Pentacles',
    nameZh: '星币骑士',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: 'knight',
    keywords: {
      upright: ['勤奋', '可靠', '稳健', ' patience', 'perseverance'],
      reversed: ['停滞', '固执', ' boring', '缺乏灵活性', '拖延']
    },
    description: '骑士骑在站立的马上，手持一枚星币。他穿着厚重铠甲，田间有庄稼。马匹静立，骑士神情沉稳专注。',
    uprightMeaning: '正位代表勤奋可靠和稳健的行动。虽然速度不快但值得信赖。适合长期投入和需要耐心的工作。坚持将带来回报。',
    reversedMeaning: '逆位暗示因固执或缺乏变化而停滞。可能过于保守而错失机会，或拖延不前。需要注入灵活性和动力。'
  },
  {
    id: 76,
    nameEn: 'Queen of Pentacles',
    nameZh: '星币王后',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: 'queen',
    keywords: {
      upright: ['滋养', '务实', '安全感', ' mothering', '丰盛'],
      reversed: ['self-neglect', '过度操劳', '物质焦虑', ' smothering', '失衡']
    },
    description: '王后端坐在华丽宝座上，膝上有一枚星币和一只兔子。她头戴花环，身后有丰茂的自然景观。她神情温暖慈爱。',
    uprightMeaning: '正位代表务实的滋养和创造安全感。善于照顾他人同时管理实际事务。温暖而踏实，是家庭和事业的支柱。',
    reversedMeaning: '逆位暗示因过度照顾他人而忽视自己，或物质焦虑影响了生活。需要找回自我关怀和生活的平衡。'
  },
  {
    id: 77,
    nameEn: 'King of Pentacles',
    nameZh: '星币国王',
    type: 'minor',
    element: 'earth',
    suit: 'pentacles',
    rank: 'king',
    keywords: {
      upright: ['丰盛', '成就', '稳定', ' authority', 'business'],
      reversed: ['greedy', ' controlling', 'materialistic', 'rigid', 'stagnant']
    },
    description: '国王端坐宝座，身着缀满葡萄和藤蔓图案的长袍，脚踏牛雕。他手持星币和权杖，神情富足威严。身后有城堡和田野。',
    uprightMeaning: '正位代表丰盛的成就和稳定的权威。通过勤奋和智慧建立了坚实的根基。善于商业和管理，值得信赖的领袖。',
    reversedMeaning: '逆位暗示因贪婪或控制欲而失衡。可能过度物质主义或顽固不化。需要审视对财富和权力的态度，找回灵活性。'
  }
];

// Total: 78 cards
