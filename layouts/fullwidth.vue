<!-- Wide figures and tables across text and margin; `::margin::` content becomes the caption below -->
<template>
  <div class="slidev-layout fullwidth">
    <div class="main"><slot /></div>
    <div v-if="$slots.margin" class="caption"><slot name="margin" /></div>
  </div>
</template>
