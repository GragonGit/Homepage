<template>
  <nav ref="navRef">
    <button @click="isOpen = !isOpen">
      <Icon name="material-symbols:menu" />
    </button>
    <Transition name="slide">
      <ul v-if="isOpen">
        <li v-for="(item, i) in navItems" :key="i">
          <NuxtLink :to="item.to" @click="closeMenu">
            <p>{{ item.text }}</p>
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </nav>
</template>

<script lang="ts" setup>
interface NavItem {
  text: string
  to: string
}

defineProps<{
  navItems: NavItem[]
}>()

const isOpen = ref(true)
const navRef = ref<HTMLElement | null>(null)

const closeMenu = () => {
  isOpen.value = false
}

const handleScroll = () => {
  isOpen.value = window.scrollY < 10
}

const handleClickOutside = (e: MouseEvent) => {
  if (navRef.value && !navRef.value.contains(e.target as Node) && window.scrollY >= 10) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
  window.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
  window.removeEventListener("click", handleClickOutside)
})
</script>

<style lang="sass" scoped>
nav
  display: flex
  position: fixed
  gap: 1rem
  height: 3rem
  margin: 0.5rem 1rem
  transform: skewX(-12.5deg)

  &>button
    display: grid
    justify-items: center
    align-items: center
    background-color: var(--secondary)
    aspect-ratio: 1
    border: none
    box-shadow: 5px 5px 20px 0
    z-index: 999

    &:hover, &:focus-visible
      box-shadow: inset 0 0 0 2px black, inset 0 0 0 4px white, var(--shadow) var(--secondary)

ul
  display: flex
  flex-direction: row
  list-style-type: none
  padding: 0
  margin: 0
  background-color: var(--secondary)

li
  --highlight-bar-height: 0.25rem

  display: grid
  position: relative
  align-content: center 
  background-color: var(--secondary)
  box-shadow: var(--shadow) var(--secondary)
  overflow: clip

  &::after
    content: ''
    position: absolute
    width: 100%
    height: var(--highlight-bar-height)
    background-color: var(--tertiary)
    bottom: calc(var(--highlight-bar-height) * -1)
    transition: bottom 100ms linear

  &:hover, &:focus-within
    &::after
      bottom: 0
    
    &>*>p
      transform: translateY(calc(var(--highlight-bar-height) * -1)) skewX(12.5deg)

a
  display: block
  color: var(--primary)
  text-decoration: none
  padding: 1rem
  outline: none

  &>p
    margin: 0
    transition: transform 100ms linear
    transform: skewX(12.5deg)

.iconify
  color: var(--primary)
  font-size: 2rem

.slide-enter-active, .slide-leave-active
  transition: transform 0.3s ease, opacity 0.3s ease

.slide-enter-from, .slide-leave-to
  transform: translateX(-100%)
  opacity: 0
</style>