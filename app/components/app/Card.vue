<template>
<div class="card" :style="borderWithStyle">
  <Icon :name="icon ?? 'material-symbols:cookie'" />
  <NuxtLink :to="url" />
  <span v-if="label !== ''" class="label">{{ label }}</span>
</div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string
  url: string
  icon?: string

  borderWidth?: string
}>()

const borderWithStyle = computed(() => ({
  '--border-width': `var(${props.borderWidth ?? '--border-m'})`
}))
</script>

<style lang="sass" scoped>
.card
  box-sizing: border-box

  position: relative
  aspect-ratio: 1

  border: solid var(--secondary)
  border-width: var(--border-width)

  display: flex
  flex-direction: column
  align-items: center
  justify-content: stretch
  gap: 0.5rem

  padding: clamp(0.1rem, 10%, 1.5rem)

  background-color: var(--primary)

  cursor: pointer

  &:hover, &:focus-within, &:focus-visible
    transform: translate(-4px, -4px)
    box-shadow: 4px 4px 0px 0px var(--secondary)

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

.label
  flex-shrink: 0

  font-size: clamp(1rem, 4vw, 1.5rem)
  font-weight: 600
  text-transform: uppercase

  color: var(--secondary)
</style>