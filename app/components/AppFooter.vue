<template>
<footer>
  <div class="content">
    <div class="links">
      <nav>
        <NuxtLink v-for="link in footerMainNavigation" :key="link.url" :to="link.url">{{ link.label }}</NuxtLink>
      </nav>
      <nav>
        <NuxtLink v-for="link in socialNavigation" :key="link.url" :to="link.url">{{ link.label }}</NuxtLink>
      </nav>
    </div>
    <hr noshade>
    <div class="links">
      <span>© {{ new Date().getFullYear() }} Gragon. All rights reserved.</span>
      <nav>
        <NuxtLink v-for="link in legalNavigation" :key="link.url" :to="link.url">{{ link.label }}</NuxtLink>
      </nav>
    </div>
  </div>
</footer>
</template>

<style lang="sass" scoped>
footer
  border-bottom: var(--border-s) solid var(--accent)

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

  & > a
    text-transform: capitalize

hr
  border: var(--border-xs) solid var(--primary)
</style>