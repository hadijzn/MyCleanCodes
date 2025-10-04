import React, { useState } from 'react'
import {  useMutation } from '@tanstack/react-query';
import axios from 'axios';
export default function Mutate() {
    const [name,setName] = useState()
    const mutation = useMutation({ // for delete , add , rename user used  but never save thing just do send or delete
        mutationFn: async (newUser) =>{
            const res = await axios.post('https://jsonplaceholder.typicode.com/users//' , newUser
)
         return res.data
        }
        
    }
)
const handleClick = () => {
        // mutation.mutate({name:'hadijzn',gmail:'hadijzn@gmail.com'})
        mutation.mutate({name})
        console.log('send');
        

}


  return (
    <div>
        <input
        value={name}
        type='text'
        onChange={(e)=>{
            setName(e.target.value)
        }}
        placeholder='enter name'
        
        >
        </input>
        <button onClick={handleClick}>submit </button>
        {mutation.isLoading && <p>sending...</p> } // conditional render : if rain open my umbrella
        {mutation.isError && <p>{mutation.error.message}</p>} // if error : show this this err message
        {mutation.isSuccess && <p> userCreated : {mutation.data.name}</p>} if condition true : show this if false dontshow

        {/* {isLoggedIn ? <Dashboard /> : <Login />}// if login show dashboard if not login page  */}
        {/* {isDark ? <TurnOnLight /> :(if not do this ) <TurnOffLight />} */}
        {/* we dont show everything we just want to show things to help us to create best ui that
        matters on this second   */}

{/* 
mutation.mutate() // این یه فانکشنه، چون یه کاری انجام می‌ده
mutation.isLoading // این یه ویژگیه، چون فقط می‌گه "در حال بارگذاری هست یا نه" */}

    </div>
  )
}
