<template>
<section id="contact">
  <div class="content">
    <h2>Contact</h2>
    <p><b>I'd love to hear from you!</b></p>
    <p>Just reach out to <a href="mailto:test">example@mail.com</a>.</p>
    <p>Or hit me up on my socials:</p>
    <div class="socials">
      <AppCard v-for="link in contactNavigation" :key="link.label" v-bind="link" />
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>

</script>

<style lang="sass" scoped>
section
  display: flex
  flex-direction: column
  align-items: stretch

.content
  max-width: 60rem

b
  font-size: 1.2em

.socials
  margin-block: clamp(1.5rem, 3vw, 2rem) clamp(2rem, 10vw, 4rem)
  padding: 0

  display: grid
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 10rem))
  gap: clamp(1rem, 4vw, 1.5rem)
</style>