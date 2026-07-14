<template>
<section id="skills">
  <div class="content">
    <h2>Skills</h2>
    <div v-for="group in skillGroupsFull" :key="group.name" class="skillGroup">
      <h3>{{ group.name }}</h3>
      <div class="skills">
        <SkillsCard v-for="skill in group.skills" v-bind="skill" :key="skill.label" />
      </div>
    </div>
    <SkillsCard class="goBack" v-bind="goBack" :same-tab="true" />
  </div>
</section>
</template>

<style lang="sass" scoped>
section
  --primary: var(--theme-red)
  --secondary: var(--theme-white)
  --accent: var(--theme-black)

  min-height: 100lvh

  border-color: var(--secondary)
  
  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: center

.skillGroup
  margin-bottom: clamp(2.5rem, 8vw, 5rem)

h3
  margin-block: clamp(1rem, 4vw, 2rem)

.skills
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr))
  gap: 1.5rem

.goBack
  margin-bottom: clamp(2.5rem, 8vw, 5rem)
</style>