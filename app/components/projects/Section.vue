<template>
<section id="projects">
  <div class="content">
    <h2>Projects</h2>
    <div class="featured-projects">
      <ProjectsDisplay v-for="project in featuredProjects" v-bind="project" :key="project.description" />
    </div>
    <!-- <NuxtLink to="">Check out all Projects
      <Icon name="material-symbols:arrow-forward" />
    </NuxtLink> -->
  </div>
</section>
</template>

<style lang="sass" scoped>
section
  --primary: var(--theme-black)
  --secondary: var(--theme-white)

  display: flex
  flex-direction: column
  align-items: stretch

.featured-projects
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr))
  align-items: start
  gap: clamp(2rem, 6vw, 4rem)
  margin-bottom: clamp(1.5rem, 5vw, 3rem)

.content
  display: flex
  flex-direction: column
  flex-grow: 1

  padding-bottom: clamp(1.5rem, 5vw, 3rem)

a
  display: flex
  justify-content: center
  align-items: baseline

  margin-block: auto
  gap: 1rem

  text-transform: uppercase
  font-size: clamp(1rem, 6vw, 5rem)

  &::before
    content: ''
    display: block

    height: 1cap
    flex-grow: 1

    background-image: repeating-linear-gradient(45deg, var(--secondary), var(--secondary) 20px, transparent 20px, transparent 40px)

  &:hover, &:focus-visible
    &::before
      background-image: repeating-linear-gradient(45deg, var(--accent), var(--accent) 20px, transparent 20px, transparent 40px)

  & .iconify
    align-self: center
</style>