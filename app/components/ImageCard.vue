<template>
<div class="image-container">
  <NuxtImg :src :alt format="webp" :sizes loading="lazy" />
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
  overflow: hidden
  border: solid var(--border-s) var(--secondary)

  &:hover, &:focus-visible, &:focus-within
    & img
      transform: scale(1.05)

img
  width: 100%
  aspect-ratio: 16 / 9
  object-fit: cover

  // transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)
</style>