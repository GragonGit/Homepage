<template>
<header>
  <NuxtLink v-for="link in links" :key="link" :to="link === 'home' ? '/' : link">{{ link }}</NuxtLink>
</header>
</template>

<script lang="ts" setup>
const links = ["home", "projects", "games", "skills", "about"]
</script>

<style lang="sass" scoped>
header
  position: fixed
  top: 0
  width: 100%

  padding: clamp(0.25rem, 2vw, 0.5rem)

  display: flex
  flex-wrap: wrap
  justify-content: flex-end
  gap: clamp(0.25em, 1.5vw, 0.5em)

  background-image: linear-gradient(180deg, var(--secondary) -300%, var(--transparent) 99%)

a
  padding: 0.5em 1em

  border: solid var(--border-xs) var(--transparent)
  border-radius: 3em

  font-size: clamp(0.65rem, 2.2vw, 0.75rem)
  letter-spacing: 0.75px
  text-transform: uppercase

  color: var(--white)

  &:hover, &:focus-visible
    border: solid var(--border-xs) var(--secondary)
    background-color: var(--white)
    color: var(--secondary)
</style>