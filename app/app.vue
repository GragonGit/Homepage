<template>
  <main>
    <div class="layout">
      <!-- <SideNav /> -->
      <NuxtPage />
    </div>
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
    border-radius: 4rem

    background: linear-gradient(to bottom, var(--accent-gradient)) border-box
    /* This masks out the center area defined by the padding-box */
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)
    -webkit-mask-composite: destination-out
    mask-composite: exclude
    
    z-index: 9999
    pointer-events: none

</style>