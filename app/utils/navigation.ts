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
]

export const footerMainNavigation: NavLink[] = [
  { label: "Home", url: "/" },
  { label: "Projects", url: "/projects" },
  { label: "Skills", url: "/skills" },
]

export const socialNavigation: NavLink[] = [
  { label: "GitHub", url: "https://github.com/GragonGit" },
  // { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" }
]

//TODO - Proper Links
export const legalNavigation: NavLink[] = [
  { label: "Imprint", url: "/imprint" },
  // { label: "Privacy", url: "/privacy" },
  // { label: "Cookies", url: "/cookies" }
]