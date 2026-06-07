import { createContext, useContext, useMemo } from 'react'
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

const ThemeContext = createContext(null)

// Context API: comparte el tema global.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('apple-studio-theme', 'dark')

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [setTheme, theme],
  )

  useEffect(() => {
    if (typeof window === 'undefined') return
    const root = window.document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }

  return context
}
