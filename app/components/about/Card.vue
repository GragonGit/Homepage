<template>
<div class="about-card">
  <div class="selector" role="tablist" aria-label="About me sections">
    <button v-for="section in sections" :id="`tab-${section.key}`" :key="section.key" type="button" role="tab"
      class="selector__item" :class="{ 'selector__item--active': activeKey === section.key }"
      :aria-selected="activeKey === section.key" :aria-controls="`panel-${section.key}`"
      @click="activeKey = section.key">
      <Icon class="selector__icon" :name="section.icon" />
      <span class="selector__label">{{ section.label }}</span>
    </button>
  </div>

  <div class="content-stack">
    <div v-for="section in sections" :id="`panel-${section.key}`" :key="section.key" class="content-panel"
      :class="{ 'content-panel--active': activeKey === section.key }" role="tabpanel"
      :aria-labelledby="`tab-${section.key}`" :aria-hidden="activeKey !== section.key"
      :inert="activeKey !== section.key">
      <AboutTimeline v-if="section.type === 'timeline'" :entries="section.entries ?? []" />
      <AboutText v-else :content="section.content ?? []" />
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
const activeKey = ref(sections[0]!.key)
</script>

<style lang="sass" scoped>
.about-card
  display: flex
  flex-direction: column
  gap: 2rem
  width: 100%

// --- Tab selector ---
.selector
  display: flex
  gap: 1rem
  flex-wrap: wrap

.selector__item
  flex: 1 1 160px
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  gap: 0.6rem
  padding: 1.1rem 1rem
  background: var(--primary)
  color: var(--secondary)
  border: var(--border-s) solid var(--secondary)
  border-radius: 0
  cursor: pointer
  font: inherit

  &:hover, &:focus-visible
    box-shadow: 4px 4px 0px 0px var(--secondary)
    transform: translate(-4px, -4px)

  &:active
    transform: translateY(1px)
    box-shadow: none

  &--active
    background: var(--accent)
    color: var(--white)
    border-color: var(--secondary)

    .selector__icon
      color: var(--white)

.selector__icon
  width: 2rem
  height: 2rem
  color: var(--secondary)
  display: flex

  svg
    width: 100%
    height: 100%

.selector__label
  font-weight: 800
  font-size: 0.85rem
  letter-spacing: 0.04em
  text-transform: uppercase
  text-align: center

// --- Content stack ---
.content-stack
  display: grid
  margin-bottom: 3rem

.content-panel
  grid-area: 1 / 1
  visibility: hidden
  opacity: 0
  transform: translateY(8px)
  // transition: opacity 0.10s ease, transform 0.3s ease, visibility 0s linear 0.3s

  &--active
    visibility: visible
    opacity: 1
    transform: translateY(0)
    // transition: opacity 0.2s ease, transform 0.3s ease, visibility 0s linear 0s

  @media (prefers-reduced-motion: reduce)
    transition: none
    transform: none
</style>