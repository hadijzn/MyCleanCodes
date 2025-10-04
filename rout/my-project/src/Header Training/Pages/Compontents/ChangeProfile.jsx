import React, { useState } from 'react'

export default function ChangeProfile() {
    const [newusername,setnewUsername] = useState()
  return (
    <div>
        <input onChange={(event)=>{setnewUsername(event.target.value)}}  placeholder='enter your name'></input>
         <button onClick={()=>{console.log(newusername)}}>ثبت</button>

    </div>
  )
}
