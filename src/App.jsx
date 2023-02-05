import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Timer = () =>{
  const [count , setCount] = useState(0)
  const [start, setStart] = useState(false)

  const handleStartStop = () =>{
    setStart(start => !start)
  }

  const handleReset = () =>{
    setCount(0)
  }

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(start){
        setCount(count => count + 1)
      }
    },1000)

    return () =>{
      clearInterval(timer)
    }

  },[start])


  return(
    <div>
      <h1>Timer: {count}</h1>
      <div>
        <button onClick={handleStartStop}>{start ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset} disabled={start}>Reset</button>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <h1>Vite + React</h1>
      <div className="card">
      <Timer />
      </div>
      
    </div>
  )
}

export default App
