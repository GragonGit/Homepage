<template>
  <ContentRenderer v-if="content" class="content" :value="content" />
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

<style scoped lang="sass">
.content
  --padding-width: 3rem
  --max-content-width: 60ch

  margin: 0 clamp(0rem, 50dvw, (100% - var(--max-content-width)) / 2)
</style>