import { create } from "zustand";


export const useStore = create((set) => ({
  cart: [],
  favorites: [],
  addToCart: (product) =>
    set((state) => ({cart: [...state.cart, product]}))
}))

export const useAuthStore = create((set, get) => {

  const storedUsers = JSON.parse(localStorage.getItem('users') || '[]')

  return {
    user: null,
    users: storedUsers,

    register: (newUser) => {
      const { users } = get();
      // const userExists = 

      const updatedUsers = [...users, newUser]
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      set({users: updatedUsers})
      return null
    },
    login: (username, password) => {
      const { users } = get()
      const foundUser = users.find((u) => u.username === username && u.password === password)
      console.log(users);
      

      if (!foundUser) {
        return alert("Неправильный логин или пароль")
      }

      alert("Успешно")
      set({ user: foundUser })
      return null;
    },

  }
})