export const useTheme = () => {
  const theme = useState<'light' | 'dark'>('theme', () => 'light')

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return {
    theme,
    toggleTheme
  }
}