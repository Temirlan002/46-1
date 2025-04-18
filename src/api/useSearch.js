import axios from "axios"

export const searchProducts = async (query) => {
  const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
  return response.data.products
}