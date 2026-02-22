import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import User from './components/User'
import Create from './components/Create'
import Update from './components/Update'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/update/:id' element={<Update/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App