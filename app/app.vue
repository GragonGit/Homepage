<template>
  <main>
    <NuxtPage />
  </main>
</template>

<style scoped lang="sass">
main
  padding: 1rem

  > *
    padding: 1rem

    border-radius: 1rem
    corner-shape: round

    background-color: var(--background)

  &::before
    content: '' 
    position: fixed
    inset: -10px
    
    border: 30px solid var(--root-bg)
    border-radius: 3rem
    
    z-index: 9999
    pointer-events: none
</style>