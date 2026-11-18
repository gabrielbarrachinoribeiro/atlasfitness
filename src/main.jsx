import { Dumbbell } from 'lucide-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-3">
      <Dumbbell className="size-8" aria-hidden="true" />
      <h1 className="text-3xl font-bold">Atlas Fitness</h1>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
