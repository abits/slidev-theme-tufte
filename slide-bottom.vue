<!-- Running heads and feet, as in a book: small caps in grey, no rules.
     Set in the headmatter under themeConfig.header / themeConfig.footer, each with `left` and `right`;
     {title}, {page} and {total} are filled in. `header: false` or `footer: false` hides them on a slide.
     Like a book's title page, the first slide and cover slides never carry them;
     like chapter openings, section slides don't either, unless they set `header: true` / `footer: true`. -->
<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev, $page, $frontmatter, $nav } = useSlideContext()

type Line = { left?: string, right?: string }
const cover = computed(() => $page.value === 1 || $frontmatter.layout === 'cover')

function line(key: 'header' | 'footer') {
  return computed(() => {
    const conf: Line | undefined = $slidev.themeConfigs?.[key]
    if (!conf || cover.value || $frontmatter[key] === false
      || ($frontmatter.layout === 'section' && $frontmatter[key] !== true))
      return null
    const fill = (s?: string) => String(s ?? '')
      .replaceAll('{title}', $slidev.configs.title ?? '')
      .replaceAll('{page}', String($page.value))
      .replaceAll('{total}', String($nav.value.total))
    return { left: fill(conf.left), right: fill(conf.right) }
  })
}
const header = line('header')
const footer = line('footer')
</script>

<template>
  <div v-if="header" class="running running-head"><span>{{ header.left }}</span><span>{{ header.right }}</span></div>
  <div v-if="footer" class="running running-foot"><span>{{ footer.left }}</span><span>{{ footer.right }}</span></div>
</template>
