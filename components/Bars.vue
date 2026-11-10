<!-- Horizontal bars, labelled directly, no axis, no grid, no legend:
     <Bars :data="[{ label: 'tufte', value: 43.7 }, …]" unit=" s" />
     Bars start at zero, so length is proportional to value (lie factor 1). Pass the same `max`
     to every chart of a small-multiples set so they share one scale. -->
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  data: { label: string, value: number }[]
  max?: number
  unit?: string
  decimals?: number
}>(), { unit: '', decimals: 1 })
const scale = computed(() => props.max ?? Math.max(...props.data.map(d => d.value)))
</script>

<template>
  <div class="bars">
    <template v-for="d in data" :key="d.label">
      <span class="bar-label">{{ d.label }}</span>
      <span class="bar-track"><span class="bar" :style="{ width: `${(d.value / scale) * 100}%` }" /></span>
      <span class="bar-value">{{ d.value.toFixed(decimals) }}{{ unit }}</span>
    </template>
  </div>
</template>
