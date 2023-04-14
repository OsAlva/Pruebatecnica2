/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import {type User } from './types.d'
import './App.css'


function App () {
  const [users, setUser] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)


  useEffect(()=>{
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
      setUser(res.results)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
     {
      JSON.stringify(users)
     }

     {/* {users.map((user) =>{
      return (
        <h1 key={user.email}>{user.name.first}</h1>
      )
     })} */}

    </div>
  )
}

export default App
