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
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "1 Year" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
]

export const skillsGames: SkillCard[] = [
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
]

export const skillsMisc: SkillCard[] = [
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
  { label: "Nuxt", url: "asd", icon: "devicon:nuxt", experience: "3 Years" },
]

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: skillsFrontend
  },
  {
    name: "Games",
    skills: skillsGames
  },
  {
    name: "Other",
    skills: skillsMisc
  }
]