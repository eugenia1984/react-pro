import { FC, useState } from 'react'

interface CounterProps {
  initialValue?: number
}

const Counter: FC<CounterProps> = ({ initialValue }) => {
  const [counter, setCounter] = useState<number>(initialValue?? 0)

  const handleClick = () => setCounter(prev => prev + 1)
  

  return (
    <>
      <h1>Counter: { counter }</h1>
      <button onClick={ handleClick }>+1</button>
    </>
  )
}

export default Counter