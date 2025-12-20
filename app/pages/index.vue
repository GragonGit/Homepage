<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/home').first())
</script>

<template>
  <ContentRenderer v-if="home" class="content" :value="home" />
</template>

<style scoped lang="sass">
.content
  --padding-width: 3rem
  --max-content-width: 60ch

  margin: 0 clamp(0rem, 50dvw, (100% - var(--max-content-width)) / 2)
</style>