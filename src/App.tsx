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
  

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState) // callback que recupera el valor anterior --> prevState
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

  const sortedUsers = sortByCountry 
    ? [...users].sort((a, b) => {
    return a.location.country.localeCompare(b.location.country)
  })
  : users


  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>{sortByCountry ? 'No ordenar por país' : 'Ordenar por pais' }</button>
      </header>
      <main>
        <UsersLists showColors={showColors} users={sortedUsers} />
      </main>
    </div>
  )
}

export default App
