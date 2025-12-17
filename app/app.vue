<template>
  <main>
    <div class="layout">
      <SideNav />
      <NuxtPage />
    </div>
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
    
    border: 30px solid var(--accent)
    border-radius: 3rem
    
    z-index: 9999
    pointer-events: none

.layout
  --min-sidebar-width: 10rem
  --max-sidebar-width: 15rem
  --grid-gap: 2rem

  display: grid
  grid-template-columns: minmax(var(--min-sidebar-width), var(--max-sidebar-width)) 1fr
  gap: clamp(0dvw, 2dvw, var(--grid-gap))

  @media (max-width: 600px)
    grid-template-columns: 1fr
    gap: 0
  
  > :last-child
    justify-self: center
    width: clamp(0ch, 100%, 70ch)
</style>