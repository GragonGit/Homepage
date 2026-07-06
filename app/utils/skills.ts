export interface SkillCard {
  label: string
  url: string
  icon: string
  experienceYears: number
}

export interface SkillGroup {
  name: string
  skills: SkillCard[]
}

// ── Web Development ──────────────────────────────
export const angular: SkillCard = { label: "Angular", url: "asd", icon: "devicon:angular", experienceYears: 2 }
export const nuxt: SkillCard = { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experienceYears: 2 }
export const vue: SkillCard = { label: "Vue", url: "asd", icon: "devicon:vuejs", experienceYears: 2 }

// ── Game Development ──────────────────────────────
export const aseprite: SkillCard = { label: "Aseprite", url: "asd", icon: "vscode-icons:file-type-aseprite", experienceYears: 2 }
export const blender: SkillCard = { label: "Blender", url: "asd", icon: "devicon:blender", experienceYears: 2 }
export const fabric: SkillCard = { label: "Fabric", url: "asd", icon: "material-icon-theme:minecraft-fabric", experienceYears: 2 }
export const godot: SkillCard = { label: "Godot", url: "asd", icon: "devicon:godot", experienceYears: 1 }
export const gradle: SkillCard = { label: "Gradle", url: "asd", icon: "devicon:gradle", experienceYears: 2 }
export const unity: SkillCard = { label: "Unity", url: "asd", icon: "devicon:unity", experienceYears: 3 }

// ── Programming Languages ─────────────────────────
export const csharp: SkillCard = { label: "C#", url: "asd", icon: "devicon:csharp", experienceYears: 3 }
export const css: SkillCard = { label: "CSS", url: "asd", icon: "devicon:css3", experienceYears: 4 }
export const html: SkillCard = { label: "HTML", url: "asd", icon: "devicon:html5", experienceYears: 4 }
export const java: SkillCard = { label: "Java", url: "asd", icon: "devicon:java", experienceYears: 5 }
export const postgresql: SkillCard = { label: "PostgreSQL", url: "asd", icon: "devicon:postgresql", experienceYears: 2 }
export const sass: SkillCard = { label: "SASS", url: "asd", icon: "devicon:sass", experienceYears: 2 }
export const tailwind: SkillCard = { label: "TailwindCSS", url: "asd", icon: "devicon:tailwindcss", experienceYears: 3 }
export const typescript: SkillCard = { label: "TypeScript", url: "asd", icon: "devicon:typescript", experienceYears: 4 }

// ── Tools ──────────────────────────────────────────
export const docker: SkillCard = { label: "Docker", url: "asd", icon: "devicon:docker", experienceYears: 3 }
export const figma: SkillCard = { label: "Figma", url: "asd", icon: "devicon:figma", experienceYears: 1 }
export const git: SkillCard = { label: "Git", url: "asd", icon: "devicon:git", experienceYears: 5 }
export const ghActions: SkillCard = { label: "GH Actions", url: "asd", icon: "devicon:githubactions", experienceYears: 3 }
export const markdown: SkillCard = { label: "Markdown", url: "asd", icon: "devicon:markdown", experienceYears: 3 }
export const obsidian: SkillCard = { label: "Obsidian", url: "asd", icon: "skill-icons:obsidian-light", experienceYears: 2 }
export const postman: SkillCard = { label: "Postman", url: "asd", icon: "devicon:postman", experienceYears: 1 }
export const vscode: SkillCard = { label: "VSCode", url: "asd", icon: "devicon:vscode", experienceYears: 6 }

export const moreSkills: SkillCard = { label: "More Skills", url: "asd", icon: "mdi:arrow-right-circle", experienceYears: -1 }

// ── Featured skills (home page) ───────────────────
export const skillGroupsFeatured: SkillGroup[] = [
  { name: "Web Development", skills: [vue, nuxt, angular, typescript] },
  { name: "Game Development", skills: [unity, godot, blender] },
  { name: "Additional Skills", skills: [java, csharp, git, moreSkills] },
]

// ── Full skill list (dedicated /skills page) ──────
export const skillGroupsFull: SkillGroup[] = [
  { name: "Programming Languages", skills: [html, css, tailwind, sass, typescript, java, csharp, postgresql] },
  { name: "Web Development", skills: [vue, nuxt, angular] },
  { name: "Tools", skills: [vscode, git, markdown, docker, ghActions, obsidian, figma, postman] },
  { name: "Game Development", skills: [unity, godot, fabric, gradle, blender, aseprite] },
]
