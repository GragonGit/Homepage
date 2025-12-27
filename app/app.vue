<template>
  <div class="app">
    <TopMenu />
    <main>
      <!-- <SideNav /> -->
      <NuxtPage class="content" />
      <footer class="imprint">
        <p>Made by Tristan | {{ new Date().getFullYear() }}</p>
        <a href="https://gragongit.github.io/Alles-nach-hier/">Imprint</a>
      </footer>
    </main>
  </div>
</template>

<style scoped lang="sass">
.app
  display: grid
  align-items: center
  justify-content: center
  justify-items: center

  grid-template-rows: 2fr 90dvh 1fr

  min-height: 100vh


  & > *
    width: 90dvw

main
  // TODO Add Scrollbar
  overflow-y: scroll
  scrollbar-width: none
  height: 100%

  border-radius: 2rem

  background-color: hsla(from var(--background) h s l / 0.8)
  backdrop-filter: blur(20px)
  border: 1px solid hsla(from var(--background) h s l / 0.3)
  box-shadow: 0px 4px 20px var(--background-shadow)

  transition: var(--default-transition)
  transition-property: all

.content
  --padding-width: 3rem
  --max-content-width: 60ch

  margin: 0 clamp(0rem, 50dvw, (100% - var(--max-content-width)) / 2)

.imprint
  display: flex
  justify-content: space-between

  margin-top: 15rem
  padding: 1rem 2rem

  font-size: 0.7rem

</style>