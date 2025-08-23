<template>
  <div id="Hero">
    <ul>
      <li>
        <NuxtLink to="/#Projects">
          <p>Projects</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#Games">
          <p>Games</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#About">
          <p>About</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#Blog">
          <p>Blog</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
#Hero
  --gradient-percent: 55%

  height: 100svh
  padding-top: 5rem
  background: linear-gradient(102.5deg, var(--primary) var(--gradient-percent), var(--tertiary) var(--gradient-percent));

ul
  --element-width: 20rem
  --element-padding: 1rem

  margin-top: 7rem
  display: flex
  flex-direction: column
  gap: 2rem
  list-style-type: none
  padding: 0
  transform: skewX(-12.5deg)
  margin-left: calc(var(--gradient-percent) - var(--element-width) - 2 * var(--element-padding) - 5rem)
  width: fit-content

li
  display: grid
  position: relative
  align-content: center 
  background-color: var(--secondary)
  width: fit-content
  transition: transform 100ms linear, background-color 100ms linear, box-shadow 100ms linear
  box-shadow: var(--shadow) var(--secondary)

  &:hover
    background-color: var(--tertiary)
    transform: translateX(-2rem)
    box-shadow: var(--shadow) var(--tertiary)

a
  justify-items: center
  display: block
  color: var(--primary)
  text-decoration: none
  padding: 1rem
  width: var(--element-width)
  outline: none
  font-size: 2.5rem

  &>p
    margin: 0
    transition: transform 100ms linear
    transform: skewX(12.5deg)
</style>