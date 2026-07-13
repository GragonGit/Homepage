<template>
<Transition name="fade">
  <button v-if="isVisible" class="app-top" aria-label="Back to top" @click="scrollToTop">
    <AppCard label="" icon="material-symbols:arrow-upward-alt" border-width="--border-s" url=""/>
  </button>
</Transition>
</template>

<script setup lang="ts">
const SCROLL_THRESHOLD = 300

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > SCROLL_THRESHOLD
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="sass" scoped>
.app-top
  position: fixed
  right: 1.5rem
  bottom: 1.5rem

  width: 3rem

  z-index: 50

  border: none
  background: none
  padding: 0
  cursor: pointer

.fade-enter-active,
.fade-leave-active
  transition: opacity 0.2s ease, transform 0.2s ease

.fade-enter-from,
.fade-leave-to
  opacity: 0
  transform: translateY(0.5rem)
</style>