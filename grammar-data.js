var GRAMMAR_DATA = [
  // ==================== Day 1 ====================
  [
    { title: '一般现在时', explanation: '表示经常性、习惯性的动作或状态', example: 'She works in a hospital.', exampleZh: '她在医院工作。' },
  ],
  // ==================== Day 2 ====================
  [
    { title: '一般过去时', explanation: '表示过去某个时间发生的动作或状态', example: 'I visited Beijing last year.', exampleZh: '我去年参观了北京。' },
  ],
  // ==================== Day 3 ====================
  [
    { title: '一般将来时', explanation: '表示将来某个时间会发生的动作或状态', example: 'I will go to Shanghai tomorrow.', exampleZh: '我明天将去上海。' },
  ],
  // ==================== Day 4 ====================
  [
    { title: '现在进行时', explanation: '表示现在正在进行的动作', example: 'They are playing football now.', exampleZh: '他们现在正在踢足球。' },
  ],
  // ==================== Day 5 ====================
  [
    { title: '过去进行时', explanation: '表示过去某一时刻正在进行的动作', example: 'I was reading a book at 8 last night.', exampleZh: '昨晚8点我正在看书。' },
  ],
  // ==================== Day 6 ====================
  [
    { title: '现在完成时', explanation: '表示过去发生的动作对现在造成的影响', example: 'I have finished my homework.', exampleZh: '我已经完成了作业。' },
  ],
  // ==================== Day 7 ====================
  [
    { title: '过去完成时', explanation: '表示在过去某一时间之前已经完成的动作', example: 'He had left before I arrived.', exampleZh: '在我到达之前他已经离开了。' },
  ],
  // ==================== Day 8 ====================
  [
    { title: '名词复数', explanation: '表示两个或两个以上的名词', example: 'There are many books on the desk.', exampleZh: '桌子上有很多书。' },
  ],
  // ==================== Day 9 ====================
  [
    { title: '不可数名词', explanation: '表示不能计数的物质或抽象概念', example: 'Water is important for life.', exampleZh: '水对生命很重要。' },
  ],
  // ==================== Day 10 ====================
  [
    { title: '冠词用法', explanation: 'a/an/the的基本用法', example: 'I saw a cat. The cat was black.', exampleZh: '我看到一只猫。那只猫是黑色的。' },
  ],
  // ==================== Day 11 ====================
  [
    { title: '形容词比较级', explanation: '表示两者之间的比较', example: 'She is taller than her brother.', exampleZh: '她比她哥哥高。' },
  ],
  // ==================== Day 12 ====================
  [
    { title: '形容词最高级', explanation: '表示三者或三者以上的比较', example: 'He is the tallest boy in our class.', exampleZh: '他是我们班最高的男孩。' },
  ],
  // ==================== Day 13 ====================
  [
    { title: '副词用法', explanation: '修饰动词、形容词或其他副词', example: 'She sings beautifully.', exampleZh: '她唱得很美。' },
  ],
  // ==================== Day 14 ====================
  [
    { title: '情态动词can', explanation: '表示能力或可能性', example: 'I can swim very well.', exampleZh: '我游泳游得很好。' },
  ],
  // ==================== Day 15 ====================
  [
    { title: '情态动词must', explanation: '表示必须或肯定推测', example: 'You must finish your work on time.', exampleZh: '你必须按时完成工作。' },
  ],
  // ==================== Day 16 ====================
  [
    { title: '情态动词should', explanation: '表示应该或建议', example: 'You should study harder.', exampleZh: '你应该更努力学习。' },
  ],
  // ==================== Day 17 ====================
  [
    { title: '被动语态', explanation: '主语是动作的承受者', example: 'The book was written by Lu Xun.', exampleZh: '这本书是鲁迅写的。' },
  ],
  // ==================== Day 18 ====================
  [
    { title: '定语从句', explanation: '修饰名词或代词的从句', example: 'The man who is standing there is my father.', exampleZh: '站在那里的那个人是我父亲。' },
  ],
  // ==================== Day 19 ====================
  [
    { title: '宾语从句', explanation: '作宾语的从句', example: 'I know that he is a good student.', exampleZh: '我知道他是一个好学生。' },
  ],
  // ==================== Day 20 ====================
  [
    { title: '状语从句', explanation: '表示时间、原因、条件等', example: 'I will call you when I arrive.', exampleZh: '我到达时会给你打电话。' },
  ],
  // ==================== Day 21 ====================
  [
    { title: '条件句', explanation: '表示假设条件', example: 'If it rains tomorrow, we will stay at home.', exampleZh: '如果明天下雨，我们就待在家里。' },
  ],
  // ==================== Day 22 ====================
  [
    { title: '虚拟语气', explanation: '表示假设、愿望或与事实相反的情况', example: 'If I were you, I would accept the offer.', exampleZh: '如果我是你，我会接受这个提议。' },
  ],
  // ==================== Day 23 ====================
  [
    { title: '倒装句', explanation: '主语和谓语语序颠倒', example: 'Never have I seen such a beautiful place.', exampleZh: '我从未见过如此美丽的地方。' },
  ],
  // ==================== Day 24 ====================
  [
    { title: '强调句', explanation: '强调句子中的某个成分', example: 'It was Tom who broke the window.', exampleZh: '是汤姆打破了窗户。' },
  ],
  // ==================== Day 25 ====================
  [
    { title: '非谓语动词', explanation: '动词的非谓语形式（不定式、动名词、分词）', example: 'I enjoy reading books.', exampleZh: '我喜欢读书。' },
  ],
  // ==================== Day 26 ====================
  [
    { title: '主谓一致', explanation: '主语和谓语在人称和数上保持一致', example: 'The students are playing basketball.', exampleZh: '学生们正在打篮球。' },
  ],
  // ==================== Day 27 ====================
  [
    { title: '代词用法', explanation: '代替名词的词', example: 'She gave me a book. I like it.', exampleZh: '她给了我一本书。我喜欢它。' },
  ],
  // ==================== Day 28 ====================
  [
    { title: '介词用法', explanation: '表示名词、代词与其他词的关系', example: 'The book is on the table.', exampleZh: '书在桌子上。' },
  ],
];