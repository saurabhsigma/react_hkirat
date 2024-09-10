import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <button onClick={()=>{
          window.location.href= "/landing"
        }}>Landing</button>
        <button onClick={()=>{
          window.location.href= "/dashboard"
        }}>Dashboard</button>
      </div>
    <BrowserRouter>
      <Routes>
         < Route path='/dashboard' element={<Dashboard />} />
         < Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
