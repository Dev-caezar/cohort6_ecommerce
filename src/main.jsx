import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppProvider from './utils/AppProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <AppProvider>
    <StrictMode>
      <App />
      <ToastContainer />
    </StrictMode>
  </AppProvider>,
)
