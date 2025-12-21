<template>
  <main>
    <div class="layout">
      <!-- <SideNav /> -->
      <NuxtPage />
    </div>
    <footer class="imprint">
      Made by Tristan | {{ new Date().getFullYear() }}
      <a href="https://gragongit.github.io/Alles-nach-hier/">Imprint</a>
    </footer>
  </main>
</template>

<style scoped lang="sass">
main
  padding: 2rem

.layout::before
    content: ''
    position: fixed
    
    inset: -30px
    border: 50px solid transparent
    border-radius: 5rem

    background: linear-gradient(to bottom, var(--accent-gradient)) border-box
    /* This masks out the center area defined by the padding-box */
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)
    -webkit-mask-composite: destination-out
    mask-composite: exclude
    
    z-index: 9999
    pointer-events: none

.imprint
  display: flex
  justify-content: space-between

  margin: 15rem 1rem 0.5rem 1rem

  font-size: 0.7rem

</style>