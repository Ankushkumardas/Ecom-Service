import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        {/* user routes */}
        <Route path="/" element={<UserLayout />} >
          <Route index element={<Home />} />
        </Route>
        {/* admin routes */}
      </Routes>
    </div>
  )
}

export default App
