<!-- Word-sized line chart (Tufte's sparkline): <Sparkline :values="[3, 5, 4, 8]" />
     The last value is marked in red, minimum and maximum in grey; the scale is the series' own range. -->
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{ values: number[], width?: number, height?: number, extremes?: boolean }>(), {
  width: 72,
  height: 16,
  extremes: true,
})
const pad = 2
const points = computed(() => {
  const v = props.values
  const lo = Math.min(...v)
  const span = Math.max(...v) - lo || 1
  const step = (props.width - 2 * pad) / Math.max(v.length - 1, 1)
  return v.map((y, i) => [pad + i * step, props.height - pad - ((y - lo) / span) * (props.height - 2 * pad)])
})
const line = computed(() => points.value.map(p => p.join(',')).join(' '))
const last = computed(() => points.value[points.value.length - 1])
const lo = computed(() => points.value[props.values.indexOf(Math.min(...props.values))])
const hi = computed(() => points.value[props.values.indexOf(Math.max(...props.values))])
</script>

<template>
  <svg class="sparkline" :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" role="img"
    :aria-label="`trend from ${values[0]} to ${values[values.length - 1]}`">
    <polyline :points="line" fill="none" stroke="currentColor" stroke-width="1" />
    <template v-if="extremes">
      <circle :cx="lo[0]" :cy="lo[1]" r="1.6" class="extreme" />
      <circle :cx="hi[0]" :cy="hi[1]" r="1.6" class="extreme" />
    </template>
    <circle :cx="last[0]" :cy="last[1]" r="1.8" class="last" />
  </svg>
</template>
