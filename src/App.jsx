import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import AppleShowcasePage from './pages/AppleShowcasePage.jsx'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans antialiased">
        <AppleShowcasePage />
      </div>
    </ThemeProvider>
  )
}

export default App
