// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-08-25',
  devtools: { enabled: true },
  css: ['~/assets/style/main.sass'],
  ssr: false,

  app: {
    head: {
      title: "Homepage",
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'favicon.ico' },
      ]
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

  runtimeConfig: {
    public: {
      contactEmail: '',
      linkedinUrl: ''
    }
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/content'
  ],

  image: {
    provider: 'none'
  },

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