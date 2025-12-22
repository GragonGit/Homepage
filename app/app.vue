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

// Border
.layout::before
    content: ''
    position: fixed
    
    inset: -30px
    border: 50px solid transparent
    border-radius: 5rem

    background: linear-gradient(to bottom, var(--accent-gradient)) border-box
    background-size: 100% 200%

    animation: lava-lamp 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate

    // This masks out the center area defined by the padding-box
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)
    -webkit-mask-composite: destination-out
    mask-composite: exclude
    
    z-index: 9999
    pointer-events: none

// Blur
.layout::after
    content: ''
    position: fixed
    
    inset: -30px
    border: 50px solid transparent
    border-radius: 5rem

    background: linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(to bottom, var(--accent-gradient)) border-box
    background-size: 100% 200%

    filter: blur(1rem)
    animation: lava-lamp 12s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite alternate
    opacity: 25%

    z-index: -9999
    pointer-events: none

@keyframes lava-lamp
  0%
    background-position: 0% 0%
  100%
    background-position: 0% 100%

.imprint
  display: flex
  justify-content: space-between

  margin: 15rem 1rem 0.5rem 1rem

  font-size: 0.7rem

</style>