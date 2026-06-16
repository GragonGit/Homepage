export interface NavLink {
  label: string
  url: string
  icon?: string
}

export const mainNavigation: NavLink[] = [
  { label: "Projects", url: "/#projects", icon: "material-symbols:web-sharp" },
  { label: "Games", url: "/#games", icon: "material-symbols:videogame-asset-sharp" },
  { label: "Skills", url: "/#skills", icon: "material-symbols:star-sharp" },
  { label: "About", url: "/#about", icon: "material-symbols:person-sharp" }
]

export const footerMainNavigation: NavLink[] = [
  { label: "Home", url: "/" },
  ...mainNavigation
]

export const socialNavigation: NavLink[] = [
  { label: "GitHub", url: "https://github.com/GragonGit" },
  // { label: "LinkedIn", url: "https://linkedin.com/in/your-profile" }
]

export const legalNavigation: NavLink[] = [
  { label: "Imprint", url: "/imprint" },
  { label: "Privacy", url: "/privacy" },
  { label: "Cookies", url: "/cookies" }
]