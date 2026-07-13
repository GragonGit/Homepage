<template>
<div class="timeline">
  <article v-for="entry in entries" :key="entry.title" class="entry">
    <h3 class="entry__org">{{ entry.title }}</h3>

    <div v-for="(item, i) in entry.items" :key="i" class="entry__item">
      <div class="entry__row">
        <div class="entry__role-wrap">
          <span class="entry__role">{{ item.role }}</span>
          <span v-if="item.type" class="entry__type">{{ item.type }}</span>
        </div>
        <span class="entry__date">{{ item.date }}</span>
      </div>

      <ul v-if="item.bullets && item.bullets.length" class="entry__bullets">
        <li v-for="(bullet, bi) in item.bullets" :key="bi">
          <span>{{ bullet.text }}</span>
          <NuxtLink v-if="bullet.link && !bullet.comingSoon" :to="bullet.link" class="entry__link">{{ bullet.linkLabel
          }}</NuxtLink>
          <span v-else-if="bullet.link && bullet.comingSoon" class="entry__link entry__link--soon" aria-disabled="true">
            {{ bullet.linkLabel }}
            <em class="entry__badge">Soon</em>
          </span>
        </li>
      </ul>
    </div>
  </article>
</div>
</template>

<script lang="ts" setup>
defineProps<{
  entries: TimelineEntry[]
}>()
</script>

<style lang="sass" scoped>
.timeline
  display: flex
  flex-direction: column
  gap: 1.75rem

.entry
  border-left: var(--border-s) solid var(--secondary)
  padding-left: 1.5rem

.entry__org
  margin: 0 0 0.9rem
  font-size: 1.15rem
  letter-spacing: 0.01em
  text-transform: uppercase

.entry__item
  & + .entry__item
    margin-top: 1.1rem
    padding-top: 1.1rem
    border-top: 1px dashed color-mix(in srgb, var(--secondary) 30%, transparent)

.entry__row
  display: flex
  flex-wrap: wrap
  align-items: baseline
  justify-content: space-between
  gap: 0.4rem 1rem

.entry__role-wrap
  display: flex
  flex-wrap: wrap
  align-items: baseline
  gap: 0 0.6rem

.entry__role
  font-weight: 600
  font-size: 1rem

.entry__type
  font-size: 0.85rem
  font-style: italic

.entry__date
  flex: 0 0 auto
  font-size: 0.78rem
  font-weight: 700
  letter-spacing: 0.04em
  text-transform: uppercase
  color: var(--accent)
  white-space: nowrap

.entry__bullets
  list-style: none
  margin: 0.6rem 0 0
  padding: 0
  display: flex
  flex-direction: column
  gap: 0.3rem

  li
    position: relative
    padding-left: 1rem
    font-size: 0.9rem

    &::before
      content: ''
      position: absolute
      left: 0
      top: 0.45em
      width: 0.4rem
      height: 0.4rem
      background: var(--accent)

.entry__link
  margin-left: 0.5rem
  font-weight: 700
  text-decoration: underline
  text-underline-offset: 2px
  color: var(--secondary)

  &:hover
    color: var(--accent)

  &--soon
    color: color-mix(in srgb, var(--secondary) 45%, transparent)
    text-decoration-style: dashed
    cursor: default
    pointer-events: none

.entry__badge
  margin-left: 0.4rem
  padding: 0.05rem 0.4rem
  font-style: normal
  font-size: 0.65rem
  font-weight: 800
  letter-spacing: 0.05em
  text-transform: uppercase
  text-decoration: none
  border: var(--border-xs) solid var(--secondary)
  color: var(--secondary)

@media (max-width: 640px)
  .entry__row
    flex-direction: column
    align-items: flex-start
</style>