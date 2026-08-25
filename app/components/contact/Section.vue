<template>
<section id="contact">
  <div class="content">
    <h2>Contact</h2>
    <div class="contact">
      <div class="information">
        <p><b>I'd love to hear from you!</b></p>
        <p>Just reach out to <a :href="'mailto:' + config.public.contactEmail">{{ config.public.contactEmail }}</a>.</p>
        <p>Or hit me up on my socials:</p>
        <div class="socials">
          <AppCard v-for="link in contactNavigation" :key="link.label" v-bind="link" />
        </div>
      </div>
      <NuxtImg :src="resolvedSrc" alt="Website Link QR Code" loading="lazy" />
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const contactNavigation = useContactNavigation()

const resolvedSrc = computed(() => useAsset("/images/contact/website_qr.svg"))
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

.contact
  display: grid
  grid-template-columns: 2fr 1fr
  justify-items: center
  align-items: flex-end

  @media (max-width: 640px)
    grid-template-columns: 1fr

.information
  width: 100%

.socials
  margin-block: clamp(1.5rem, 3vw, 2rem) clamp(2rem, 10vw, 4rem)
  padding: 0

  display: grid
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 100%), 10rem))
  gap: clamp(1rem, 4vw, 1.5rem)

img
  display: block

  justify-self: flex-start

  max-width: 360px
  width: 100%

  margin-bottom: clamp(2rem, 10vw, 4rem);
</style>