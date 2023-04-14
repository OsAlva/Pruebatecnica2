import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUser] = useState([])
  const [showColors, setShowColors] = useState(false)



  useEffect(()=>{
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
      setUser(res.results)
    })
  },[])


  
  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
     {
      JSON.stringify(users)
     }
    </div>
  )
}

export default App
