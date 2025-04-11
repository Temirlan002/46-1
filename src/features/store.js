import { create } from "zustand";


export const useStore = create((set) => ({
  cart: [],
  favorites: [],
  addToCart: (product) =>
    set((state) => ({cart: [...state.cart, product]}))
}))