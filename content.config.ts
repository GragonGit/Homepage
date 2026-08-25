import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        // Short tag shown above the title on the project page,
        // e.g. "Game Development" or "Minecraft Mod"
        category: z.string().optional(),

        // Used as the homepage card image and the detail page hero image
        cover: z.string(),
        coverAlt: z.string().optional(),

        // Optional extra screenshots shown in a gallery on the detail page
        gallery: z.array(z.object({
          src: z.string(),
          alt: z.string().optional()
        })).optional(),

        year: z.string().optional(),
        role: z.string().optional(),

        // Tech badges on the detail page, rendered with the existing
        // Card component. `url` is optional and can point at the
        // technology's site - it falls back to a no-op link if omitted.
        stack: z.array(z.object({
          label: z.string(),
          icon: z.string().optional(),
          url: z.string().optional()
        })).optional(),

        // Call-to-action buttons on the detail page hero
        // (live demo, source code, itch.io page, ...)
        links: z.array(z.object({
          label: z.string(),
          url: z.string(),
          icon: z.string().optional(),
          primary: z.boolean().optional()
        })).optional(),

        // Whether the project should show up in the homepage grid
        featured: z.boolean().default(false),

        // Manual sort order, used for the homepage grid and for the
        // "previous / next project" navigation on the detail page
        order: z.number().default(0)
      })
    })
  }
})