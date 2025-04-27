#import "libs.typ": *
#import "fonts.typ": *
#import "utils.typ": *

#let config(outline-depth: 1, body) = {
  set text(lang: "zh", font: ("JetBrains Mono", "LXGW WenKai Mono GB Screen"), region: "cn", size: font-sizes.三号)
  set math.equation(numbering: "(1)")

  set heading(numbering: "1.1.1")
  show link: underline
  show heading: it => {
    it
    par(text(size: 0.35em, h(0.0em)))
  }

  show heading.where(level: 1): it => {
    set text(font-sizes.一号)
    set align(center)
    it
  }

  show heading.where(level: 2): it => {
    set text(20pt)
    set align(left)
    it
  }
  show heading.where(level: 3): it => {
    set text(font-sizes.小二)
    it
  }
  show heading.where(level: 4): it => {
    set text(font-sizes.三号)
    it
  }


  set figure(supplement: "图")
  set page(
    numbering: "1",
    // margin: (top: 1em, left: 1em, bottom: 1em, right: 1em)
  )

  set par(justify: true, first-line-indent: 2em)

  show outline.entry.where(level: 1): it => {
    v(1em, weak: true)
    strong(it)
  }

  align(center)[
    #outline(indent: auto, depth: outline-depth)
  ]


  pagebreak()

  body
}
#let jcr-cas-color(index) = {
  if (index == 1) {
    red
  } else if (index == 2) {
    yellow
  } else if (index == 3) {
    blue
  } else if (index == 4) {
    green
  }
}
#let year-color(year) = {
  let current = datetime.today().year()
  let gap = current - year

  if (gap < 1) {
    red
  } else if (gap < 2) {
    yellow
  } else if (gap < 3) {
    blue
  } else {
    green
  }
}
#let if-color(factor) = {
  if (factor > 10) {
    red
  } else if (factor > 5) {
    yellow
  } else if (factor > 1) {
    blue
  } else {
    green
  }
}

#let person(name, title, post, email, tel, wechat) = {
  [#name #title #post]
  linebreak()
  [
    email：#email

    电话：#tel

    微信：#wechat
  ]
}
#let note(title, content, footer) = {
  showybox(
    frame: (
      thickness: 0pt,
      radius: 4pt,
      title-color: gray.lighten(95%),
      body-color: gray.lighten(90%),
      footer-color: gray.lighten(85%),
    ),
    title-style: (weight: "regular", align: center, color: black, sep-thickness: 0.05em),
    body-style: (align: left),
    sep: (dash: "dashed"),
    shadow: (offset: (x: 1pt, y: 2pt), color: black.lighten(80%)),
    title: [#title],
    [#content],
    footer-style: (color: red, sep-thickness: 0.05em),
    footer: [#footer],
  )
}

#let lc(id, time, space) = {
  let question = leetcode.at((id - 1))
  link("https://leetcode.cn/problems/" + question.titleSlug)[#id\.#question.titleCn]
  let difficulty = question.difficulty
  set text(.6em)
  if difficulty == "EASY" [ #badge-green(difficulty) ] else if (difficulty == "MEDIUM") [ #badge-yellow(difficulty) ] else if difficulty == "HARD" [ #badge-red(difficulty) ] else [#badge-gray("Unknown")]
  [ ]
  for tag in question.topicTags {
    badge-blue(tag.nameTranslated)
  }
  [ ]
  badge-purple("O(" + time + ")/O(" + space + ")")
}

#let lcink(name, id, difficult: "E", tags: ("DFS", "BFS"), time: "1", space: "1") = [
  #link("https://leetcode.cn/problems/" + id)[#name]
  #{
    if difficult == "E" [ #badge-green("Easy") ] else if difficult == "M" [ #badge-yellow("Medium") ] else if (difficult == "H") [ #badge-red("Hard") ] else [#badge-gray("Unknown")]
  }
  #badge-blue(tags.join(","))
  #badge-purple("O(" + time + ")/O(" + space + ")")
]

#let artical-overview(title: "名称", year: 1949, journal: "Nature", IF-5: 1.1, jcr: 1, cas: 1) = {
  [#title ]
  set text(.6em)
  [#badge-gray([#journal]) ]
  [#badge-green([#year]) ]

  [#badge-yellow([#IF-5]) ]
  [#badge-red([jcr:#jcr,cas:#cas])]
}
