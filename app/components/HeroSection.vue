<template>
<section class="hero content">
  <h1>Tristan</h1>
  <p id="professions">Web Games Software</p>
</section>
</template>

<style lang="sass" scoped>
.hero
  margin-top: 5rem
  max-width: 50rem


h1
  margin-block: 0

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
  margin-block: 1rem
  padding: 0.25rem 1rem

  border-radius: 3em

  text-align: justify
  text-align-last: justify

  background-color: var(--secondary)
  color: var(--primary)
</style>