---

order: 1

---
#import "../../../typst/chapter.typ":*
#import "../../../typst/herohot/lib.typ":*
#show: config.with()

= 运动想象

== 范式设计
#timeline(
  text-size: 14pt,
  length-of-timeline: 14,
  interval: 100,
  startyear: 0,
  endyear: 14,
  spanheight-negative-y: 2,
  spanheight-positive-y: 0,
  spanheight: 0.5,
  events: (
    // basic event with only title and year
    event(title: "", year: 0),
    // event with title and the exact date
    event(title: "", year: 2),
    event(title: "", year: 6),
    event(title: "", year: 13),
  ),
  eventspans: (
    eventspan(title: "抓握伸展", color: green, start-point: 0, end-point: 2),
    eventspan(color: blue, title: "运动想象", start-point: 2, end-point: 6),
    eventspan(color: red, title: "休息", start-point: 6, end-point: 13),
  ),
)

+ 抓握伸展：声音和图片同步提示，持续2s；
+ 运动想象：展示十字，直到消失，持续4s；
+ 休息：休息字样，持续7s（可调节），运动想象成功进行视觉反馈；

- 实验前，睁眼和闭眼各1分钟；
- 5 sessions，40 trials/session，left：right（20:20），一共$5 times 40 = #(5*40)$trials；

