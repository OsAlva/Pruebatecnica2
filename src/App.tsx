/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect, useRef, useMemo } from 'react'
import { type User } from './types.d'
import './App.css'
import { UsersLists } from './components/UsersList'


function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)
  // const [originalUsers, setOriginalUsers] = useState<User[]>([])


  const originalUsers = useRef<User[]>([]) // la forma adecuada de como se debe de hacer el reset
  // useRef -> para guardar un valor que queremos que se comparta entre renderizados pero que al cambiar, no vuelva a renderizar el componente.

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toggleSortByCountry = () => {
    setSortByCountry(prevState => !prevState) // callback que recupera el valor anterior --> prevState
  }

  // console.log(showColors)

  const handleDelete = (email: string) => {
    const filteredUsers = users.filter((user) => user.email !== email)
    setUsers(filteredUsers)
  }

  const handleReset = () =>{
    setUsers(originalUsers.current)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
    .then(async res => await res.json())
    .then(res => {
      setUsers(res.results)
      originalUsers.current = res.results
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === 'string' && filterCountry.length > 0
    ? users.filter(user => {
      return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
    })
    : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => { // el valor de sortedUser quiero que lo memorices y solo lo renderize cuando cambie filteredUsers o sortByCountry
    return sortByCountry
      ? filteredUsers.toSorted(
        (a, b) => a.location.country.localeCompare(b.location.country)
      )
      : filteredUsers
  }, [filteredUsers, sortByCountry])



  return (
    <div className="App">
      <h1>Prueba Tecnica</h1>
      <header>
        <button onClick={toggleColors}>Colorear filas</button>
        <button onClick={toggleSortByCountry}>{sortByCountry ? 'No ordenar por país' : 'Ordenar por pais' }</button>
        <button onClick={handleReset}>Resetear Usuarios</button>
        <input placeholder='Filtra por pais' onChange={(e) =>{
          setFilterCountry(e.target.value)
        }} />
      </header>
      <main>
        <UsersLists deleteUser={handleDelete} showColors={showColors} users={sortedUsers}/>
      </main>
    </div>
  )
}

export default App
