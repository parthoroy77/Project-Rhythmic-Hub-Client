import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Providers/AuthProviders.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import routes from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={routes}></RouterProvider>
        </QueryClientProvider>
        <Toaster />
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
