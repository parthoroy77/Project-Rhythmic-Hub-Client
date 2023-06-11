import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
