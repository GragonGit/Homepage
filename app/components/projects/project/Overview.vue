<template>
  <section class="overview">
      <div class="content">
        <ContentRenderer :value="project" class="prose" />
  
        <template v-if="project.gallery?.length">
          <h2 class="gallery-header">Gallery</h2>
          <div class="gallery">
            <figure v-for="image in project.gallery" :key="image.src">
              <NuxtImg :src="useAsset(image.src)" :alt="image.alt ?? project.title" loading="lazy" />
            </figure>
          </div>
        </template>
      </div>
    </section>
</template>

<script lang="ts" setup>
import type { ProjectsCollectionItem } from '@nuxt/content';

const props = defineProps<{
  project: ProjectsCollectionItem
}>()
</script>

<style lang="sass" scoped>
section
  border-bottom-color: var(--secondary)

.content
  justify-self: center
  max-width: 60rem

.overview
  padding-block: 0 clamp(3rem, 8vw, 5rem)

.prose
  :deep(h2)
    font-size: clamp(2rem, 6vw, 3rem)
    margin-top: 1.75em

  :deep(h3)
    font-size: clamp(1.5rem, 5vw, 2.25rem)
    margin-top: 1.5em

  :deep(ul), :deep(ol)
    padding-left: 1.2em
    font-size: clamp(1rem, 4vw, 1.5rem)

  :deep(li)
    margin-block: 0.4em

  :deep(code)
    padding: 0.15em 0.4em
    background-color: var(--theme-black)
    color: var(--theme-white)
    font-size: 0.85em

.gallery-header
  font-size: clamp(2rem, 6vw, 3rem)
  margin-top: 1.75em

.gallery
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))
  gap: 1.5rem
  align-items: center
  margin-top: clamp(2rem, 6vw, 3rem)

  figure
    margin: 0
    overflow: hidden

    max-width: 30rem

    border: solid var(--secondary)
    border-width: var(--border-s)

  img
    display: block
    width: 100%
    object-fit: contain
</style>