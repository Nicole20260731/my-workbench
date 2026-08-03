// 语法速查与技巧（28天学习计划）
const GRAMMAR_DATA = [
  {
    "day": 1,
    "id": "g1",
    "title": "一般现在时",
    "explanation": "表示经常性、习惯性的动作或状态",
    "example": "She works in a hospital.",
    "translation": "她在医院工作。"
  },
  {
    "day": 2,
    "id": "g2",
    "title": "一般过去时",
    "explanation": "表示过去某个时间发生的动作或状态",
    "example": "I visited Beijing last year.",
    "translation": "我去年参观了北京。"
  },
  {
    "day": 3,
    "id": "g3",
    "title": "一般将来时",
    "explanation": "表示将来某个时间会发生的动作或状态",
    "example": "I will go to Shanghai tomorrow.",
    "translation": "我明天将去上海。"
  },
  {
    "day": 4,
    "id": "g4",
    "title": "现在进行时",
    "explanation": "表示现在正在进行的动作",
    "example": "They are playing football now.",
    "translation": "他们现在正在踢足球。"
  },
  {
    "day": 5,
    "id": "g5",
    "title": "过去进行时",
    "explanation": "表示过去某一时刻正在进行的动作",
    "example": "I was reading a book at 8 last night.",
    "translation": "昨晚8点我正在看书。"
  },
  {
    "day": 6,
    "id": "g6",
    "title": "现在完成时",
    "explanation": "表示过去发生的动作对现在造成的影响",
    "example": "I have finished my homework.",
    "translation": "我已经完成了作业。"
  },
  {
    "day": 7,
    "id": "g7",
    "title": "过去完成时",
    "explanation": "表示在过去某一时间之前已经完成的动作",
    "example": "He had left before I arrived.",
    "translation": "在我到达之前他已经离开了。"
  },
  {
    "day": 8,
    "id": "g8",
    "title": "名词复数",
    "explanation": "表示两个或两个以上的名词",
    "example": "There are many books on the desk.",
    "translation": "桌子上有很多书。"
  },
  {
    "day": 9,
    "id": "g9",
    "title": "不可数名词",
    "explanation": "表示不能计数的物质或抽象概念",
    "example": "Water is important for life.",
    "translation": "水对生命很重要。"
  },
  {
    "day": 10,
    "id": "g10",
    "title": "冠词用法",
    "explanation": "a/an/the的基本用法",
    "example": "I saw a cat. The cat was black.",
    "translation": "我看到一只猫。那只猫是黑色的。"
  },
  {
    "day": 11,
    "id": "g11",
    "title": "形容词比较级",
    "explanation": "表示两者之间的比较",
    "example": "She is taller than her brother.",
    "translation": "她比她哥哥高。"
  },
  {
    "day": 12,
    "id": "g12",
    "title": "形容词最高级",
    "explanation": "表示三者或三者以上的比较",
    "example": "He is the tallest boy in our class.",
    "translation": "他是我们班最高的男孩。"
  },
  {
    "day": 13,
    "id": "g13",
    "title": "副词用法",
    "explanation": "修饰动词、形容词或其他副词",
    "example": "She sings beautifully.",
    "translation": "她唱得很美。"
  },
  {
    "day": 14,
    "id": "g14",
    "title": "情态动词can",
    "explanation": "表示能力或可能性",
    "example": "I can swim very well.",
    "translation": "我游泳游得很好。"
  },
  {
    "day": 15,
    "id": "g15",
    "title": "情态动词must",
    "explanation": "表示必须或肯定推测",
    "example": "You must finish your work on time.",
    "translation": "你必须按时完成工作。"
  },
  {
    "day": 16,
    "id": "g16",
    "title": "情态动词should",
    "explanation": "表示应该或建议",
    "example": "You should study harder.",
    "translation": "你应该更努力学习。"
  },
  {
    "day": 17,
    "id": "g17",
    "title": "被动语态",
    "explanation": "主语是动作的承受者",
    "example": "The book was written by Lu Xun.",
    "translation": "这本书是鲁迅写的。"
  },
  {
    "day": 18,
    "id": "g18",
    "title": "定语从句",
    "explanation": "修饰名词或代词的从句",
    "example": "The man who is standing there is my father.",
    "translation": "站在那里的那个人是我父亲。"
  },
  {
    "day": 19,
    "id": "g19",
    "title": "宾语从句",
    "explanation": "作宾语的从句",
    "example": "I know that he is a good student.",
    "translation": "我知道他是一个好学生。"
  },
  {
    "day": 20,
    "id": "g20",
    "title": "状语从句",
    "explanation": "表示时间、原因、条件等",
    "example": "I will call you when I arrive.",
    "translation": "我到达时会给你打电话。"
  },
  {
    "day": 21,
    "id": "g21",
    "title": "条件句",
    "explanation": "表示假设条件",
    "example": "If it rains tomorrow, we will stay at home.",
    "translation": "如果明天下雨，我们就待在家里。"
  },
  {
    "day": 22,
    "id": "g22",
    "title": "虚拟语气",
    "explanation": "表示假设、愿望或与事实相反的情况",
    "example": "If I were you, I would accept the offer.",
    "translation": "如果我是你，我会接受这个提议。"
  },
  {
    "day": 23,
    "id": "g23",
    "title": "倒装句",
    "explanation": "主语和谓语语序颠倒",
    "example": "Never have I seen such a beautiful place.",
    "translation": "我从未见过如此美丽的地方。"
  },
  {
    "day": 24,
    "id": "g24",
    "title": "强调句",
    "explanation": "强调句子中的某个成分",
    "example": "It was Tom who broke the window.",
    "translation": "是汤姆打破了窗户。"
  },
  {
    "day": 25,
    "id": "g25",
    "title": "非谓语动词",
    "explanation": "动词的非谓语形式（不定式、动名词、分词）",
    "example": "I enjoy reading books.",
    "translation": "我喜欢读书。"
  },
  {
    "day": 26,
    "id": "g26",
    "title": "主谓一致",
    "explanation": "主语和谓语在人称和数上保持一致",
    "example": "The students are playing basketball.",
    "translation": "学生们正在打篮球。"
  },
  {
    "day": 27,
    "id": "g27",
    "title": "代词用法",
    "explanation": "代替名词的词",
    "example": "She gave me a book. I like it.",
    "translation": "她给了我一本书。我喜欢它。"
  },
  {
    "day": 28,
    "id": "g28",
    "title": "介词用法",
    "explanation": "表示名词、代词与其他词的关系",
    "example": "The book is on the table.",
    "translation": "书在桌子上。"
  }
];