import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function App() {
  function addme(){
    // count = count+1;
    bossCounter +=1;
    adder(bossCounter);
  }
  
  let count = 12;
  let [bossCounter, adder] = useState(12);
  return (
    <>
    <h1>Welcome, lets get started</h1>
    <div>Counter {bossCounter}</div>
    <button
    onClick={addme}>Click to increment</button>
    </>
  )
}

export default App
