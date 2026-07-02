<template>
<section id="projects">
  <div class="content">
    <h2>Projects</h2>
    <div class="featured-projects">
      <ProjectDisplay v-for="project in featuredProjects" v-bind="project" />
    </div>
  </div>
</section>
</template>

<style lang="sass" scoped>
section
  --primary: var(--theme-black)
  --secondary: var(--theme-white)

  border-bottom-color: var(--secondary)

  min-height: 100lvh

  padding-bottom: 4rem

  display: flex
  flex-direction: column
  align-items: stretch

.featured-projects
  height: 100%
  
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(min(600px, 100%), 1fr))
  gap: 4rem
</style>