export interface SkillCard {
  label: string
  url: string
  icon: string
  experience: string
}

export interface SkillGroup {
  name: string
  skills: SkillCard[]
}

export const skillsFrontend: SkillCard[] = [
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "1.5 Years" },
  { label: "Vue", url: "asd", icon: "devicon:vuejs", experience: "1.5 Years" },
  { label: "Angular", url: "asd", icon: "devicon:angular", experience: "2 Years" },
  { label: "TailwindCSS", url: "asd", icon: "devicon:tailwindcss", experience: "2 Years" },
]

export const skillsGames: SkillCard[] = [
  { label: "Unity", url: "asd", icon: "devicon:unity", experience: "3 Years" },
  { label: "Godot", url: "asd", icon: "devicon:godot", experience: "1 Year" },
  { label: "Fabric", url: "asd", icon: "material-icon-theme:minecraft-fabric", experience: "2 Year" },
  { label: "Gradle", url: "asd", icon: "devicon:gradle", experience: "2 Year" },
]

export const skillsLanguages: SkillCard[] = [
  { label: "HTML", url: "asd", icon: "devicon:html5", experience: "4 Years" },
  { label: "TypeScript", url: "asd", icon: "devicon:typescript", experience: "4 Years" },
  { label: "JavaScript", url: "asd", icon: "devicon:javascript", experience: "4 Years" },
  { label: "CSS", url: "asd", icon: "devicon:css3", experience: "4 Years" },
  { label: "C#", url: "asd", icon: "devicon:csharp", experience: "3.5 Years" },
  { label: "Java", url: "asd", icon: "devicon:java", experience: "5 Years" },
]

export const skillsTools: SkillCard[] = [
  { label: "Figma", url: "asd", icon: "devicon:figma", experience: "1 Year" },
  { label: "Obsidian", url: "asd", icon: "skill-icons:obsidian-light", experience: "2 Years" },
]

export const skillGroups: SkillGroup[] = [
  {
    name: "Web Development",
    skills: skillsFrontend
  },
  {
    name: "Game Development",
    skills: skillsGames
  },
  {
    name: "Programming Languages",
    skills: skillsLanguages
  },
  {
    name: "Tools",
    skills: skillsTools
  },
]