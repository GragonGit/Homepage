export interface NavLink {
  label: string
  url: string
  icon?: string
}

export const heroNavigation: NavLink[] = [
  { label: "Projects", url: "/#projects", icon: "material-symbols:web-sharp" },
  // { label: "Games", url: "/#games", icon: "material-symbols:videogame-asset-sharp" },
  { label: "About", url: "/#about", icon: "material-symbols:person-sharp" },
  { label: "Skills", url: "/#skills", icon: "material-symbols:star-sharp" },
  { label: "Contact", url: "/#contact", icon: "material-symbols:mail" },
]

export const headerNavigation: NavLink[] = [
  { label: "Hero", url: "/#hero", icon: "material-symbols:home" },
  ...heroNavigation
]

export const footerMainNavigation: NavLink[] = [
  { label: "Home", url: "/" },
  { label: "Projects", url: "/projects" },
  { label: "Skills", url: "/skills" },
]

//TODO - Proper Links
export const contactNavigation: NavLink[] = [
  { label: "LinkedIn", url: "https://linkedin.com/in/your-profile", icon:"devicon-plain:linkedin" },
  { label: "GitHub", url: "https://github.com/GragonGit", icon:"devicon:github" },
]

export const legalNavigation: NavLink[] = [
  { label: "Imprint", url: "/imprint" },
  // { label: "Privacy", url: "/privacy" },
  // { label: "Cookies", url: "/cookies" }
]