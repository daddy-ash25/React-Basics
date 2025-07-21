import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import Header from './components/headers/Header'
import Footer from './components/footers/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-700'>React Router</h1>
      <Header/>
      <Home/>
      <Footer/>
    </>
    )
}

export default App
