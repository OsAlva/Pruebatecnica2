/* eslint-disable no-multi-spaces */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line @typescript-eslint/member-delimiter-style  */

import { SortBy, type User } from '../types.d'

interface Props {
    showColors: boolean
    users: User[]
    deleteUser: (email: string) => void
    changeSorting: (sort: SortBy) => void
    // resetUsers: User[]
}

export function UsersLists ({ changeSorting, deleteUser, showColors, users }: Props) {
    return (
        <table width='100%'>
            <thead>
                <tr>
                <th >Foto</th>
                <th onClick={() => { changeSorting(SortBy.NAME) }}>Nombre</th>
                <th onClick={() => { changeSorting(SortBy.LAST) }}>Apellido</th>
                <th onClick={() => { changeSorting(SortBy.COUNTRY) }}>Pais</th>
                <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map((user, index) => {
                        // para cambiar el color
                        const backgroundColor = index % 2 === 0 ? '#333' : '#555'
                        const color = showColors ? backgroundColor : 'transparent'
                        // console.log(color)
                        //
                        return (
                            <tr key={user.email} style={{ backgroundColor: color }}>
                                <td>
                                    <img src={user.picture.thumbnail}/>
                                </td>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.location.country}</td>
                                <td>
                                    <button onClick={() => {
                                        deleteUser(user.email)
                                    }}>
                                        Borrar
                                    </button>
                                </td>
                            </tr>
                         )
                })}
            </tbody>

        </table>
    )
}

// table, thead, tbody <- son la clave
// tr -> row
// td -> column
