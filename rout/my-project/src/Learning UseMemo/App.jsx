import React, { useMemo, useState } from 'react'

export default function App() {
    const [number,setNumber] = useState(0)
    const [theme,setTheme] = useState(false)

    const slowFunction =  (number) => {
        for (let i = 0; i <1303009800; i++) {}
        return number*2;
    }
    // const addNumber = slowFunction(number)
    const addNumber = useMemo(()=> slowFunction(number),[number])
  return (
    <div style={{backgroundColor : theme ? 'red' : 'gray '}}>
        <h1>{addNumber}</h1>
        <button onClick={()=>{setTheme(!theme)}}>change theme</button>
        <input type='text' onChange={(e)=>setNumber(e.target.value)}></input>
    </div>
  )
}
