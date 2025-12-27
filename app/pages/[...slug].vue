<template>
  <ContentRenderer v-if="content" class="content" :value="content" />
</template>

<script setup lang="ts">
const slug = useRoute().params.slug
const { data: content } = await useAsyncData(() => queryCollection('content').path(`/${slug}`).first())
useTitle().value = content.value?.title ?? 'Page not found'
</script>

<style scoped lang="sass">
.content
  --padding-width: 3rem
  --max-content-width: 60ch

  margin: 0 clamp(0rem, 50dvw, (100% - var(--max-content-width)) / 2)
</style>