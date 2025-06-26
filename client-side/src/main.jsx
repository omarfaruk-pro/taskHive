import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Router'
import AuthContextProvider from './context/auth/AuthContextProvider'
import TaskProvider from './context/task/TaskProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <TaskProvider>
        <RouterProvider router={router}></RouterProvider>
      </TaskProvider>
    </AuthContextProvider>
  </StrictMode>
)
