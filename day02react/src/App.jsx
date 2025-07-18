import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 >We Work</h1>
        <Card1 />
    </>
  )
}

export default App
