export interface SkillCard {
  label: string
  url: string
  icon: string
  subLabel: string
  badge?: string
}

interface Skill {
  label: string
  url: string
  icon: string
  experienceYears: number
  badge?: string
}

export interface SkillGroup {
  name: string
  skills: SkillCard[]
}

// ── Web Development ──────────────────────────────
export const angular: Skill = { label: "Angular", url: "", icon: "devicon:angular", experienceYears: 2 }
export const nuxt: Skill = { label: "Nuxt", url: "", icon: "devicon:nuxt", experienceYears: 2 }
export const vue: Skill = { label: "Vue", url: "", icon: "devicon:vuejs", experienceYears: 2 }

// ── Cloud ────────────────────────────────────────
export const googleCloud: SkillCard = { label: "Google Cloud", url: "", icon: "devicon:googlecloud", subLabel: 'Associate Cloud Engineer', badge: 'Certified' }
export const terraform: Skill = { label: "Terraform", url: "", icon: "devicon:terraform", experienceYears: 1 }

// ── Game Development ──────────────────────────────
export const aseprite: Skill = { label: "Aseprite", url: "", icon: "vscode-icons:file-type-aseprite", experienceYears: 2 }
export const blender: Skill = { label: "Blender", url: "", icon: "devicon:blender", experienceYears: 2 }
export const fabric: Skill = { label: "Fabric", url: "", icon: "material-icon-theme:minecraft-fabric", experienceYears: 2 }
export const godot: Skill = { label: "Godot", url: "", icon: "devicon:godot", experienceYears: 1 }
export const gradle: Skill = { label: "Gradle", url: "", icon: "devicon:gradle", experienceYears: 2 }
export const unity: Skill = { label: "Unity", url: "", icon: "devicon:unity", experienceYears: 3 }

// ── Programming Languages ─────────────────────────
export const csharp: Skill = { label: "C#", url: "", icon: "devicon:csharp", experienceYears: 3 }
export const css: Skill = { label: "CSS", url: "", icon: "devicon:css3", experienceYears: 4 }
export const html: Skill = { label: "HTML", url: "", icon: "devicon:html5", experienceYears: 4 }
export const java: Skill = { label: "Java", url: "", icon: "devicon:java", experienceYears: 5 }
export const postgresql: Skill = { label: "PostgreSQL", url: "", icon: "devicon:postgresql", experienceYears: 2 }
export const sass: Skill = { label: "SASS", url: "", icon: "devicon:sass", experienceYears: 2 }
export const tailwind: Skill = { label: "TailwindCSS", url: "", icon: "devicon:tailwindcss", experienceYears: 3 }
export const typescript: Skill = { label: "TypeScript", url: "", icon: "devicon:typescript", experienceYears: 4 }

// ── Tools ──────────────────────────────────────────
export const docker: Skill = { label: "Docker", url: "", icon: "devicon:docker", experienceYears: 3 }
export const figma: Skill = { label: "Figma", url: "", icon: "devicon:figma", experienceYears: 1 }
export const git: Skill = { label: "Git", url: "", icon: "devicon:git", experienceYears: 5 }
export const ghActions: Skill = { label: "GH Actions", url: "", icon: "devicon:githubactions", experienceYears: 3 }
export const markdown: Skill = { label: "Markdown", url: "", icon: "devicon:markdown", experienceYears: 3 }
export const obsidian: Skill = { label: "Obsidian", url: "", icon: "skill-icons:obsidian-light", experienceYears: 2 }
export const postman: Skill = { label: "Postman", url: "", icon: "devicon:postman", experienceYears: 1 }
export const vscode: Skill = { label: "VSCode", url: "", icon: "devicon:vscode", experienceYears: 6 }

// ── Languages ──────────────────────────────────────
export const german: SkillCard = { label: "German", url: "", icon: "openmoji:flag-germany", subLabel: 'Native' }
export const english: SkillCard = { label: "English", url: "", icon: "openmoji:flag-england", subLabel: 'C1' }


export const moreSkills: SkillCard = { label: "More Skills", url: "", icon: "mdi:arrow-right-circle", subLabel: 'Click Here' }

// ── Featured skills (home page) ───────────────────
export const skillGroupsFeatured: SkillGroup[] = [
  { name: "Web Development", skills: [nuxt, vue, angular].map(toSkillCard) },
  { name: "Game Development", skills: [unity, godot, blender].map(toSkillCard) },
  { name: "Additional Skills", skills: [java, git].map(toSkillCard).concat(googleCloud) },
]

// ── Full skill list (dedicated /skills page) ──────
// export const skillGroupsFull: SkillGroup[] = [
//   { name: "Programming Languages", skills: [] },
//   { name: "Web Development", skills: [] },
//   { name: "Tools", skills: [] },
//   { name: "Game Development", skills: [] },
// ]

function formatExperience(years: number): string {
  return `Experience: ${years} Year${years === 1 ? '' : 's'}`
}

function toSkillCard(skill: Skill): SkillCard {
  return {
    label: skill.label,
    url: skill.url,
    icon: skill.icon,
    subLabel: formatExperience(skill.experienceYears),
    badge: skill.badge
  }
}
