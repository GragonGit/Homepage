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

  padding: 0.5rem

  display: flex
  justify-content: flex-end
  gap: 0.5em

  background-image: linear-gradient(180deg, var(--secondary) -300%, var(--transparent) 99%)

a
  padding: 0.5em 1em

  border: solid 2px var(--transparent)
  border-radius: 3em

  font-size: 9pt
  letter-spacing: 0.75px
  text-transform: uppercase

  color: var(--white)

  &:hover, &:focus-visible
    border: solid 2px var(--secondary)
    background-color: var(--white)
    color: var(--secondary)
</style>