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

  background-color: hsla(from var(--background) h s l / 0.8)
  backdrop-filter: blur(10px)
  border: 1px solid hsla(from var(--background) h s l / 0.3)
  box-shadow: 0px 4px 20px var(--background-shadow)


.imprint
  display: flex
  justify-content: space-between

  margin-top: 15rem
  padding: 1rem 2rem

  font-size: 0.7rem

</style>