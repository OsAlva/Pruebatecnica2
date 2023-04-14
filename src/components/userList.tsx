import {type User } from '..types.d';

interface Props {
    showColors: boolean
    users: []
}

export function UsersLists({users}: Props){
    return(
        <table>
            <thead>
                <th>Nombre</th>
                <th>Foto</th>
                <th>Apellido</th>
                <th>Pais</th>
                <th>Acciones</th>
            
            </thead>

            <tbody>
                {users.map(user => {
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

//table, thead, tbody <- son la clave
//tr -> row
// td -> column