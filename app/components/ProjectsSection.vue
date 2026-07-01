<template>
<section id="projects">
  <div class="content">
    <h2>Projects</h2>
    <div class="featured">
      <ImageCard v-bind="featuredImage" />
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
const featuredImage = {
  src: "/images/projects/portfolio-hero.png",
  alt: "Portfolio Hero Section",
  sizes: "sm:100vw md:60vw"
}

const featuredIcons = [
  { label: "Nuxt", url: "", icon: "logos:nuxt-icon" },
  { label: "Vue", url: "", icon: "logos:vue" },
  { label: "Typescript", url: "", icon: "logos:typescript-icon" },
  { label: "Typescript", url: "", icon: "logos:typescript-icon" },
  { label: "Typescript", url: "", icon: "logos:typescript-icon" },
]
</script>

<style lang="sass" scoped>
section
  height: 100lvh

  border-bottom: var(--border-l) solid var(--primary)
  padding-bottom: 4rem

  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

  color: var(--primary)
  background-color: var(--secondary)

.featured
  display: grid
  grid-template-columns: 2fr 1fr
  gap: 2rem

  margin-block: 2rem

.feature-info
  display: flex
  flex-direction: column
  justify-content: space-between

p
  margin: 0

.techstack
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
  gap: 1.5rem

</style>