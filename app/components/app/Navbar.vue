<template>
  <Transition name="fade">
  <template v-if="isVisible">
      <nav class="nav-container">
        <button v-for="nav in navbarNavigation" :key="nav.label" class="app-top">
          <AppCard v-bind="nav" label="" border-width="--border-s" :active="getSectionId(nav.url) === activeSection"/>
        </button>
      </nav>
    </template>
  </Transition>
</template>

<script setup lang="ts">
const SCROLL_THRESHOLD = 300

const isVisible = ref(false)
const activeSection = ref<string | null>(null)

let observer: IntersectionObserver | null = null

function handleScroll() {
  isVisible.value = window.scrollY > SCROLL_THRESHOLD
}

function getSectionId(url: string) {
  return url.startsWith('/#') ? url.slice(2) : url
}

function setupObserver() {
  const sections = navbarNavigation
    .map(nav => document.getElementById(getSectionId(nav.url)))
    .filter((el): el is HTMLElement => el !== null)

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find(entry => entry.isIntersecting)
      if (visible) {
        activeSection.value = visible.target.id
      }
    },
    {
      rootMargin: '-20% 0px -75% 0px',
      threshold: 0,
    }
  )

  sections.forEach(section => observer!.observe(section))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  setupObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
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