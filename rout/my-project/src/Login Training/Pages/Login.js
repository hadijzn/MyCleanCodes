import React, { useContext, useState } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { IsLoggedInContext } from '../App';

export default function Login() {
  const navigate = useNavigate();
  const { setUsername } = useContext(IsLoggedInContext);
  const [inputValue, setInputValue] = useState('');
    const handleToDashboard = (e)=> {
        e.preventDefault();
        navigate('/Dashboard')
        setUsername(inputValue)
    }
  return (
    <div>
            <form onSubmit={handleToDashboard}>

            <input value={inputValue} type='text' placeholder='enter your name'
                      onChange={(e) => setInputValue(e.target.value)}/>
                    <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
