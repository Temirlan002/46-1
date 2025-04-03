import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../toolkit/counterSlice";


const UsersList = () => {
    const dispatch = useDispatch()
    const { users, status, error } = useSelector((state) => state.usersReducer)
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if ( status === "loading") return <p>Загрузка...</p>
    if ( status === "failed" ) return <p>Ошибка: {error}</p>

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UsersList;