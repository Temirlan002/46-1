import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


const fetchUsersQuery = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
}

const addUser = async (newUser) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
    return response.data;
}
 
const UsersListQuery = () => {
    const { data, isLoading, error } = useQuery({ // для загрузки данных с сервера
        queryKey: ["usersQuery"], //Ключ запроса 
        queryFn: fetchUsersQuery
    })
    const queryClient = useQueryClient()

    const mutation = useMutation({ // для изменения данных
        mutationFn: addUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["usersQuery"]}) //сброс кэша
        }
    })

    if (isLoading) return <p>Загрузка...</p>
    if (error) return <p>Ошибка загрузки</p>
    
    return (
        <>
            <button
                onClick={() => mutation.mutate({name: "Новый пользователь"})}
                disabled={mutation.isLoading}
            >
                {mutation.isLoading ? "Добавляем..." : "Добавить пользователя"}
            </button>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default UsersListQuery;