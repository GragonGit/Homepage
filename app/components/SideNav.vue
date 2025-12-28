<template>
  <Transition name="slide">
    <nav v-if="sideNavOpen">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/games">Games</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<script lang="ts" setup>
const { sideNavOpen } = useSideNav()
</script>

<style scoped lang="sass">
nav
  display: flex
  align-items: center
  
  position: sticky
  top: 0

  height: 90dvh
  width: clamp(100px, 5dvw, 400px)
  // Pulls back the content
  margin-right: clamp(-100px, -5dvw, -400px)

ul
  list-style: none
  padding-inline-start: 2rem

.slide-enter-active,
.slide-leave-active
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)

.slide-enter-from,
.slide-leave-to
  opacity: 0
  transform: translateX(-20px)
</style>