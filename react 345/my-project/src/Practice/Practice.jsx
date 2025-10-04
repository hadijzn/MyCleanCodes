import React, { useRef, useState } from 'react'

export default function Practice() {
    const [state,setState] = useState(0)
    const myRef = useRef(1)
    const increaseState = () => {
        setState(state+1)
    }
    // const increaseRef = () => {
    //     myRef.current+2;
    //    console.log(myRef.current);

    // }
    console.log('render');
    const changeColor = () => {
        myRef.current.style.color="#777"
    }
    
  return (
    <div>Practice
        <p>state : {state}</p>
        <button onClick={increaseState}>increase State</button>
        <br/>
                <p ref={myRef}>ref</p>
        <button onClick={changeColor}>change Color</button>

    </div>
  )
}
