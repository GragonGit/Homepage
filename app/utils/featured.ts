export interface ProjectDisplay {
  image: Image
  description: string
  techStack: AppCard[]
}

export const featuredProjects: ProjectDisplay[] = [
  {
    image: {
      src: "/images/projects/portfolio-hero.png",
      alt: "Portfolio Hero Section",
      sizes: "sm:100vw md:60vw"
    },
    description: "This is my Homepage",
    techStack: [
      { label: "", url: "/#projects", icon: "material-symbols:web-sharp" },
      { label: "", url: "/#games", icon: "material-symbols:videogame-asset-sharp" },
      { label: "", url: "/#skills", icon: "material-symbols:star-sharp" },
      { label: "", url: "/#about", icon: "material-symbols:person-sharp" }
    ]
  },
  {
    image: {
      src: "/images/projects/portfolio-hero.png",
      alt: "Portfolio Hero Section",
      sizes: "sm:100vw md:60vw"
    },
    description: "Another Project",
    techStack: [
      { label: "", url: "/#projects", icon: "material-symbols:web-sharp" },
      { label: "", url: "/#games", icon: "material-symbols:videogame-asset-sharp" },
      { label: "", url: "/#skills", icon: "material-symbols:star-sharp" },
      { label: "", url: "/#about", icon: "material-symbols:person-sharp" }
    ]
  }
];