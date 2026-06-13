<template>
<header>
  <NuxtLink :to="link === 'home' ? '/' : link" v-for="link in links">{{ link }}</NuxtLink>
</header>
</template>

<script lang="ts" setup>
const links = ["home", "projects", "about"]
</script>

<style lang="sass" scoped>
header
  position: fixed
  top: 0
  width: 100%

  padding: 0.5rem

  display: flex
  justify-content: center
  gap: 0.5em

  background-image: radial-gradient(150rem 3rem ellipse at center top, var(--secondary) -500%, var(--transparent) 75%)

a
  padding: 0.5em 1em

  border: solid 2px var(--transparent)
  border-radius: 3em

  font-size: 8pt
  letter-spacing: 0.75px
  text-transform: uppercase

  color: var(--white)

  &:hover, &:focus-visible
    border: solid 2px var(--secondary)
    background-color: var(--white)
    color: var(--secondary)
</style>