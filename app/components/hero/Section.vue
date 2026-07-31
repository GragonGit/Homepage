<template>
<section id="home">
  <!-- <HeroBackground /> -->
  <div class="hero content">
    <h1>Tristan</h1>
    <div id="subheader"><span>Web Developer & Software Engineer</span> <span>Germany</span></div>
    <nav>
      <AppCard v-for="link in heroNavigation" :key="link.label" v-bind="link" />
    </nav>
  </div>

  <span id="scroll-indicator"> <span>▼</span> More Below <span>▼</span> </span>
</section>
</template>

<style lang="sass" scoped>
section
  position: relative

  min-height: 100svh

  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

  background-color: transparent

#scroll-indicator
  position: absolute
  bottom: 1rem
  left: 50%
  transform: translateX(-50%)

  display: flex
  align-items: flex-start

  font-size: clamp(0.75rem, 2.5vw, 0.9rem)
  font-weight: 700
  text-transform: uppercase
  letter-spacing: 0.05em

  color: var(--secondary)
  
  & > span
    padding-inline: 0.2rem

    font-size: clamp(0.6rem, 2vw, 0.7rem)
    color: var(--accent)

.hero
  max-width: 70rem

h1
  margin-block: 1rem 2rem

  display: flex
  align-items: baseline
  gap: clamp(0.75rem, 2vw, 1.5rem)

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
  border-width: var(--border-m) 0

  display: flex
  flex-wrap: wrap
  justify-content: space-between
  gap: 0.5em

  font-size: clamp(0.9rem, 4vw, 1.5rem)
  font-weight: 600
  text-transform: uppercase

nav
  margin: clamp(1.5rem, 6vw, 3rem) 0
  padding: 0

  display: grid
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 1fr))
  gap: clamp(1rem, 4vw, 1.5rem)
</style>