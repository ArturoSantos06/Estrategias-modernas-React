import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'

function AppContent() {
  const { user } = useAuth()

  if (!user) {
    return <LoginPage />
  }

  return <DashboardPage />
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen font-sans antialiased">
          <AppContent />
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
