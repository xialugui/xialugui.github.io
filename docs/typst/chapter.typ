#import "libs.typ": *
#import "fonts.typ": *
#import "utils.typ": *

#let config(body) = {
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
  set page(numbering: "1")

  set par(justify: true, first-line-indent: 2em)

  show outline.entry.where(level: 1): it => {
    v(1em, weak: true)
    strong(it)
  }

  body
}
