export const useAsset = (path: string) => {
  const config = useRuntimeConfig()
  if (!path) return path
  return `${config.app.baseURL}${path.replace(/^\//, '')}`
}