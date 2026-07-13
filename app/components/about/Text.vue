<template>
<div class="prose">
  <p v-for="(paragraph, pi) in content" :key="pi">{{ paragraph }}</p>
</div>
</template>

<script lang="ts" setup>
defineProps<{
  content: string[]
}>()
</script>

<style lang="sass" scoped>
.prose
  display: flex
  flex-direction: column
  gap: 1rem
  max-width: 60ch
  font-size: 1rem
  line-height: 1.6
</style>