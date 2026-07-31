<template>
  <div class="matrix-bg" :style="mouseStyle" />
</template>

<script lang="ts" setup>
const mouseX = ref(0)
const mouseY = ref(0)
const isHovered = ref(false)

const updateMouseCoords = (e: MouseEvent) => {
  mouseX.value = e.pageX
  mouseY.value = e.pageY
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

onMounted(() => {
  window.addEventListener('mousemove', updateMouseCoords)
  document.documentElement.addEventListener('mouseleave', handleMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouseCoords)
  document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
})

const mouseStyle = computed(() => ({
  '--mouse-x': `${mouseX.value}px`,
  '--mouse-y': `${mouseY.value}px`,
  '--mask-opacity': isHovered.value ? '0.2' : '0'
}))
</script>

<style lang="sass" scoped>
.matrix-bg
  --bg-size: 40px

  position: absolute
  inset: 0
  pointer-events: none

  background: radial-gradient(circle, transparent 5px, var(--primary) 5px), linear-gradient(90deg, var(--secondary) 2px, transparent 2px), linear-gradient(0deg, var(--secondary) 2px, transparent 2px)
  background-position: calc( calc( var(--bg-size) / 2 ) + 1px ) calc( calc( var(--bg-size) / 2 ) - 1px ), 0 0, 0 0
  background-size: var(--bg-size) var(--bg-size)

  opacity: var(--mask-opacity, 0)
  transition: opacity 0.3s ease

  mask-image: radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), black 10%, #0002 100%)
  -webkit-mask-image: radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), black 10%, #0002 100%)

  z-index: -10
</style>