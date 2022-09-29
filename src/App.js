import { useState } from 'react'
import './App.css'
import { Landing } from './component/Landing'
import { Navbar } from './component/Navbar'
import { Login } from './component/login'
import {Routes,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
 
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Landing" element={<Landing/>}></Route>
        
      </Routes>
     
    </div>
  )
}

export default App
