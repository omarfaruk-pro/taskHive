import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Router'
import AuthContextProvider from './context/auth/AuthContextProvider'
import TaskProvider from './context/task/TaskProvider'
import ThemeToggle from './component/ThemeToggle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeToggle></ThemeToggle>
      <TaskProvider>
        <RouterProvider router={router}></RouterProvider>
      </TaskProvider>
    </AuthContextProvider>
  </StrictMode>
)
