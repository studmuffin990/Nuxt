import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#7C3AED',
        accent: '#06B6D4',
        surface: '#1E293B'
      },
      boxShadow: {
        soft: '0 20px 80px rgba(15, 23, 42, 0.2)'
      }
    }
  }
}
