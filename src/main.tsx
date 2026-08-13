import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TaskTrackerProvider } from './context/TaskTrackerContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TaskTrackerProvider>
      <App />
    </TaskTrackerProvider>
  </StrictMode>,
)
