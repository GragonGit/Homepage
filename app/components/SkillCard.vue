<template>
<NuxtLink :to="url" class="skill-card" :style="badgeStyle">
  <div class="skill-card__icon">
    <Icon :name="icon" />
  </div>

  <div class="skill-card__content">
    <h4 class="skill-card__label">{{ label }}</h4>
    <span class="skill-card__experience">{{ subLabel }}</span>
  </div>
</NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  label: string
  url: string
  icon: string
  subLabel: string
  badge?: string
}>()

const badgeStyle = computed(() =>
  props.badge ? { '--badgeContent': `"${props.badge}"` } : undefined
)
</script>

<style lang="sass" scoped>
.skill-card
  position: relative

  display: flex
  align-items: center

  padding: 1rem 1.25rem

  background-color: var(--secondary)

  border: solid var(--border-s) var(--accent)

  text-decoration: none
  color: var(--accent)
  
  cursor: pointer

  &:hover, &:focus-visible
    transform: translate(-4px, -4px)
    box-shadow: 4px 4px 0px 0px var(--accent)
    text-shadow: none

  &__icon
    display: flex
    align-items: center
    justify-content: center

    margin-right: 2rem

    font-size: 4rem

  &__content
    display: flex
    flex-direction: column

  &__label
    font-size: 2rem
    line-height: 1.2
    margin-block: 0.25rem

    display: flex;
    align-items: center;

    &::after
      content: var(--badgeContent)

      margin-left: 0.5rem
      padding: 0em 0.25em

      font-size: 1rem

      border: solid 2px var(--accent)
      color: var(--accent)

  &__experience
    font-size: 1.2rem
    color: var(--accent)
</style>