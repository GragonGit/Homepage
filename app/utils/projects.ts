export interface ProjectDisplay {
  image: Image
  description: string
  techStack: AppCard[]
}

export const featuredProjects: ProjectDisplay[] = [
  {
    image: {
      src: "/images/games/Skybreakers.png",
      alt: "Featured Project Video Game Skybreakers",
      sizes: "sm:100vw md:60vw"
    },
    description: "Skybreakers is a multiplayer dogfighting game inspired by Wii Sports Resort. It features realistic airplane physics and custom shaders written for this project.",
    techStack: [
      { label: "Unity", url: "", icon: "devicon-plain:unity" },
      { label: "C#", url: "", icon: "devicon-plain:csharp" },
    ]
  },
  {
    image: {
      src: "/images/games/ArcaneArtistry.png",
      alt: "Featured Project Minecraft Mod Arcane Artistry",
      sizes: "sm:100vw md:60vw"
    },
    description: "Arcane Artistry is a Minecraft mod written where the player casts spells using the movement of their mouse. The spells are constructed using various design patterns for easy implementation of more spells in the future.",
    techStack: [
      { label: "Java", url: "", icon: "devicon-plain:java" },
      { label: "Gradle", url: "", icon: "devicon-plain:gradle" },
    ]
  }
];