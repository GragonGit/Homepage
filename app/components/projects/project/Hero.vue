<template>
<section class="hero">
  <div class="content">
    <div class="hero-nav">
      <NuxtLink to="/" class="wordmark">Tristan</NuxtLink>
      <NuxtLink to="/#projects" class="back-link">
        <Icon name="mdi:arrow-left" />
        All Projects
      </NuxtLink>
    </div>

    <p v-if="project.category" class="eyebrow">{{ project.category }}</p>
    <h1 class="project-title">{{ project.title }}</h1>
    <p v-if="project.description" class="lead">{{ project.description }}</p>

    <dl v-if="project.role || project.year" class="meta">
      <div v-if="project.role">
        <dt>Role</dt>
        <dd>{{ project.role }}</dd>
      </div>
      <div v-if="project.year">
        <dt>Year</dt>
        <dd>{{ project.year }}</dd>
      </div>
    </dl>

    <div v-if="project.links?.length" class="actions">
      <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer"
        class="btn" :class="{ 'btn--fill': link.primary }">
        <Icon :name="link.icon ?? 'mdi:open-in-new'" />
        <span>{{ link.label }}</span>
      </a>
    </div>

    <NuxtImg v-if="project.cover" :src="project.cover" :alt="project.coverAlt ?? project.title" class="cover-image" />
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
.hero
  --primary: var(--theme-black)
  --secondary: var(--theme-white)

  padding-block: clamp(3rem, 8vw, 5rem)

.hero-nav
  display: flex
  align-items: center
  justify-content: space-between
  flex-wrap: wrap
  gap: 1rem

  padding-bottom: clamp(2rem, 6vw, 3rem)

.wordmark
  font-size: 1.5rem
  font-weight: 900
  text-transform: uppercase
  color: var(--accent)

  &:hover, &:focus-visible
    color: var(--accent)

.back-link
  display: inline-flex
  align-items: center
  gap: 0.4rem
  font-size: 1rem

  .iconify
    width: 1.1em
    height: 1.1em

.eyebrow
  margin: 0
  font-size: 1rem
  font-weight: 700
  letter-spacing: 0.08em
  text-transform: uppercase
  color: var(--accent)

.project-title
  margin-block: 0.25em 0.35em
  font-size: clamp(3rem, 10vw, 6rem)

.lead
  max-width: 60ch
  font-size: clamp(1.1rem, 3vw, 1.5rem)
  font-weight: 500

.meta
  display: flex
  flex-wrap: wrap
  gap: clamp(1.5rem, 5vw, 3rem)

  margin: 1.5rem 0
  padding: 1.5rem 0
  border-block: var(--border-xs) solid var(--secondary)

  dt
    font-size: 0.8rem
    font-weight: 700
    letter-spacing: 0.08em
    text-transform: uppercase
    opacity: 0.7

  dd
    margin: 0.15rem 0 0
    font-size: 1.25rem
    font-weight: 700

.actions
  display: flex
  flex-wrap: wrap
  gap: 1rem
  margin-bottom: clamp(2rem, 6vw, 4rem)

.btn
  display: inline-flex
  align-items: center
  gap: 0.6rem

  padding: 0.85rem 1.5rem

  border: solid var(--secondary)
  border-width: var(--border-s)

  background-color: var(--primary)
  color: var(--secondary)

  font-size: 1rem
  font-weight: 700
  text-transform: uppercase

  cursor: pointer

  .iconify
    width: 1.2em
    height: 1.2em

  &:hover, &:focus-visible
    transform: translate(-4px, -4px)
    box-shadow: 4px 4px 0 0 var(--secondary)
    color: var(--secondary)

.btn--fill
  background-color: var(--accent)
  border-color: var(--accent)
  color: var(--theme-white)

  &:hover, &:focus-visible
    color: var(--theme-white)
    box-shadow: 4px 4px 0 0 var(--accent)

.cover-image
  display: block
  width: 100%
  aspect-ratio: 16 / 9
  object-fit: cover

  margin-top: clamp(2rem, 6vw, 3rem)

  border: solid var(--secondary)
  border-width: var(--border-s)
</style>