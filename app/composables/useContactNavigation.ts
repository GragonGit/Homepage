export const useContactNavigation = () => {
  const config = useRuntimeConfig()

  return [
    {
      label: "LinkedIn",
      url: config.public.linkedinUrl,
      icon: "devicon-plain:linkedin"
    },
    {
      label: "GitHub",
      url: "https://github.com/GragonGit",
      icon: "devicon:github"
    },
    {
      label: "Itch",
      url: "https://gragonator.itch.io",
      icon: "simple-icons:itchdotio"
    },
  ]
}
