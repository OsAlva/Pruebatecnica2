/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import {type User } from './types.d'
import './App.css'
import { UsersLists } from './components/UsersList'


function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  console.log(showColors)


  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
      setUsers(res.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
      </header>
      <main>
        <UsersLists showColors={showColors} users={users}/>
      </main>
    </div>
  )
}

export default App
