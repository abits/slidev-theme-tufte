---
theme: ./
title: slidev-theme-tufte
layout: cover
---

# slidev-theme-tufte

A Slidev theme after Edward Tufte

Show the data, give the ink to data, erase decoration

::margin::

Margin notes, sources and captions go after `::margin::`, as in Tufte's books.

---
layout: statement
---

One complete sentence in large type makes a point better than five bullets.

<small>The `statement` layout; `<small>` for a source line.</small>

---

## Text with a margin

Response times fell from 43.7 s to 11.2 s <Sparkline :values="[43.7, 40.1, 35.2, 28.9, 19.4, 14.0, 11.2]" /> over seven releases. <mark>Highlights</mark> and <span class="accent">one red accent</span> mark the single thing a slide is about.

::margin::

`<Sparkline>`: a word-sized line chart; the last value red, the extremes grey.

---

## Bars, labelled directly

<Bars :data="[{ label: 'parse', value: 4.2 }, { label: 'render', value: 31.5 }, { label: 'export', value: 8.0 }]" unit=" s" />

::margin::

`<Bars>` start at zero and carry their own labels: no axis, grid or legend.

---
layout: fullwidth
---

## Tables: three rules

| Release | Median (s) | p95 (s) | Slides |
|---|---:|---:|---:|
| 0.1 | 43.7 | 61.2 | 12 |
| 0.2 | 28.9 | 40.5 | 12 |
| 0.3 | 11.2 | 15.8 | 14 |

::margin::

`fullwidth` spans text and margin; the margin becomes the caption.

---

## Small multiples

<div class="multiples" style="--cols: 4">
  <div><Sparkline :values="[3, 4, 6, 5, 8]" :width="140" :height="40" /><br><small>north</small></div>
  <div><Sparkline :values="[6, 5, 5, 4, 3]" :width="140" :height="40" /><br><small>east</small></div>
  <div><Sparkline :values="[2, 3, 2, 4, 4]" :width="140" :height="40" /><br><small>south</small></div>
  <div><Sparkline :values="[5, 7, 6, 8, 9]" :width="140" :height="40" /><br><small>west</small></div>
</div>

---
layout: section
---

# A section divider
