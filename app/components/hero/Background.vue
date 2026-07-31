<template>
  <div class="bg" :style="mouseStyle" />
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
  '--mask-opacity': isHovered.value ? '0.01' : '0.01'
}))
</script>

<style lang="sass" scoped>
.bg
  position: absolute
  inset: 0
  pointer-events: none

  background: repeating-linear-gradient(45deg, var(--secondary), var(--secondary) 10px, transparent 10px, transparent 20px)

  opacity: var(--mask-opacity, 0)
  transition: opacity 0.3s ease

  // mask-image: radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), black 10%, #0002 100%)
  // -webkit-mask-image: radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), black 10%, #0002 100%)

  z-index: -10
</style>