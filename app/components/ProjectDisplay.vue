<template>
<div class="project-display">
  <ImageCard v-bind="image" />
  <p>{{ description }}</p>
  <div class="techstack">
    <AppCard v-bind="tech" v-for="tech in techStack" />
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
  display: flex
  flex-direction: column
  justify-content: center

.techstack
  margin: 3rem 0

  display: grid
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr))
  gap: 0.5rem
</style>