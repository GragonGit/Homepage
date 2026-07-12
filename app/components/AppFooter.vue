<template>
<footer>
  <div class="content">
    <div class="links">
      <nav>
        <NuxtLink v-for="link in footerMainNavigation" :key="link.url" :to="link.url">{{ link.label }}</NuxtLink>
      </nav>
      <nav>
        <NuxtLink v-for="link in socialNavigation" :key="link.url" target="_blank" :to="link.url">{{ link.label }}</NuxtLink>
      </nav>
    </div>
    <hr noshade>
    <div class="links">
      <span>© {{ new Date().getFullYear() }} Tristan. All rights reserved.</span>
      <nav>
        <NuxtLink v-for="link in legalNavigation" :key="link.url" :to="link.url">{{ link.label }}</NuxtLink>
      </nav>
    </div>
  </div>
</footer>
</template>

<style lang="sass" scoped>
footer
  --primary: var(--theme-black)
  --secondary: var(--theme-white)
  
  border-bottom: var(--border-s) solid var(--accent)

  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

  padding: 2rem

  font-size: 1rem

  color: var(--secondary)
  background-color: var(--primary)

  & a
    font-size: clamp(0.7rem, 3vw, 1rem)

.content
  max-width: 60rem

.links
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  gap: 1.5rem 2rem

  & > span
    font-size: clamp(0.5rem, 2vw, 1rem)
  
nav
  display: flex
  flex-direction: row
  flex-wrap: wrap
  gap: 1rem

  & > a
    text-transform: capitalize

hr
  border: var(--border-xs) solid var(--secondary)
</style>