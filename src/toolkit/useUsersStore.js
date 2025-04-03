import axios from "axios";
import { create } from "zustand";


export const useUsersStore = create((set) => ({
    users: [],
    loading: false,
    error: null,
    fetchUsersZustand: async () => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            set({ users: response.data, loading: false })
        } catch (error) {
            set({ error: "Ошибка загрузки данных", loading: false})
        }
    }
}))