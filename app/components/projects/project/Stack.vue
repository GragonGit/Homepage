<template>
<section v-if="project.stack?.length" class="stack">
  <div class="content">
    <h2>Built With</h2>
    <div class="stack-grid">
      <AppCard v-for="tech in project.stack" :key="tech.label" :label="tech.label" :icon="tech.icon"
        :url="tech.url ?? route.path" />
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
import type { ProjectsCollectionItem } from '@nuxt/content';

const props = defineProps<{
  project: ProjectsCollectionItem
}>()

const route = useRoute()
</script>

<style lang="sass" scoped>
section
  --primary: var(--theme-red)
  --secondary: var(--theme-white)
  --accent: var(--theme-black)

  padding-block: clamp(3rem, 8vw, 5rem)

.stack-grid
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr))
  gap: 1.25rem
  margin-top: 2rem

  .card
    --primary: var(--theme-white)
    --secondary: var(--theme-black)
    --accent: var(--theme-red)

    max-width: 12rem
</style>