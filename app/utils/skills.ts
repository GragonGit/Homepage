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
  { label: "HTML", url: "asd", icon: "devicon:html5", experience: "4 Years" },
  { label: "TypeScript", url: "asd", icon: "devicon:typescript", experience: "4 Years" },
  { label: "CSS", url: "asd", icon: "devicon:css3", experience: "4 Years" },
  { label: "Figma", url: "asd", icon: "devicon:figma", experience: "1 Year" },
]

export const skillsGames: SkillCard[] = [
  { label: "Unity", url: "asd", icon: "devicon:unity", experience: "3 Years" },
  { label: "C#", url: "asd", icon: "devicon:csharp", experience: "3.5 Years" },
  { label: "Godot", url: "asd", icon: "devicon:godot", experience: "1 Year" },
  { label: "Java", url: "asd", icon: "devicon:java", experience: "5 Years" },
  { label: "Obsidian", url: "asd", icon: "skill-icons:obsidian-light", experience: "2 Years" },
]

export const skillsOther: SkillCard[] = [
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
  // {
  //   name: "Other",
  //   skills: skillsOther
  // }
]