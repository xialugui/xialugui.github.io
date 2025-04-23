#let fonts = (
  黑体: "SimHei",
  宋体: "SimSun",
  仿宋: "FangSong",
  隶书: "LiSu",
  TNR: "Times New Roman",
)
#let font-sizes = (
  小初: 32pt,
  一号: 24pt,
  二号: 22pt,
  小二: 18pt,
  三号: 16pt,
  小三: 15pt,
  四号: 14pt,
  小四: 12pt,
  五号: 10.5pt,
)

// 获取当前页面的标题
#let current-heading(level: 1, loc) = {
  // 当前页面的标题
  let cur-headings = query(selector(heading.where(level: level)).after(loc)).filter(it => (
    it.location().page() == loc.page()
  ))
  if cur-headings.len() != 0 {
    return cur-headings.first()
  } else {
    return none
  }
}
// 展示一个标题
#let heading-display(it) = {
  if it != none {
    if it.has("numbering") and it.numbering != none {
      numbering(it.numbering, ..counter(heading).at(it.location()))
      [ ]
    }
    it.body
  } else {
    ""
  }
}
