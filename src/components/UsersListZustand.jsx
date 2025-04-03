import React, { useEffect } from "react"
import { useUsersStore } from "../toolkit/useUsersStore";


const UsersListZustand = () => {
    const { users, loading, error, fetchUsersZustand } = useUsersStore()

    useEffect(() => {
        fetchUsersZustand()
    }, [])

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка: {error}</p>

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}

export default UsersListZustand;