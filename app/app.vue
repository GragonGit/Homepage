<template>
  <main>
    <!-- <SideNav /> -->
    <NuxtPage />
    <footer class="imprint">
      Made by Tristan | {{ new Date().getFullYear() }}
      <a href="https://gragongit.github.io/Alles-nach-hier/">Imprint</a>
    </footer>
  </main>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'light'
  }
})
</script>

<style scoped lang="sass">
main
  // TODO Add Scrollbar
  overflow-y: scroll
  scrollbar-width: none

  height: 90dvh
  margin: 5dvh

  border-radius: 2rem

  background-color: var(--background)
  box-shadow: 0px 0px 8px 0px var(--background)

.imprint
  display: flex
  justify-content: space-between

  margin-top: 15rem
  padding: 1rem 2rem

  font-size: 0.7rem

</style>