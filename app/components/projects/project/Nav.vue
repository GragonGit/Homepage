<template>
<section v-if="prevProject || nextProject" class="surround">
  <div class="surround-grid">
    <NuxtLink v-if="prevProject" :to="prevProject.path" class="surround-link surround-prev">
      <Icon name="mdi:arrow-left" />
      <span>
        <small>Previous</small>
        {{ prevProject.title }}
      </span>
    </NuxtLink>
    <NuxtLink v-else to="/#projects" class="surround-link surround-prev">
      <Icon name="mdi:arrow-left" />
      <span>
        <small>Go Back</small>
        Projects
      </span>
    </NuxtLink>

    <NuxtLink v-if="nextProject" :to="nextProject.path" class="surround-link surround-next">
      <span>
        <small>Next</small>
        {{ nextProject.title }}
      </span>
      <Icon name="mdi:arrow-right" />
    </NuxtLink>
    <NuxtLink v-else to="/#contact" class="surround-link surround-next">
      <span>
        <small>Like what you see?</small>
        Contact
      </span>
      <Icon name="mdi:arrow-right" />
    </NuxtLink>
  </div>
</section>
</template>

<script lang="ts" setup>
const props = defineProps<{
  slug: string
}>()

const { data: surround } = await useAsyncData(`project-${props.slug}-surround`, () =>
  queryCollectionItemSurroundings('projects', `/projects/${props.slug}`, {
    fields: ['title', 'path']
  }).order('order', 'ASC')
)

const prevProject = computed(() => surround.value?.[0] ?? null)
const nextProject = computed(() => surround.value?.[1] ?? null)
</script>

<style lang="sass" scoped>
.surround-grid
  display: grid
  grid-template-columns: 1fr 1fr
  gap: var(--border-l)
  background-color: var(--secondary)

.surround-link
  display: flex
  align-items: center
  gap: 1rem

  padding: clamp(1.5rem, 5vw, 3rem)

  background-color: var(--primary)
  color: var(--secondary)

  .iconify
    width: 1.5em
    height: 1.5em
    flex-shrink: 0

  small
    display: block
    margin-bottom: 0.25rem

    font-size: 0.8rem
    font-weight: 700
    letter-spacing: 0.08em
    text-transform: uppercase
    opacity: 0.7

  &:hover, &:focus-visible
    color: var(--accent)

.surround-next
  justify-content: flex-end
  text-align: right

@media (max-width: 40rem)
  .surround-grid
    grid-template-columns: 1fr

  .surround-next
    justify-content: flex-start
    text-align: left
</style>
