<template>
<div class="project-display">
  <ProjectsImage v-bind="image" />
  <p>{{ description }}</p>

  <div v-if="techStack.length" class="tech-stack">
    <Card v-for="tech in techStack" :key="tech.label" v-bind="tech" border-width="--border-xs" />
  </div>

  <NuxtLink :to="to">Learn More</NuxtLink>
</div>
</template>

<script lang="ts" setup>
defineProps<{
  image: Image
  description: string
  techStack: AppCard[]
  to: string
}>()
</script>

<style lang="sass" scoped>
.project-display
  height: 100%

  display: flex
  flex-direction: column
  justify-content: center

.tech-stack
  display: flex
  flex-wrap: wrap
  gap: 0.75rem

  margin-top: 1rem

  .card
    width: 3rem

a
  margin-top: auto
  align-self: flex-start

  text-decoration: underline
  text-transform: uppercase

</style>