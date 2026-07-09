<template>
<div class="project-display">
  <ImageCard v-bind="image" />
  <p>{{ description }}</p>
  <div class="display-footer">
    <div class="techstack">
      <AppCard v-for="tech in techStack" v-bind="tech" :key="tech.label" border-width="--border-s" />
    </div>
    <NuxtLink to="">Read More</NuxtLink>
  </div>
</div>
</template>

<script lang="ts" setup>
defineProps<{
  image: Image
  description: string
  techStack: AppCard[]
}>()
</script>

<style lang="sass" scoped>
.project-display
  height: 100%

  display: flex
  flex-direction: column
  justify-content: center

.display-footer
  margin-top: auto

  display: flex
  flex-wrap: wrap
  align-items: flex-end
  justify-content: space-between
  gap: 1rem

  & a
    text-decoration: underline
    text-transform: uppercase

.techstack
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(min(8rem, 100%), 8rem))
  gap: 1rem
  grid-auto-flow: column
</style>