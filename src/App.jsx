import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(0)

  const handleIncrement = () =>{
      setCounter(count + 1)
  }
  const handleDecrement = () =>{
    if (count >  0){
      setCounter(count - 1)
    }
  }

  return (
    <>
    <div className='container'>
      <h1 className='counter'>{count}</h1>
      <div className='buttonsClass'>
      <button onClick={handleIncrement} className='button'>Increment</button>
      <button onClick={handleDecrement} className='button'>Decrement</button>
      </div>
    </div>
      
    </>
  )
}

export default App
