<template>
<section id="skills">
  <div class="content">
    <h2>Skills</h2>
    <div v-for="group in skillGroupsFeatured" :key="group.name" class="skillGroup">
      <h3>{{ group.name }}</h3>
      <div class="skills">
        <SkillCard v-for="skill in group.skills" v-bind="skill" :key="skill.label"/>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
section
  --primary: var(--theme-red)
  --secondary: var(--theme-white)
  --accent: var(--theme-black)

  min-height: 100lvh
  
  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

.skillGroup
  margin-bottom: 5rem

h3
  margin-block: 2rem

.skills
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr))
  gap: 1.5rem
</style>