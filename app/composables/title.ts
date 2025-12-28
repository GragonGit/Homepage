export const useTitle = () => {
  return useState<string>('title', () => 'Welcome')
}
