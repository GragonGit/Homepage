export const useSideNav = () => {
  const sideNavOpen = useState<boolean>('sideNav', () => false)

  const toggleSideNav = () => {
    sideNavOpen.value = !sideNavOpen.value
  }

  return {
    sideNavOpen,
    toggleSideNav
  }
}
