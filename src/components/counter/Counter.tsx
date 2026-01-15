import { useState } from 'react'
import "./Counter.css"

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount((count) => count + 1)} className='counter'>
      {count}
    </button>
  )
}