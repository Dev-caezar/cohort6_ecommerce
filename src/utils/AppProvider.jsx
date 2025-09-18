import React, { useState } from 'react'
import { AppContext } from './AppContext'

const AppProvider = ({ children }) => {
   const [cart, setCart] = useState([])


   const updateCart = (product) => {
      setCart((previousData) => ([
         ...previousData,
         product
      ]))
   }

   return (
      <AppContext.Provider value={{ cart, updateCart }}>
         {children}
      </AppContext.Provider>
   )
}

export default AppProvider