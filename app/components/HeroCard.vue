<template>
<div class="card">
  <Icon :name="icon" />
  <NuxtLink :to="url">{{ label }}</NuxtLink>
  <label>{{ label }}</label>
</div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<style lang="sass" scoped>
.card
  position: relative
  aspect-ratio: 1

  border: solid 8px var(--secondary) 

  display: flex
  flex-direction: column
  align-items: center
  justify-content: stretch
  gap: 0.5rem

  padding: clamp(0.5em, 2vw, 1.5em)

  background-color: var(--primary)

  &:hover, &:focus-within, &:focus-visible
    background-color: var(--secondary)

    .iconify
      color: var(--primary)

    label
      color: var(--primary)

a
  position: absolute
  inset: 0
  font-size: 0

  z-index: 2

.iconify
  width: auto
  height: 0
  flex-grow: 1
  aspect-ratio: 1

  color: var(--secondary)

label
  flex-shrink: 0

  text-transform: uppercase
  color: var(--secondary)
</style>