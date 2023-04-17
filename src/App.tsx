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
  const [sortByCountry, setSortByCountry] = useState(false)
  const [originalUsers, setOriginalUsers] = useState<User[]>([])
  

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState) // callback que recupera el valor anterior --> prevState
  }

  console.log(showColors)

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () =>{
    setUsers(originalUsers)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
      setUsers(res.results)
      setOriginalUsers(res.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const sortedUsers = sortByCountry 
    ? users.toSorted((a, b) => {
    return a.location.country.localeCompare(b.location.country)
  })
  : users



  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>{sortByCountry ? 'No ordenar por país' : 'Ordenar por pais' }</button>
        <button onClick={handleReset}>Resetear Usuarios</button>
      </header>
      <main>
        <UsersLists deleteUser={handleDelete} showColors={showColors} users={sortedUsers}/>
      </main>
    </div>
  )
}

export default App
