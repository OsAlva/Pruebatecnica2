/* eslint-disable no-multi-spaces */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line @typescript-eslint/member-delimiter-style  */

import { type User } from '../types.d'

interface Props {
    showColors: boolean
    users: User[]
}

export function UsersLists ({ users }: Props) {
    return (
        <table width='100%'>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Foto</th>
                <th>Apellido</th>
                <th>Pais</th>
                <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user.id.value}>
                                <td>
                                    <img src={user.picture.thumbnail}/>
                                </td>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.location.country}</td>
                                <td>
                                    <button>Borrar</button>
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
