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

  mix-blend-mode: difference

a
  padding: 0.5em 1em
  border-radius: 3em

  font-size: 8pt
  letter-spacing: 0.75px
  text-transform: uppercase

  color: #fff

  &:hover, &:focus-visible
    background-color: var(--background)
    color: #000
</style>