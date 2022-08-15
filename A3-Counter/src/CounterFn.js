import React from "react"
import { useState } from "react"

export default function CounterFn(){

    const [counter,setCounter] = useState(0)
    const increaseCount = () => {
        setCounter(counter + 1)
      }
    const decreaseCount = () => {
        setCounter(counter - 1)
      }
      
    return(
        <>
        <p>Functional Componenet</p>
        <section className="container">
            <button onClick={increaseCount}>+</button>
            <h1>{counter}</h1>
            <button onClick={decreaseCount}>-</button>
        </section>
        </>
    )
}