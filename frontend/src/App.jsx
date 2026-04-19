import React from 'react'
import {Routes, Route} from "react-router-dom"
import Landing from './pages/Landing'
import Authentication from './pages/Authentication.JSX'
import { AuthProvider } from './context/AuthContext'
import Videomeet from './pages/Videomeet'
import HomeComponent from './pages/Home'
import History from './pages/History'


const App = () => {
  return (
      <AuthProvider>

        <Routes>


          <Route path='/' element={<Landing />} />
          <Route path='/auth' element={<Authentication />} />
          <Route path='/home' element={<HomeComponent />} />
          <Route path='/:url' element={<Videomeet/>} />
          <Route path='/history' element={<History />} />
          
      
        </Routes>
     </AuthProvider>
     
     

  )
}

export default App
