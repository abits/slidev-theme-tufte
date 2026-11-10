# slidev-theme-tufte

A [Slidev](https://sli.dev) theme after Edward Tufte's *The Visual Display of Quantitative Information*: show the data, give as much ink as possible to data, erase decoration, label directly, prefer sentences to bullet lists.

Warm off-white paper, one serif with old-style figures, a margin column for notes and sources, tables with three rules, quiet code, neutral Mermaid diagrams, no transitions and no page chrome.

## Install

```bash
npm install --save-exact github:abits/slidev-theme-tufte#v0.1.0
```

```yaml
---
theme: tufte
---
```

### Fonts

The theme sets [TeX Gyre Pagella](https://www.gust.org.pl/projects/e-foundry/tex-gyre/pagella) (a Palatino clone) and DejaVu Sans Mono and loads no web fonts, so install them on the machine that presents or exports, e.g. `pacman -S tex-gyre-fonts ttf-dejavu`, `apt install tex-gyre fonts-dejavu`, or the TeX Live fonts. Without them it falls back to ETBembo, Palatino, Georgia.

## Layouts

| Layout | Use |
|---|---|
| `default` | Text column; with `::margin::` a margin column for notes, sources and captions, as in Tufte's books |
| `cover` | Title slide: typography only (title, italic subtitle, author line), optional margin |
| `statement` | One complete sentence in large type, instead of a bullet list; `<small>` for a source line |
| `section` | Section divider |
| `fullwidth` | Wide figures, diagrams, tables and small multiples; `::margin::` text becomes the caption below |

Slidev's built-in layouts (`center`, `quote`, `two-cols` …) still work and use the theme's type.

```markdown
## Text with a margin

The main point, in sentences.

::margin::

A source, a caption, an aside.
```

## Components and classes

| | Use |
|---|---|
| `<Sparkline :values="[3, 5, 4, 8]" />` | word-sized line chart inside a sentence; last value red, extremes grey (`width`, `height`, `:extremes="false"`) |
| `<Bars :data="[{ label: 'a', value: 1.2 }]" unit=" s" :max="40" />` | horizontal bars from zero, labelled directly, no axis, grid or legend; the same `max` on several charts gives them one scale (`decimals`) |
| `<div class="multiples">` | grid for small multiples; `style="--cols: 4"` for another column count |
| `<span class="accent">` | the one red accent, for the single thing a slide is about |
| `<mark>` | highlight |

## Try it

```bash
npm install
npm run dev       # example.md in the browser
npm run export    # example.pdf (Playwright; --executable-path to use a system Chromium)
```

## License

MIT
