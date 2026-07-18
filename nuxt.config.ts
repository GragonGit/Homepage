// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
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