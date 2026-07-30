<template>
  <Transition name="fade">
  <template v-if="isVisible">
      <nav class="nav-container">
        <button v-for="nav in navbarNavigation" :key="nav.label" class="app-top">
          <AppCard v-bind="nav" label="" border-width="--border-s" />
        </button>
      </nav>
    </template>
  </Transition>
</template>

<script setup lang="ts">
const SCROLL_THRESHOLD = 300

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > SCROLL_THRESHOLD
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
.nav-container
  position: fixed
  right: 1.5rem
  top: 1.5rem

  display: flex
  flex-direction: column
  gap: 0.5rem

  z-index: 50

.app-top
  width: 3rem

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
  transform: translateX(0.5rem)
</style>