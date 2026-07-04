export const useTheme = () => {
  const theme = useState<'dark' | 'light'>('theme', () => 'dark')

  const isDark = computed(() => theme.value === 'dark')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(theme, (value) => {
    if (process.client) {
      document.documentElement.classList.toggle('dark', value === 'dark')
      document.documentElement.setAttribute('data-theme', value)
      window.localStorage.setItem('theme', value)
    }
  }, { flush: 'post' })

  onMounted(() => {
    if (!process.client) {
      return
    }

    const storedTheme = window.localStorage.getItem('theme') as 'dark' | 'light' | null
    if (storedTheme === 'dark' || storedTheme === 'light') {
      theme.value = storedTheme
      return
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = prefersDark ? 'dark' : 'light'
  })

  return {
    theme,
    isDark,
    toggleTheme
  }
}
