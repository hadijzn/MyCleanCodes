import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Training() {
    const navigate = useNavigate()

    const goToHome = ()=> {
        navigate('/')
    }
  return (
    <div>
        <button onClick={goToHome}>go to home</button>
    </div>
  )
}
