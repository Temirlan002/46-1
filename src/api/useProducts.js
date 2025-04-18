import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export const fetchProducts = async (skip = 0, limit = 30) => {
  const res = await axios.get(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`);
  return res.data;
}

export function useProducts(skip = 0, limit = 30,) {
  return useQuery({
    queryKey: ["products", skip, limit],
    queryFn: () => fetchProducts(skip, limit)
  })
}