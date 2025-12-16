<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/home').first())
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
</template>
