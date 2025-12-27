<script setup lang="ts">
const { data: content } = await useAsyncData(() => queryCollection('content').path('/home').first())
useTitle().value = content.value!.title
</script>

<template>
  <ContentRenderer v-if="content" class="content" :value="content" />
</template>

<style scoped lang="sass">
.content
  --padding-width: 3rem
  --max-content-width: 60ch

  margin: 0 clamp(0rem, 50dvw, (100% - var(--max-content-width)) / 2)
</style>