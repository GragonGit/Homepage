<template>
  <div class="menu">
    <button class="menuButton">
      <Icon name="material-symbols:menu" />
    </button>
    <!-- TODO Set to page title -->
    <p> Homepage </p>
    <button class="themeButton" @click="toggleTheme">
      <Icon :name="theme === 'light'
        ? 'material-symbols:dark-mode-outline-rounded'
        : 'material-symbols:light-mode-outline-rounded'" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const { theme, toggleTheme } = useTheme()

useHead({
  bodyAttrs: {
    class: theme
  }
})
</script>

<style scoped lang="sass">
.menu
  display: flex
  justify-content: space-between
  align-items: center


button
  border: none
  background-color: hsla(from var(--background) h s l / 0)
  backdrop-filter: blur(20px)
  
  display: flex
  align-items: center

  aspect-ratio: 1
  border-radius: 100%

  transition: var(--default-transition)
  transition-property: background-color

  &:hover,
  &:focus-visible
    background-color: hsla(from var(--background) h s l / 0.2)

  & > span
    background-color: var(--text)
    font-size: 1.25rem

    transition: var(--default-transition)
    transition-property: background-color

</style>