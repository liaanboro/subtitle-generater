import { useAuth } from './context/AuthContext'
import LoginForm from './components/auth/LoginForm'
import DashboardLayout from './components/dashboard/DashboardLayout'

function AppContent() {
  const { user } = useAuth()

  if (!user) {
    return (
      <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4wMyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIvPjwvZz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
        <LoginForm />
      </div>
    )
  }

  return <DashboardLayout />
}

function App() {
  return <AppContent />
}

export default App
