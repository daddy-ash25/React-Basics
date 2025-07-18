import { useState, useCallback, useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// @import "tailwindcss";


function App() {
  // const [count, setCount] = useState(0)
  const [length, setLength] = useState(8);
  const [numbers, setnumberallowed] = useState(false);
  const [charactrs, setcharactersallowed] = useState(false);
  const [password, setpassword] = useState('');

  //useref hook
  const passwordRef = useRef(null)


  const passwordGenertor = useCallback(()=>{

    let pass = '';
    let astr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(charactrs) astr += '!@#$%^&*?~`+-_=\":;'
    if(numbers) astr+='0123456789';
    for(let i=0;i<=length; i++){
      let char = Math.floor(Math.random()*astr.length);
      pass+=astr.charAt(char);
    }
    setpassword(pass);

  }, [length,numbers,charactrs,setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenertor()
  },[length,numbers,charactrs,passwordGenertor])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
        password generator
        <div className='flex shadow rounded-lg  overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-gray-100'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white shrink-0'
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={20}
            className='cursor-pointer '
            onChange={(e)=> {setLength(e.target.value)}}
            />
            <label> Length:{length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={numbers}
            id='numberInput'
            onChange={()=>{
              setnumberallowed((prev)=>!prev)
            }}
             />
             <label htmlFor="numberInput">number</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked={charactrs}
            id='characterInput'
            onChange={()=>{
              setcharactersallowed((prev)=>!prev)
            }}
             />
             <label htmlFor=""characterInput>character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
