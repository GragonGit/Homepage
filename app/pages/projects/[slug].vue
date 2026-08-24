<template>
<div v-if="project">
  <ProjectsProjectHero :project />
  <ProjectsProjectOverview :project />
  <ProjectsProjectStack :project />
  <ProjectsProjectNav :slug />
</div>
</template>

<script lang="ts" setup>
definePageMeta({
  key: route => route.params.slug as string
})

const route = useRoute()
const slug = String(route.params.slug)

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection('projects').path(`/projects/${slug}`).first()
)

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
    fatal: true
  })
}

useSeoMeta({
  title: project.value?.title,
  description: project.value?.description,
  ogTitle: project.value?.title,
  ogDescription: project.value?.description,
  ogImage: project.value?.cover
})
</script>
