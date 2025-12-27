<template>
  <ContentRenderer v-if="content" :value="content" />
  <div v-else>
    <h1>Page Not Found</h1>
    <p>Oops! The content you're looking for doesn't exist.</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.path)

const { data: content } = await useAsyncData(
  `content-${path.value}`,
  () => queryCollection('content').path(path.value).first(),
  { watch: [path] }
)

useTitle().value = content.value?.title ?? 'Page not found'
</script>
