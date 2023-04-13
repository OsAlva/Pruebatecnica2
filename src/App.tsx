import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUser] = useState([])

  useEffect(()=>{
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
      setUser(res.results)
    })
  },[])


  
  return (
    <div className="App">
     {
      JSON.stringify(users)
     }
    </div>
  )
}

export default App
