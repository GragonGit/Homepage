<template>
<section @mousemove="updateMouseCoords">
  <div class="matrix-bg" :style="mouseStyle" />

  <div class="hero content">
    <h1>Gragon</h1>
    <p id="subheader"><span>Game & Software Engineer</span> <span>Germany</span></p>
    <ul>
      <li v-for="card in cards" :key="card.label">
        <HeroCard v-bind="card" />
      </li>
    </ul>
  </div>

  <span id="scroll-indicator"> <span>▼</span> More Below <span>▼</span> </span>
</section>
</template>

<script lang="ts" setup>
const cards = [
  { label: "projects", url: "projects", icon: "material-symbols:web-sharp" },
  { label: "games", url: "games", icon: "material-symbols:videogame-asset-sharp" },
  { label: "skills", url: "skills", icon: "material-symbols:star-sharp" },
  { label: "about", url: "about", icon: "material-symbols:person-sharp" }
]

const mouseX = ref(0)
const mouseY = ref(0)

const updateMouseCoords = (e: MouseEvent) => {
  mouseX.value = e.pageX
  mouseY.value = e.pageY
}

const mouseStyle = computed(() => ({
  '--mouse-x': `${mouseX.value}px`,
  '--mouse-y': `${mouseY.value}px`
}))
</script>

<style lang="sass" scoped>
section
  position: relative

  min-height: 100lvh

  border-bottom: 16px solid var(--secondary)

  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

.matrix-bg
  --bg-size: 40px

  position: absolute
  inset: 0
  pointer-events: none

  background: radial-gradient(circle, transparent 5px, var(--primary) 5px), linear-gradient(90deg, var(--secondary) 2px, transparent 2px), linear-gradient(0deg, var(--secondary) 2px, transparent 2px)
  background-position: calc( calc( var(--bg-size) / 2 ) + 1px ) calc( calc( var(--bg-size) / 2 ) - 1px ), 0 0, 0 0
  background-size: var(--bg-size) var(--bg-size)
  opacity: 0.2

  mask-image: radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), black 10%, #0004 100%)
  -webkit-mask-image: radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), black 10%, #0002 100%)

  z-index: -10

#scroll-indicator
  position: absolute
  bottom: calc( 16px + 16px ) // border + padding
  left: 50%
  transform: translateX(-50%)

  display: flex
  align-items: flex-start

  font-size: 0.85rem
  font-weight: 700
  text-transform: uppercase
  letter-spacing: 0.05em

  color: var(--secondary)
  
  & > span
    padding-inline: 0.2rem

    font-size: 0.7rem
    color: var(--accent)

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