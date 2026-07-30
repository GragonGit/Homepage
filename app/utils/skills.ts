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
export const angular: Skill = { label: "Angular", url: "https://angular.dev", icon: "devicon:angular", experienceYears: 2 }
export const nuxt: Skill = { label: "Nuxt", url: "https://nuxt.com", icon: "devicon:nuxt", experienceYears: 2 }
export const vue: Skill = { label: "Vue", url: "https://vuejs.org", icon: "devicon:vuejs", experienceYears: 2 }

// ── Cloud ────────────────────────────────────────
export const googleCloud: SkillCard = { label: "Google Cloud", url: "https://cloud.google.com", icon: "devicon:googlecloud", subLabel: 'Associate Cloud Engineer', badge: 'Certified' }
export const terraform: Skill = { label: "Terraform", url: "https://www.terraform.io", icon: "devicon:terraform", experienceYears: 1 }

// ── Game Development ──────────────────────────────
export const aseprite: Skill = { label: "Aseprite", url: "https://www.aseprite.org", icon: "vscode-icons:file-type-aseprite", experienceYears: 2 }
export const blender: Skill = { label: "Blender", url: "https://www.blender.org", icon: "devicon:blender", experienceYears: 2 }
export const fabric: Skill = { label: "Fabric", url: "https://fabricmc.net", icon: "material-icon-theme:minecraft-fabric", experienceYears: 2 }
export const godot: Skill = { label: "Godot", url: "https://godotengine.org", icon: "devicon:godot", experienceYears: 1 }
export const gradle: Skill = { label: "Gradle", url: "https://gradle.org", icon: "devicon:gradle", experienceYears: 2 }
export const unity: Skill = { label: "Unity", url: "https://unity.com", icon: "devicon:unity", experienceYears: 3 }

// ── Programming Languages ─────────────────────────
export const cpp: Skill = { label: "C++", url: "https://de.wikipedia.org/wiki/C%2B%2B", icon: "devicon:cplusplus", experienceYears: 1 }
export const csharp: Skill = { label: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/", icon: "devicon:csharp", experienceYears: 3 }
export const css: Skill = { label: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: "devicon:css3", experienceYears: 4 }
export const html: Skill = { label: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "devicon:html5", experienceYears: 4 }
export const java: Skill = { label: "Java", url: "https://www.java.com", icon: "devicon:java", experienceYears: 5 }
export const postgresql: Skill = { label: "PostgreSQL", url: "https://www.postgresql.org", icon: "devicon:postgresql", experienceYears: 2 }
export const python: Skill = { label: "Python", url: "https://www.python.org", icon: "devicon:python", experienceYears: 1 }
export const sass: Skill = { label: "SASS", url: "https://sass-lang.com", icon: "devicon:sass", experienceYears: 2 }
export const tailwind: Skill = { label: "TailwindCSS", url: "https://tailwindcss.com", icon: "devicon:tailwindcss", experienceYears: 3 }
export const typescript: Skill = { label: "TypeScript", url: "https://www.typescriptlang.org", icon: "devicon:typescript", experienceYears: 4 }
export const javascript: Skill = { label: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "devicon:javascript", experienceYears: 4 }

// ── Tools ──────────────────────────────────────────
export const arduino: Skill = { label: "Arduino", url: "https://www.arduino.cc", icon: "devicon:arduino", experienceYears: 1 }
export const docker: Skill = { label: "Docker", url: "https://www.docker.com", icon: "devicon:docker", experienceYears: 3 }
export const figma: Skill = { label: "Figma", url: "https://www.figma.com", icon: "devicon:figma", experienceYears: 1 }
export const git: Skill = { label: "Git", url: "https://git-scm.com", icon: "devicon:git", experienceYears: 5 }
export const ghActions: Skill = { label: "GH Actions", url: "https://github.com/features/actions", icon: "devicon:githubactions", experienceYears: 3 }
export const markdown: Skill = { label: "Markdown", url: "https://en.wikipedia.org/wiki/Markdown", icon: "devicon:markdown", experienceYears: 3 }
export const obsidian: Skill = { label: "Obsidian", url: "https://obsidian.md", icon: "skill-icons:obsidian-light", experienceYears: 2 }
export const postman: Skill = { label: "Postman", url: "https://www.postman.com", icon: "devicon:postman", experienceYears: 1 }
export const vscode: Skill = { label: "VSCode", url: "https://code.visualstudio.com", icon: "devicon:vscode", experienceYears: 6 }

// ── Languages ──────────────────────────────────────
export const german: SkillCard = { label: "German", url: "https://en.wikipedia.org/wiki/German_language", icon: "openmoji:flag-germany", subLabel: 'Native' }
export const english: SkillCard = { label: "English", url: "https://en.wikipedia.org/wiki/English_language", icon: "openmoji:flag-united-kingdom", subLabel: 'C1', badge: 'Certified' }


// ── Navigation ──────────────────────────────────────
export const moreSkills: SkillCard = { label: "More Skills", url: "/skills", icon: "mdi:arrow-right-circle", subLabel: 'Click Here' }
export const goBack: SkillCard = { label: "Go Back", url: "/", icon: "mdi:arrow-left-circle", subLabel: 'Click Here' }

// ── Featured skills (home page) ───────────────────
export const skillGroupsFeatured: SkillGroup[] = [
  { name: "Frameworks", skills: [nuxt, vue, angular].map(toSkillCard) },
  { name: "Code", skills: [html, typescript, javascript, sass, tailwind].map(toSkillCard) },
  { name: "Additional Skills", skills: [java, git].map(toSkillCard).concat(googleCloud) },
  { name: "Languages", skills: [german, english] },
]

// ── Full skill list ──────
export const skillGroupsFull: SkillGroup[] = [
  {
    name: "Programming Languages", skills: [
      typescript,
      javascript,
      java,
      csharp,
      python,
      cpp,
      postgresql,
    ].map(toSkillCard)
  },
  {
    name: "Web Development", skills: [
      vue,
      nuxt,
      angular,
      tailwind,
      css,
      sass,
      html,
    ].map(toSkillCard)
  },
  {
    name: "Tools", skills: [
      git,
      docker,
      ghActions,
      postman,
      vscode,
      figma,
      markdown,
      obsidian,
      arduino,
    ].map(toSkillCard)
  },
  {
    name: "Cloud", skills: [
      terraform,
    ].map(toSkillCard).concat(googleCloud)
  },
  {
    name: "Game Development", skills: [
      unity,
      godot,
      blender,
      aseprite,
      fabric,
      gradle,
    ].map(toSkillCard)
  },
  {
    name: "Languages", skills: [
      german,
      english,
    ]
  },
]


// ── Utils ──────
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
