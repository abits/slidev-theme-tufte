<!-- Text column plus an optional Tufte margin: put margin notes, sources and captions after `::margin::` -->
<template>
  <div class="slidev-layout default" :class="{ 'with-margin': $slots.margin }">
    <div class="main"><slot /></div>
    <aside v-if="$slots.margin" class="margin"><slot name="margin" /></aside>
  </div>
</template>
