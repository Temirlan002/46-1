import {useState} from "react"
import { create } from "zustand"


const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1}))
}))



const Counter = () => {
    const { count, increment, decrement } = useCounterStore()


    return (
        <div>
            <h2>Счетчик: {count}</h2>
            <button onClick={increment}>Увеличить</button>
            <button onClick={decrement}>Уменьшить</button>
        </div>
    )
}

export default Counter;