<template>
  <div id="Hero">
    <ul>
      <li v-for="(item, i) in navItems" :key="i" @mouseover="hovered = item.key"
        @mouseleave="hovered = DescriptionKey.Default">
        <NuxtLink :to="item.to">
          <p>{{ item.text }}</p>
        </NuxtLink>
      </li>
    </ul>
    <div id="information">
      <div />
      <div id="imageContainer">
        <NuxtImg id="image" :src="current.imageUrl" />
      </div>
      <div id="text">
        <h3>{{ current.title }}</h3>
        <p id="description"><span>{{ current.description }}</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Description } from "./descriptions";
import { DescriptionKey, descriptions } from "./descriptions";

type NavItem = {
  key: DescriptionKey
  text: string
  to: string
}

const navItems: NavItem[] = [
  { key: DescriptionKey.Projects, text: 'Projects', to: '/#Projects' },
  { key: DescriptionKey.Games, text: 'Games', to: '/#Games' },
  { key: DescriptionKey.About, text: 'About', to: '/#About' },
  { key: DescriptionKey.Blog, text: 'Blog', to: '/#Blog' },
]

const hovered = ref<DescriptionKey>(DescriptionKey.Default)

const current = computed<Description>(() => {
  return descriptions[hovered.value]
})
</script>

<style lang="sass" scoped>
#Hero
  --split: 50%

  display: grid
  grid-template-columns: var(--split) calc(100% - var(--split))
  height: 100svh
  background: linear-gradient(calc( 90deg + var(--skew) ), transparent var(--split), var(--tertiary) var(--split));

ul
  --element-width: 20rem
  --element-padding: 1rem

  margin-top: 5rem
  display: flex
  flex-direction: column
  gap: 2rem
  list-style-type: none
  padding: 0
  width: fit-content
  transform: skewX(calc(-1 * var(--skew)))
  justify-self: end
  align-self: center
  margin-right: 3rem

li
  display: grid
  position: relative
  align-content: center 
  background-color: var(--secondary)
  width: fit-content
  transition: transform 100ms linear, background-color 100ms linear, box-shadow 100ms linear
  box-shadow: var(--shadow) var(--secondary)

  &:hover, &:focus-within
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
    transform: skewX(var(--skew))

#information
  display: flex
  flex-direction: column
  justify-content: space-between
  gap: 1rem
  padding-top: 0.5rem
  padding-bottom: 2rem
  transform: skewX(calc(-1 * var(--skew)))
  margin-left: 2rem

#text
  display: flex
  flex-direction: column
  justify-content: flex-end
  gap: 1rem

  & > *
    background-color: var(--secondary)
    color: var(--primary)
    padding: 1rem 2rem
    width: fit-content

    & > *
      display: block
      text-wrap: auto
      transform: skewX(var(--skew))

#imageContainer
  aspect-ratio: 16 / 9
  overflow: hidden
  background-color: var(--secondary)
  margin-right: 5rem
  border: black solid 1rem
  display: grid
  place-items: center

#image
  width: 120%
  transform: skewX(var(--skew))
</style>