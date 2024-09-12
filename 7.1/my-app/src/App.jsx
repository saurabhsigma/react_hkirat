import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'

function App() {
  // const [count, setCount] = useState(0)
  


  return (
    <div>

    <BrowserRouter>
      <Appbar />
      <Routes>
         < Route path='/dashboard' element={<Dashboard />} />
         < Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return(
  <div>
        <button onClick={()=>{
          navigate("/landing");
        }}>Landing</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>

  )
}

export default App


