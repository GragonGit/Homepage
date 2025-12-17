<template>
<div class="Hero">
  <ul>
    <!-- <li v-for="(item, i) in navItems" :key="i"
        @mouseover="hovered = item.key"
        @mouseleave="hovered = DescriptionKey.Default"
        > -->
    <li v-for="(item, i) in navItems" :key="i">
      <NuxtLink :to="item.to">
        <p>{{ item.text }}</p>
      </NuxtLink>
    </li>
  </ul>
  <!-- <div id="information">
      <div />
      <div id="imageContainer">
        <NuxtImg id="image" :src="current.imageUrl" />
      </div>
      <div id="text">
        <h3>{{ current.title }}</h3>
        <p id="description"><span>{{ current.description }}</span></p>
      </div>
    </div> -->
</div>
</template>

<script lang="ts" setup>
// import type { Description } from "./descriptions";
import { DescriptionKey } from "./descriptions";

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

// const hovered = ref<DescriptionKey>(DescriptionKey.Default)

// const current = computed<Description>(() => {
//   return descriptions[hovered.value]
// })
</script>

<style lang="sass" scoped>
.Hero
  --split: 50%

  display: grid
  //grid-template-columns: var(--split) calc(100% - var(--split))
  height: 100svh
  background: linear-gradient(calc( 90deg), transparent var(--split), c.$tertiary var(--split));

ul
  list-style-type: none

  display: flex
  flex-direction: column
  justify-self: center
  align-self: center

  width: clamp(5rem, 70vw, 20rem)
  gap: 2rem
  padding: 0
  margin: 0

  @media (min-width: breakpoints.$sm)
    transform: skewX(calc(-1 * m.$skew))



li
  transition: transform 100ms linear, background-color 100ms linear, box-shadow 100ms linear

  background-color: c.$secondary
  box-shadow: m.$shadow c.$secondary
  transform: skewX(calc(-1 * m.$skew))
//
//  &:hover, &:focus-within
//    background-color: c.$tertiary
//    transform: translateX(-2rem)
//    box-shadow: m.$shadow c.$tertiary
//
a
  display: block
  justify-items: center
  outline: none

  padding: 1rem

  color: c.$primary

  text-decoration: none

  &>p
    font-size: clamp(1rem, 10vw, 2.5rem)
    margin: 0
    transition: transform 100ms linear
    transform: skewX(m.$skew)

//#information
//  display: flex
//  flex-direction: column
//  justify-content: space-between
//  gap: 1rem
//  padding-top: 0.5rem
//  padding-bottom: 2rem
//  transform: skewX(calc(-1 * m.$skew))
//  margin-left: 2rem
//
//#text
//  display: flex
//  flex-direction: column
//  justify-content: flex-end
//  gap: 1rem
//
//  & > *
//    background-color: c.$secondary
//    color: c.$primary
//    padding: 1rem 2rem
//    width: fit-content
//
//    & > *
//      display: block
//      text-wrap: auto
//      transform: skewX(m.$skew)
//
//#imageContainer
//  aspect-ratio: 16 / 9
//  overflow: hidden
//  background-color: c.$secondary
//  margin-right: 5rem
//  border: black solid 1rem
//  display: grid
//  place-items: center
//
//#image
//  width: 120%
//  transform: skewX(m.$skew)
</style>