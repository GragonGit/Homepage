<template>
<footer>
  <div class="content">
    <div class="links">
      <nav>
        <NuxtLink to="Home">Home</NuxtLink>
        <NuxtLink to="Home">Projects</NuxtLink>
        <NuxtLink to="Home">Games</NuxtLink>
        <NuxtLink to="Home">Skills</NuxtLink>
        <NuxtLink to="Home">About</NuxtLink>
      </nav>
      <nav>
        <NuxtLink to="Home">GitHub</NuxtLink>
        <NuxtLink to="Home">LinkedIn</NuxtLink>
      </nav>
    </div>
    <hr noshade>
    <div class="links">
      <span>© {{ new Date().getFullYear() }} Gragon. All rights reserved.</span>
      <nav>
        <NuxtLink to="Home">Imprint</NuxtLink>
        <NuxtLink to="Home">Privacy</NuxtLink>
        <NuxtLink to="Home">Cookies</NuxtLink>
      </nav>
    </div>
  </div>
</footer>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
footer
  border-bottom: 4px solid var(--accent)

  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

  padding: 2rem

  font-size: 1rem

  color: var(--primary)
  background-color: var(--secondary)

  & a
    font-size: 1rem
    color: var(--primary)

    &:hover
      color: var(--accent)

.content
  max-width: 60rem

.links
  display: flex
  justify-content: space-between
  
nav
  display: flex
  flex-direction: row
  gap: 1em

hr
  border: 2px solid var(--primary)
</style>