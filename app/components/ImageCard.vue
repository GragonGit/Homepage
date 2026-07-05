<template>
<div class="image-container">
  <NuxtImg :src :alt format="webp" :sizes loading="lazy" class="base-img" />

  <NuxtImg :src :alt format="webp" :sizes loading="lazy" class="filtered-img" aria-hidden="true" />
</div>
</template>

<script lang="ts" setup>
defineProps<{
  src: string
  alt: string
  sizes: string
}>()
</script>

<style lang="sass" scoped>
.image-container
  position: relative
  aspect-ratio: 16 / 9
  overflow: hidden
  border: solid var(--border-s) var(--secondary)

  &:hover, &:focus-visible, &:focus-within
    .filtered-img
      opacity: 0
      transform: scale(1.03)
    .base-img
      transform: scale(1.03)

.base-img, .filtered-img
  transform: scale(1.005)
  width: 100%
  aspect-ratio: 16 / 9
  object-fit: cover
  transition: transform 0.3s ease, opacity 0.3s ease

.filtered-img
  position: absolute
  top: 0
  left: 0
  pointer-events: none
  opacity: 1
  
  // Your SVG filter remains here
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='keep-red' color-interpolation-filters='sRGB'><feColorMatrix in='SourceGraphic' type='matrix' values='0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0' result='gray'/><feColorMatrix in='SourceGraphic' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 -0.5 -0.5 0 0' result='rawMask'/><feComponentTransfer in='rawMask' result='mask'><feFuncA type='discrete' tableValues='0 1 1 1'/></feComponentTransfer><feComposite in='SourceGraphic' in2='mask' operator='in' result='redPart'/><feComposite in='gray' in2='mask' operator='out' result='greyPart'/><feMerge><feMergeNode in='greyPart'/><feMergeNode in='redPart'/></feMerge></filter></svg>#keep-red")
</style>