<template>
<section>
  <div class="hero content">
    <h1>Gragon</h1>
    <p id="subheader"><span>Game & Software Engineer</span> <span>Germany</span></p>
    <ul>
      <li v-for="card in cards" :key="card.label">
        <HeroCard v-bind="card" />
      </li>
    </ul>
  </div>
</section>
</template>

<script lang="ts" setup>
const cards = [
  { label: "projects", url: "projects", icon: "material-symbols:web-sharp" },
  { label: "games", url: "games", icon: "material-symbols:videogame-asset-sharp" },
  { label: "skills", url: "skills", icon: "material-symbols:star-sharp" },
  { label: "about", url: "about", icon: "material-symbols:person-sharp" }
]
</script>

<style lang="sass" scoped>
section
  min-height: 100lvh

  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

  &::after
    content: ''
    position: absolute
    bottom: 0
    width: 100%
    height: 16px
    
    background-image: repeating-linear-gradient(45deg, var(--secondary), var(--secondary) 12px, transparent 12px, transparent 24px)

.hero
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

#subheader
  padding: 0.75rem 0.25rem

  border: solid var(--secondary)
  border-width: 8px 0

  display: flex
  justify-content: space-between

  text-transform: uppercase

ul
  margin: 3rem 0
  padding: 0

  display: grid
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
  gap: 1.5rem

  list-style-type: none
</style>