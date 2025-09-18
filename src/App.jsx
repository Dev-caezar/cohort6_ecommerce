import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { AppContext } from './utils/AppContext'

const App = () => {
  const name = "Tunde"
  return <Router value={name} />
}

export default App
