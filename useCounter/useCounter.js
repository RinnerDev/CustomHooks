import { useState } from "react"

const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => {
    setCounter(counter + value)
  }

  const decrease = (value = 1) => {
    setCounter(counter - value)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    increment,
    decrease,
    reset
  }
}

export default useCounter