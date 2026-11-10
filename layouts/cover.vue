<!-- Title slide: typography carries the hierarchy, no ornament -->
<template>
  <div class="slidev-layout cover" :class="{ 'with-margin': $slots.margin }">
    <div class="main"><slot /></div>
    <aside v-if="$slots.margin" class="margin"><slot name="margin" /></aside>
  </div>
</template>
