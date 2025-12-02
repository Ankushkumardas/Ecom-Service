import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './components/layout/UserLayout'

const App = () => {
  return (
    <div>
      <Routes>
        {/* user routes */}
        <Route path="/" element={<UserLayout />} >

        </Route>
       {/* admin routes */}
      </Routes> 
    </div>
  )
}

export default App
