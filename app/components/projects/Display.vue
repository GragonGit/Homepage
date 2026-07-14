<template>
<div class="project-display">
  <ProjectsImage v-bind="image" />
  <p>{{ description }}</p>
  <NuxtLink to="">Read More</NuxtLink>
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

a
  margin-top: auto
  align-self: flex-start

  text-decoration: underline
  text-transform: uppercase

</style>