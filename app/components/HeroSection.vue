<template>
<section class="hero content">
  <h1>Tristan</h1>
  <p id="professions">Web Games Software</p>
  <ul>
    <li v-for="card in cards" :key="card.label">
      <HeroCard v-bind="card" />
    </li>
  </ul>
</section>
</template>

<script lang="ts" setup>
const cards = [
  { label: "projects", url: "projects", icon: "material-symbols:web" },
  { label: "games", url: "games", icon: "material-symbols:stadia-controller" },
  { label: "skills", url: "skills", icon: "material-symbols:star-rounded" },
  { label: "about", url: "about", icon: "material-symbols:person" }
]
</script>

<style lang="sass" scoped>
.hero
  margin-top: 5rem
  max-width: 50rem

h1
  margin-block: 2rem

  display: flex
  align-items: baseline
  gap: clamp(0.75rem, 2vw, 1.5rem)

  font-size: clamp(3rem, 12vw, 64pt)
  font-weight: 900
  text-transform: uppercase

  color: var(--accent)

  &::after
    content: ''
    display: block

    height: 1cap
    flex-grow: 1

    background-image: repeating-linear-gradient(45deg, var(--secondary), var(--secondary) 20px, transparent 20px, transparent 40px)

#professions
  padding: 0.25rem 1rem

  border-radius: 3em

  text-align: justify
  text-align-last: justify

  background-color: var(--secondary)
  color: var(--primary)

ul
  margin: 3rem 0
  padding: 0

  display: grid
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
  gap: 1.5rem

  list-style-type: none
</style>