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

  <Transition name="panel-swap" mode="out-in">
    <div :id="`panel-${activeSection.key}`" :key="activeSection.key" class="content-panel" role="tabpanel"
      :aria-labelledby="`tab-${activeSection.key}`">
      <AboutTimeline v-if="activeSection.type === 'timeline'" :entries="activeSection.entries ?? []" />
      <AboutText v-else :content="activeSection.content ?? []" />
    </div>
  </Transition>
</div>
</template>

<script lang="ts" setup>
const activeKey = ref(sections[0]!.key)
const activeSection = computed(
  () => sections.find((s) => s.key === activeKey.value) ?? sections[0]!
)
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

  &:hover
    box-shadow: 4px 4px 0px 0px var(--secondary)
    transform: translate(-4px, -4px)

  &:active
    transform: translateY(1px)
    box-shadow: none

  &:focus-visible
    outline: var(--border-xs) solid var(--accent)
    outline-offset: 3px

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

// --- Content panel ---
.content-panel
  min-height: 12rem

// --- Panel transition ---
.panel-swap-enter-active,
.panel-swap-leave-active
  transition: opacity 0.18s ease, transform 0.18s ease

.panel-swap-enter-from
  opacity: 0
  transform: translateY(6px)

.panel-swap-leave-to
  opacity: 0
  transform: translateY(-6px)

@media (prefers-reduced-motion: reduce)
  .panel-swap-enter-active,
  .panel-swap-leave-active
    transition: none
</style>