

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = () => {
    let pass ="";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    
    if (numberAllowed) {
      str += "1234567890"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+}{"
    }
    
    for (let i = 1; i <= length; i++) {
      pass += str[Math.floor((Math.random() * str.length) + 1)];
    }
    return setPassword(pass);
  }
  const copyPass = () => {
    window.navigator.clipboard.writeText(password)
    document.querySelector("button").innerText="Copied!"
  }
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed])
  return (
    <>
      <div className=' bg-blue-400 rounded-xl' >
        <h1 className=' text-center text-4xl font-bold font-serif'>Password Generator</h1>
        <div className=' flex items-center justify-center '>
          <input type="text" className=' w-full rounded-l-md ml-2'
            readOnly
            value={password} 
          />
          <button className=' mr-2 bg-blue-700 text-white font-bold px-1 rounded-r-md hover:bg-black'
            onClick={copyPass}
            id='button'
          >Copy</button>
        </div>
        <div className=' flex mt-2 pb-2 '>
          <div className=' mx-2'>
            <input type="range" min={6} max={60} className=' cursor-pointer'
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label  className='font-bold'>Length: {length}</label>
          </div>
          <div className=' mr-2'>
            <label className=' font-bold'>Numbers Allowed</label>
            <input type="checkbox"
              value={numberAllowed}
              onChange={() => {setNumberAllowed((prev) => !prev)} }
            />
          </div>
          <div>
           <label className=' font-bold'>Symbols Allowed</label>
           <input type="checkbox" 
            value={charAllowed}
            onChange={() => {setCharAllowed((prev) => !prev)} }
           />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
