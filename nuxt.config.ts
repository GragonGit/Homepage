// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/style/main.sass'],
  ssr: false,

  app: {
    head: {
      title: "Homepage",
      htmlAttrs: {
        lang: 'en',
      },
    }
  },

  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content'
  ],

  content: {
    build: {
      markdown: {
        toc: {
          depth: 2
        }
      }
    },
    renderer: {
      anchorLinks: {
        h2: false,
        h3: false,
        h4: false
      }
    }
  }
})