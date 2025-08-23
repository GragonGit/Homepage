<template>
  <div>
    <NavBar :nav-items="navItems" />
    <section>
      <HomeHero />
    </section>
    <section>
      <HomeGames />
    </section>
    <section>
      <HomeProjects />
    </section>
    <section>
      <HomeAbout />
    </section>
    <section>
      <HomeBlog />
    </section>
  </div>
</template>

<script lang="ts" setup>
const navItems = ref([
  { text: "Home", to: "/" },
  { text: "Projects", to: "/#Projects" },
  { text: "Games", to: "/#Games" },
  { text: "About", to: "/#About" },
  { text: "Blog", to: "/#Blog" },
])
</script>

<style lang="sass" scoped>

</style>