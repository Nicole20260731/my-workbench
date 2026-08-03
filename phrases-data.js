// 高频词组200个（20天学习计划）
const PHRASES_DATA = [
  {
    "day": 1,
    "id": "p1_1",
    "phrase": "break the ice",
    "meaning": "词组含义1",
    "example": "This is an example sentence using break the ice.",
    "translation": "这是使用break the ice的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_2",
    "phrase": "make a living",
    "meaning": "词组含义2",
    "example": "This is an example sentence using make a living.",
    "translation": "这是使用make a living的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_3",
    "phrase": "keep in touch",
    "meaning": "词组含义3",
    "example": "This is an example sentence using keep in touch.",
    "translation": "这是使用keep in touch的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_4",
    "phrase": "look forward to",
    "meaning": "词组含义4",
    "example": "This is an example sentence using look forward to.",
    "translation": "这是使用look forward to的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_5",
    "phrase": "get along with",
    "meaning": "词组含义5",
    "example": "This is an example sentence using get along with.",
    "translation": "这是使用get along with的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_6",
    "phrase": "make up one's mind",
    "meaning": "词组含义6",
    "example": "This is an example sentence using make up one's mind.",
    "translation": "这是使用make up one's mind的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_7",
    "phrase": "take it easy",
    "meaning": "词组含义7",
    "example": "This is an example sentence using take it easy.",
    "translation": "这是使用take it easy的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_8",
    "phrase": "come true",
    "meaning": "词组含义8",
    "example": "This is an example sentence using come true.",
    "translation": "这是使用come true的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_9",
    "phrase": "run out of",
    "meaning": "词组含义9",
    "example": "This is an example sentence using run out of.",
    "translation": "这是使用run out of的例句翻译。"
  },
  {
    "day": 1,
    "id": "p1_10",
    "phrase": "pay attention to",
    "meaning": "词组含义10",
    "example": "This is an example sentence using pay attention to.",
    "translation": "这是使用pay attention to的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_1",
    "phrase": "in addition to",
    "meaning": "词组含义1",
    "example": "This is an example sentence using in addition to.",
    "translation": "这是使用in addition to的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_2",
    "phrase": "as a result",
    "meaning": "词组含义2",
    "example": "This is an example sentence using as a result.",
    "translation": "这是使用as a result的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_3",
    "phrase": "on the other hand",
    "meaning": "词组含义3",
    "example": "This is an example sentence using on the other hand.",
    "translation": "这是使用on the other hand的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_4",
    "phrase": "in my opinion",
    "meaning": "词组含义4",
    "example": "This is an example sentence using in my opinion.",
    "translation": "这是使用in my opinion的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_5",
    "phrase": "to be honest",
    "meaning": "词组含义5",
    "example": "This is an example sentence using to be honest.",
    "translation": "这是使用to be honest的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_6",
    "phrase": "as far as I know",
    "meaning": "词组含义6",
    "example": "This is an example sentence using as far as I know.",
    "translation": "这是使用as far as I know的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_7",
    "phrase": "in other words",
    "meaning": "词组含义7",
    "example": "This is an example sentence using in other words.",
    "translation": "这是使用in other words的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_8",
    "phrase": "on the contrary",
    "meaning": "词组含义8",
    "example": "This is an example sentence using on the contrary.",
    "translation": "这是使用on the contrary的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_9",
    "phrase": "for example",
    "meaning": "词组含义9",
    "example": "This is an example sentence using for example.",
    "translation": "这是使用for example的例句翻译。"
  },
  {
    "day": 2,
    "id": "p2_10",
    "phrase": "in conclusion",
    "meaning": "词组含义10",
    "example": "This is an example sentence using in conclusion.",
    "translation": "这是使用in conclusion的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_1",
    "phrase": "make a decision",
    "meaning": "词组含义1",
    "example": "This is an example sentence using make a decision.",
    "translation": "这是使用make a decision的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_2",
    "phrase": "take advantage of",
    "meaning": "词组含义2",
    "example": "This is an example sentence using take advantage of.",
    "translation": "这是使用take advantage of的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_3",
    "phrase": "come up with",
    "meaning": "词组含义3",
    "example": "This is an example sentence using come up with.",
    "translation": "这是使用come up with的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_4",
    "phrase": "get rid of",
    "meaning": "词组含义4",
    "example": "This is an example sentence using get rid of.",
    "translation": "这是使用get rid of的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_5",
    "phrase": "put off",
    "meaning": "词组含义5",
    "example": "This is an example sentence using put off.",
    "translation": "这是使用put off的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_6",
    "phrase": "turn out",
    "meaning": "词组含义6",
    "example": "This is an example sentence using turn out.",
    "translation": "这是使用turn out的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_7",
    "phrase": "give up",
    "meaning": "词组含义7",
    "example": "This is an example sentence using give up.",
    "translation": "这是使用give up的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_8",
    "phrase": "look up to",
    "meaning": "词组含义8",
    "example": "This is an example sentence using look up to.",
    "translation": "这是使用look up to的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_9",
    "phrase": "make use of",
    "meaning": "词组含义9",
    "example": "This is an example sentence using make use of.",
    "translation": "这是使用make use of的例句翻译。"
  },
  {
    "day": 3,
    "id": "p3_10",
    "phrase": "take care of",
    "meaning": "词组含义10",
    "example": "This is an example sentence using take care of.",
    "translation": "这是使用take care of的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_1",
    "phrase": "be supposed to",
    "meaning": "词组含义1",
    "example": "This is an example sentence using be supposed to.",
    "translation": "这是使用be supposed to的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_2",
    "phrase": "used to",
    "meaning": "词组含义2",
    "example": "This is an example sentence using used to.",
    "translation": "这是使用used to的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_3",
    "phrase": "would rather",
    "meaning": "词组含义3",
    "example": "This is an example sentence using would rather.",
    "translation": "这是使用would rather的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_4",
    "phrase": "had better",
    "meaning": "词组含义4",
    "example": "This is an example sentence using had better.",
    "translation": "这是使用had better的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_5",
    "phrase": "be about to",
    "meaning": "词组含义5",
    "example": "This is an example sentence using be about to.",
    "translation": "这是使用be about to的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_6",
    "phrase": "be going to",
    "meaning": "词组含义6",
    "example": "This is an example sentence using be going to.",
    "translation": "这是使用be going to的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_7",
    "phrase": "be likely to",
    "meaning": "词组含义7",
    "example": "This is an example sentence using be likely to.",
    "translation": "这是使用be likely to的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_8",
    "phrase": "be able to",
    "meaning": "词组含义8",
    "example": "This is an example sentence using be able to.",
    "translation": "这是使用be able to的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_9",
    "phrase": "be willing to",
    "meaning": "词组含义9",
    "example": "This is an example sentence using be willing to.",
    "translation": "这是使用be willing to的例句翻译。"
  },
  {
    "day": 4,
    "id": "p4_10",
    "phrase": "be afraid to",
    "meaning": "词组含义10",
    "example": "This is an example sentence using be afraid to.",
    "translation": "这是使用be afraid to的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_1",
    "phrase": "in spite of",
    "meaning": "词组含义1",
    "example": "This is an example sentence using in spite of.",
    "translation": "这是使用in spite of的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_2",
    "phrase": "due to",
    "meaning": "词组含义2",
    "example": "This is an example sentence using due to.",
    "translation": "这是使用due to的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_3",
    "phrase": "instead of",
    "meaning": "词组含义3",
    "example": "This is an example sentence using instead of.",
    "translation": "这是使用instead of的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_4",
    "phrase": "apart from",
    "meaning": "词组含义4",
    "example": "This is an example sentence using apart from.",
    "translation": "这是使用apart from的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_5",
    "phrase": "according to",
    "meaning": "词组含义5",
    "example": "This is an example sentence using according to.",
    "translation": "这是使用according to的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_6",
    "phrase": "thanks to",
    "meaning": "词组含义6",
    "example": "This is an example sentence using thanks to.",
    "translation": "这是使用thanks to的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_7",
    "phrase": "except for",
    "meaning": "词组含义7",
    "example": "This is an example sentence using except for.",
    "translation": "这是使用except for的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_8",
    "phrase": "along with",
    "meaning": "词组含义8",
    "example": "This is an example sentence using along with.",
    "translation": "这是使用along with的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_9",
    "phrase": "as for",
    "meaning": "词组含义9",
    "example": "This is an example sentence using as for.",
    "translation": "这是使用as for的例句翻译。"
  },
  {
    "day": 5,
    "id": "p5_10",
    "phrase": "as to",
    "meaning": "词组含义10",
    "example": "This is an example sentence using as to.",
    "translation": "这是使用as to的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_1",
    "phrase": "make progress",
    "meaning": "词组含义1",
    "example": "This is an example sentence using make progress.",
    "translation": "这是使用make progress的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_2",
    "phrase": "do research",
    "meaning": "词组含义2",
    "example": "This is an example sentence using do research.",
    "translation": "这是使用do research的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_3",
    "phrase": "take notes",
    "meaning": "词组含义3",
    "example": "This is an example sentence using take notes.",
    "translation": "这是使用take notes的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_4",
    "phrase": "hand in",
    "meaning": "词组含义4",
    "example": "This is an example sentence using hand in.",
    "translation": "这是使用hand in的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_5",
    "phrase": "go over",
    "meaning": "词组含义5",
    "example": "This is an example sentence using go over.",
    "translation": "这是使用go over的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_6",
    "phrase": "pick up",
    "meaning": "词组含义6",
    "example": "This is an example sentence using pick up.",
    "translation": "这是使用pick up的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_7",
    "phrase": "work out",
    "meaning": "词组含义7",
    "example": "This is an example sentence using work out.",
    "translation": "这是使用work out的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_8",
    "phrase": "figure out",
    "meaning": "词组含义8",
    "example": "This is an example sentence using figure out.",
    "translation": "这是使用figure out的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_9",
    "phrase": "carry out",
    "meaning": "词组含义9",
    "example": "This is an example sentence using carry out.",
    "translation": "这是使用carry out的例句翻译。"
  },
  {
    "day": 6,
    "id": "p6_10",
    "phrase": "find out",
    "meaning": "词组含义10",
    "example": "This is an example sentence using find out.",
    "translation": "这是使用find out的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_1",
    "phrase": "be engaged in",
    "meaning": "词组含义1",
    "example": "This is an example sentence using be engaged in.",
    "translation": "这是使用be engaged in的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_2",
    "phrase": "be responsible for",
    "meaning": "词组含义2",
    "example": "This is an example sentence using be responsible for.",
    "translation": "这是使用be responsible for的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_3",
    "phrase": "be familiar with",
    "meaning": "词组含义3",
    "example": "This is an example sentence using be familiar with.",
    "translation": "这是使用be familiar with的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_4",
    "phrase": "be interested in",
    "meaning": "词组含义4",
    "example": "This is an example sentence using be interested in.",
    "translation": "这是使用be interested in的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_5",
    "phrase": "be satisfied with",
    "meaning": "词组含义5",
    "example": "This is an example sentence using be satisfied with.",
    "translation": "这是使用be satisfied with的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_6",
    "phrase": "be proud of",
    "meaning": "词组含义6",
    "example": "This is an example sentence using be proud of.",
    "translation": "这是使用be proud of的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_7",
    "phrase": "be worried about",
    "meaning": "词组含义7",
    "example": "This is an example sentence using be worried about.",
    "translation": "这是使用be worried about的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_8",
    "phrase": "be concerned about",
    "meaning": "词组含义8",
    "example": "This is an example sentence using be concerned about.",
    "translation": "这是使用be concerned about的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_9",
    "phrase": "be aware of",
    "meaning": "词组含义9",
    "example": "This is an example sentence using be aware of.",
    "translation": "这是使用be aware of的例句翻译。"
  },
  {
    "day": 7,
    "id": "p7_10",
    "phrase": "be fond of",
    "meaning": "词组含义10",
    "example": "This is an example sentence using be fond of.",
    "translation": "这是使用be fond of的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_1",
    "phrase": "in the long run",
    "meaning": "词组含义1",
    "example": "This is an example sentence using in the long run.",
    "translation": "这是使用in the long run的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_2",
    "phrase": "in the short term",
    "meaning": "词组含义2",
    "example": "This is an example sentence using in the short term.",
    "translation": "这是使用in the short term的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_3",
    "phrase": "at the moment",
    "meaning": "词组含义3",
    "example": "This is an example sentence using at the moment.",
    "translation": "这是使用at the moment的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_4",
    "phrase": "in the future",
    "meaning": "词组含义4",
    "example": "This is an example sentence using in the future.",
    "translation": "这是使用in the future的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_5",
    "phrase": "from now on",
    "meaning": "词组含义5",
    "example": "This is an example sentence using from now on.",
    "translation": "这是使用from now on的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_6",
    "phrase": "sooner or later",
    "meaning": "词组含义6",
    "example": "This is an example sentence using sooner or later.",
    "translation": "这是使用sooner or later的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_7",
    "phrase": "all of a sudden",
    "meaning": "词组含义7",
    "example": "This is an example sentence using all of a sudden.",
    "translation": "这是使用all of a sudden的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_8",
    "phrase": "once upon a time",
    "meaning": "词组含义8",
    "example": "This is an example sentence using once upon a time.",
    "translation": "这是使用once upon a time的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_9",
    "phrase": "in the end",
    "meaning": "词组含义9",
    "example": "This is an example sentence using in the end.",
    "translation": "这是使用in the end的例句翻译。"
  },
  {
    "day": 8,
    "id": "p8_10",
    "phrase": "at last",
    "meaning": "词组含义10",
    "example": "This is an example sentence using at last.",
    "translation": "这是使用at last的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_1",
    "phrase": "make a difference",
    "meaning": "词组含义1",
    "example": "This is an example sentence using make a difference.",
    "translation": "这是使用make a difference的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_2",
    "phrase": "make a contribution to",
    "meaning": "词组含义2",
    "example": "This is an example sentence using make a contribution to.",
    "translation": "这是使用make a contribution to的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_3",
    "phrase": "make an effort",
    "meaning": "词组含义3",
    "example": "This is an example sentence using make an effort.",
    "translation": "这是使用make an effort的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_4",
    "phrase": "make a mistake",
    "meaning": "词组含义4",
    "example": "This is an example sentence using make a mistake.",
    "translation": "这是使用make a mistake的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_5",
    "phrase": "make a promise",
    "meaning": "词组含义5",
    "example": "This is an example sentence using make a promise.",
    "translation": "这是使用make a promise的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_6",
    "phrase": "make a plan",
    "meaning": "词组含义6",
    "example": "This is an example sentence using make a plan.",
    "translation": "这是使用make a plan的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_7",
    "phrase": "make a choice",
    "meaning": "词组含义7",
    "example": "This is an example sentence using make a choice.",
    "translation": "这是使用make a choice的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_8",
    "phrase": "make a living",
    "meaning": "词组含义8",
    "example": "This is an example sentence using make a living.",
    "translation": "这是使用make a living的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_9",
    "phrase": "make friends",
    "meaning": "词组含义9",
    "example": "This is an example sentence using make friends.",
    "translation": "这是使用make friends的例句翻译。"
  },
  {
    "day": 9,
    "id": "p9_10",
    "phrase": "make money",
    "meaning": "词组含义10",
    "example": "This is an example sentence using make money.",
    "translation": "这是使用make money的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_1",
    "phrase": "take part in",
    "meaning": "词组含义1",
    "example": "This is an example sentence using take part in.",
    "translation": "这是使用take part in的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_2",
    "phrase": "take place",
    "meaning": "词组含义2",
    "example": "This is an example sentence using take place.",
    "translation": "这是使用take place的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_3",
    "phrase": "take effect",
    "meaning": "词组含义3",
    "example": "This is an example sentence using take effect.",
    "translation": "这是使用take effect的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_4",
    "phrase": "take action",
    "meaning": "词组含义4",
    "example": "This is an example sentence using take action.",
    "translation": "这是使用take action的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_5",
    "phrase": "take responsibility",
    "meaning": "词组含义5",
    "example": "This is an example sentence using take responsibility.",
    "translation": "这是使用take responsibility的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_6",
    "phrase": "take measures",
    "meaning": "词组含义6",
    "example": "This is an example sentence using take measures.",
    "translation": "这是使用take measures的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_7",
    "phrase": "take steps",
    "meaning": "词组含义7",
    "example": "This is an example sentence using take steps.",
    "translation": "这是使用take steps的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_8",
    "phrase": "take risks",
    "meaning": "词组含义8",
    "example": "This is an example sentence using take risks.",
    "translation": "这是使用take risks的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_9",
    "phrase": "take chances",
    "meaning": "词组含义9",
    "example": "This is an example sentence using take chances.",
    "translation": "这是使用take chances的例句翻译。"
  },
  {
    "day": 10,
    "id": "p10_10",
    "phrase": "take time",
    "meaning": "词组含义10",
    "example": "This is an example sentence using take time.",
    "translation": "这是使用take time的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_1",
    "phrase": "fall in love",
    "meaning": "词组含义1",
    "example": "This is an example sentence using fall in love.",
    "translation": "这是使用fall in love的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_2",
    "phrase": "break up",
    "meaning": "词组含义2",
    "example": "This is an example sentence using break up.",
    "translation": "这是使用break up的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_3",
    "phrase": "get married",
    "meaning": "词组含义3",
    "example": "This is an example sentence using get married.",
    "translation": "这是使用get married的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_4",
    "phrase": "settle down",
    "meaning": "词组含义4",
    "example": "This is an example sentence using settle down.",
    "translation": "这是使用settle down的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_5",
    "phrase": "grow up",
    "meaning": "词组含义5",
    "example": "This is an example sentence using grow up.",
    "translation": "这是使用grow up的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_6",
    "phrase": "turn around",
    "meaning": "词组含义6",
    "example": "This is an example sentence using turn around.",
    "translation": "这是使用turn around的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_7",
    "phrase": "calm down",
    "meaning": "词组含义7",
    "example": "This is an example sentence using calm down.",
    "translation": "这是使用calm down的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_8",
    "phrase": "cheer up",
    "meaning": "词组含义8",
    "example": "This is an example sentence using cheer up.",
    "translation": "这是使用cheer up的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_9",
    "phrase": "give in",
    "meaning": "词组含义9",
    "example": "This is an example sentence using give in.",
    "translation": "这是使用give in的例句翻译。"
  },
  {
    "day": 11,
    "id": "p11_10",
    "phrase": "give up",
    "meaning": "词组含义10",
    "example": "This is an example sentence using give up.",
    "translation": "这是使用give up的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_1",
    "phrase": "at heart",
    "meaning": "词组含义1",
    "example": "This is an example sentence using at heart.",
    "translation": "这是使用at heart的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_2",
    "phrase": "in mind",
    "meaning": "词组含义2",
    "example": "This is an example sentence using in mind.",
    "translation": "这是使用in mind的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_3",
    "phrase": "on purpose",
    "meaning": "词组含义3",
    "example": "This is an example sentence using on purpose.",
    "translation": "这是使用on purpose的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_4",
    "phrase": "by accident",
    "meaning": "词组含义4",
    "example": "This is an example sentence using by accident.",
    "translation": "这是使用by accident的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_5",
    "phrase": "in fact",
    "meaning": "词组含义5",
    "example": "This is an example sentence using in fact.",
    "translation": "这是使用in fact的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_6",
    "phrase": "at least",
    "meaning": "词组含义6",
    "example": "This is an example sentence using at least.",
    "translation": "这是使用at least的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_7",
    "phrase": "at most",
    "meaning": "词组含义7",
    "example": "This is an example sentence using at most.",
    "translation": "这是使用at most的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_8",
    "phrase": "in general",
    "meaning": "词组含义8",
    "example": "This is an example sentence using in general.",
    "translation": "这是使用in general的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_9",
    "phrase": "on average",
    "meaning": "词组含义9",
    "example": "This is an example sentence using on average.",
    "translation": "这是使用on average的例句翻译。"
  },
  {
    "day": 12,
    "id": "p12_10",
    "phrase": "by chance",
    "meaning": "词组含义10",
    "example": "This is an example sentence using by chance.",
    "translation": "这是使用by chance的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_1",
    "phrase": "have an impact on",
    "meaning": "词组含义1",
    "example": "This is an example sentence using have an impact on.",
    "translation": "这是使用have an impact on的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_2",
    "phrase": "have an effect on",
    "meaning": "词组含义2",
    "example": "This is an example sentence using have an effect on.",
    "translation": "这是使用have an effect on的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_3",
    "phrase": "have influence on",
    "meaning": "词组含义3",
    "example": "This is an example sentence using have influence on.",
    "translation": "这是使用have influence on的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_4",
    "phrase": "have access to",
    "meaning": "词组含义4",
    "example": "This is an example sentence using have access to.",
    "translation": "这是使用have access to的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_5",
    "phrase": "have control over",
    "meaning": "词组含义5",
    "example": "This is an example sentence using have control over.",
    "translation": "这是使用have control over的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_6",
    "phrase": "have confidence in",
    "meaning": "词组含义6",
    "example": "This is an example sentence using have confidence in.",
    "translation": "这是使用have confidence in的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_7",
    "phrase": "have faith in",
    "meaning": "词组含义7",
    "example": "This is an example sentence using have faith in.",
    "translation": "这是使用have faith in的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_8",
    "phrase": "have trouble with",
    "meaning": "词组含义8",
    "example": "This is an example sentence using have trouble with.",
    "translation": "这是使用have trouble with的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_9",
    "phrase": "have difficulty with",
    "meaning": "词组含义9",
    "example": "This is an example sentence using have difficulty with.",
    "translation": "这是使用have difficulty with的例句翻译。"
  },
  {
    "day": 13,
    "id": "p13_10",
    "phrase": "have a good time",
    "meaning": "词组含义10",
    "example": "This is an example sentence using have a good time.",
    "translation": "这是使用have a good time的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_1",
    "phrase": "look after",
    "meaning": "词组含义1",
    "example": "This is an example sentence using look after.",
    "translation": "这是使用look after的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_2",
    "phrase": "look for",
    "meaning": "词组含义2",
    "example": "This is an example sentence using look for.",
    "translation": "这是使用look for的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_3",
    "phrase": "look into",
    "meaning": "词组含义3",
    "example": "This is an example sentence using look into.",
    "translation": "这是使用look into的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_4",
    "phrase": "look through",
    "meaning": "词组含义4",
    "example": "This is an example sentence using look through.",
    "translation": "这是使用look through的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_5",
    "phrase": "look over",
    "meaning": "词组含义5",
    "example": "This is an example sentence using look over.",
    "translation": "这是使用look over的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_6",
    "phrase": "look up",
    "meaning": "词组含义6",
    "example": "This is an example sentence using look up.",
    "translation": "这是使用look up的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_7",
    "phrase": "look down on",
    "meaning": "词组含义7",
    "example": "This is an example sentence using look down on.",
    "translation": "这是使用look down on的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_8",
    "phrase": "look forward to",
    "meaning": "词组含义8",
    "example": "This is an example sentence using look forward to.",
    "translation": "这是使用look forward to的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_9",
    "phrase": "look back on",
    "meaning": "词组含义9",
    "example": "This is an example sentence using look back on.",
    "translation": "这是使用look back on的例句翻译。"
  },
  {
    "day": 14,
    "id": "p14_10",
    "phrase": "look around",
    "meaning": "词组含义10",
    "example": "This is an example sentence using look around.",
    "translation": "这是使用look around的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_1",
    "phrase": "turn on",
    "meaning": "词组含义1",
    "example": "This is an example sentence using turn on.",
    "translation": "这是使用turn on的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_2",
    "phrase": "turn off",
    "meaning": "词组含义2",
    "example": "This is an example sentence using turn off.",
    "translation": "这是使用turn off的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_3",
    "phrase": "turn up",
    "meaning": "词组含义3",
    "example": "This is an example sentence using turn up.",
    "translation": "这是使用turn up的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_4",
    "phrase": "turn down",
    "meaning": "词组含义4",
    "example": "This is an example sentence using turn down.",
    "translation": "这是使用turn down的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_5",
    "phrase": "turn to",
    "meaning": "词组含义5",
    "example": "This is an example sentence using turn to.",
    "translation": "这是使用turn to的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_6",
    "phrase": "turn into",
    "meaning": "词组含义6",
    "example": "This is an example sentence using turn into.",
    "translation": "这是使用turn into的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_7",
    "phrase": "turn out",
    "meaning": "词组含义7",
    "example": "This is an example sentence using turn out.",
    "translation": "这是使用turn out的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_8",
    "phrase": "turn over",
    "meaning": "词组含义8",
    "example": "This is an example sentence using turn over.",
    "translation": "这是使用turn over的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_9",
    "phrase": "turn away",
    "meaning": "词组含义9",
    "example": "This is an example sentence using turn away.",
    "translation": "这是使用turn away的例句翻译。"
  },
  {
    "day": 15,
    "id": "p15_10",
    "phrase": "turn back",
    "meaning": "词组含义10",
    "example": "This is an example sentence using turn back.",
    "translation": "这是使用turn back的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_1",
    "phrase": "in terms of",
    "meaning": "词组含义1",
    "example": "This is an example sentence using in terms of.",
    "translation": "这是使用in terms of的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_2",
    "phrase": "with regard to",
    "meaning": "词组含义2",
    "example": "This is an example sentence using with regard to.",
    "translation": "这是使用with regard to的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_3",
    "phrase": "in relation to",
    "meaning": "词组含义3",
    "example": "This is an example sentence using in relation to.",
    "translation": "这是使用in relation to的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_4",
    "phrase": "as opposed to",
    "meaning": "词组含义4",
    "example": "This is an example sentence using as opposed to.",
    "translation": "这是使用as opposed to的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_5",
    "phrase": "in contrast to",
    "meaning": "词组含义5",
    "example": "This is an example sentence using in contrast to.",
    "translation": "这是使用in contrast to的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_6",
    "phrase": "compared with",
    "meaning": "词组含义6",
    "example": "This is an example sentence using compared with.",
    "translation": "这是使用compared with的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_7",
    "phrase": "different from",
    "meaning": "词组含义7",
    "example": "This is an example sentence using different from.",
    "translation": "这是使用different from的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_8",
    "phrase": "similar to",
    "meaning": "词组含义8",
    "example": "This is an example sentence using similar to.",
    "translation": "这是使用similar to的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_9",
    "phrase": "the same as",
    "meaning": "词组含义9",
    "example": "This is an example sentence using the same as.",
    "translation": "这是使用the same as的例句翻译。"
  },
  {
    "day": 16,
    "id": "p16_10",
    "phrase": "equivalent to",
    "meaning": "词组含义10",
    "example": "This is an example sentence using equivalent to.",
    "translation": "这是使用equivalent to的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_1",
    "phrase": "point out",
    "meaning": "词组含义1",
    "example": "This is an example sentence using point out.",
    "translation": "这是使用point out的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_2",
    "phrase": "bring up",
    "meaning": "词组含义2",
    "example": "This is an example sentence using bring up.",
    "translation": "这是使用bring up的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_3",
    "phrase": "bring about",
    "meaning": "词组含义3",
    "example": "This is an example sentence using bring about.",
    "translation": "这是使用bring about的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_4",
    "phrase": "bring out",
    "meaning": "词组含义4",
    "example": "This is an example sentence using bring out.",
    "translation": "这是使用bring out的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_5",
    "phrase": "bring in",
    "meaning": "词组含义5",
    "example": "This is an example sentence using bring in.",
    "translation": "这是使用bring in的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_6",
    "phrase": "bring up",
    "meaning": "词组含义6",
    "example": "This is an example sentence using bring up.",
    "translation": "这是使用bring up的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_7",
    "phrase": "carry on",
    "meaning": "词组含义7",
    "example": "This is an example sentence using carry on.",
    "translation": "这是使用carry on的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_8",
    "phrase": "carry out",
    "meaning": "词组含义8",
    "example": "This is an example sentence using carry out.",
    "translation": "这是使用carry out的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_9",
    "phrase": "carry away",
    "meaning": "词组含义9",
    "example": "This is an example sentence using carry away.",
    "translation": "这是使用carry away的例句翻译。"
  },
  {
    "day": 17,
    "id": "p17_10",
    "phrase": "carry forward",
    "meaning": "词组含义10",
    "example": "This is an example sentence using carry forward.",
    "translation": "这是使用carry forward的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_1",
    "phrase": "account for",
    "meaning": "词组含义1",
    "example": "This is an example sentence using account for.",
    "translation": "这是使用account for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_2",
    "phrase": "allow for",
    "meaning": "词组含义2",
    "example": "This is an example sentence using allow for.",
    "translation": "这是使用allow for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_3",
    "phrase": "apply for",
    "meaning": "词组含义3",
    "example": "This is an example sentence using apply for.",
    "translation": "这是使用apply for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_4",
    "phrase": "arrange for",
    "meaning": "词组含义4",
    "example": "This is an example sentence using arrange for.",
    "translation": "这是使用arrange for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_5",
    "phrase": "ask for",
    "meaning": "词组含义5",
    "example": "This is an example sentence using ask for.",
    "translation": "这是使用ask for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_6",
    "phrase": "call for",
    "meaning": "词组含义6",
    "example": "This is an example sentence using call for.",
    "translation": "这是使用call for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_7",
    "phrase": "care for",
    "meaning": "词组含义7",
    "example": "This is an example sentence using care for.",
    "translation": "这是使用care for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_8",
    "phrase": "check for",
    "meaning": "词组含义8",
    "example": "This is an example sentence using check for.",
    "translation": "这是使用check for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_9",
    "phrase": "compensate for",
    "meaning": "词组含义9",
    "example": "This is an example sentence using compensate for.",
    "translation": "这是使用compensate for的例句翻译。"
  },
  {
    "day": 18,
    "id": "p18_10",
    "phrase": "provide for",
    "meaning": "词组含义10",
    "example": "This is an example sentence using provide for.",
    "translation": "这是使用provide for的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_1",
    "phrase": "come across",
    "meaning": "词组含义1",
    "example": "This is an example sentence using come across.",
    "translation": "这是使用come across的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_2",
    "phrase": "come along",
    "meaning": "词组含义2",
    "example": "This is an example sentence using come along.",
    "translation": "这是使用come along的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_3",
    "phrase": "come about",
    "meaning": "词组含义3",
    "example": "This is an example sentence using come about.",
    "translation": "这是使用come about的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_4",
    "phrase": "come down to",
    "meaning": "词组含义4",
    "example": "This is an example sentence using come down to.",
    "translation": "这是使用come down to的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_5",
    "phrase": "come up with",
    "meaning": "词组含义5",
    "example": "This is an example sentence using come up with.",
    "translation": "这是使用come up with的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_6",
    "phrase": "come into effect",
    "meaning": "词组含义6",
    "example": "This is an example sentence using come into effect.",
    "translation": "这是使用come into effect的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_7",
    "phrase": "come into being",
    "meaning": "词组含义7",
    "example": "This is an example sentence using come into being.",
    "translation": "这是使用come into being的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_8",
    "phrase": "come to an end",
    "meaning": "词组含义8",
    "example": "This is an example sentence using come to an end.",
    "translation": "这是使用come to an end的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_9",
    "phrase": "come to terms",
    "meaning": "词组含义9",
    "example": "This is an example sentence using come to terms.",
    "translation": "这是使用come to terms的例句翻译。"
  },
  {
    "day": 19,
    "id": "p19_10",
    "phrase": "come to life",
    "meaning": "词组含义10",
    "example": "This is an example sentence using come to life.",
    "translation": "这是使用come to life的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_1",
    "phrase": "go through",
    "meaning": "词组含义1",
    "example": "This is an example sentence using go through.",
    "translation": "这是使用go through的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_2",
    "phrase": "go over",
    "meaning": "词组含义2",
    "example": "This is an example sentence using go over.",
    "translation": "这是使用go over的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_3",
    "phrase": "go ahead",
    "meaning": "词组含义3",
    "example": "This is an example sentence using go ahead.",
    "translation": "这是使用go ahead的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_4",
    "phrase": "go by",
    "meaning": "词组含义4",
    "example": "This is an example sentence using go by.",
    "translation": "这是使用go by的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_5",
    "phrase": "go down",
    "meaning": "词组含义5",
    "example": "This is an example sentence using go down.",
    "translation": "这是使用go down的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_6",
    "phrase": "go up",
    "meaning": "词组含义6",
    "example": "This is an example sentence using go up.",
    "translation": "这是使用go up的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_7",
    "phrase": "go off",
    "meaning": "词组含义7",
    "example": "This is an example sentence using go off.",
    "translation": "这是使用go off的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_8",
    "phrase": "go on",
    "meaning": "词组含义8",
    "example": "This is an example sentence using go on.",
    "translation": "这是使用go on的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_9",
    "phrase": "go out",
    "meaning": "词组含义9",
    "example": "This is an example sentence using go out.",
    "translation": "这是使用go out的例句翻译。"
  },
  {
    "day": 20,
    "id": "p20_10",
    "phrase": "go with",
    "meaning": "词组含义10",
    "example": "This is an example sentence using go with.",
    "translation": "这是使用go with的例句翻译。"
  }
];