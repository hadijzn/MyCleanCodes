import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ProfileContent } from '../Home'
import ChangeProfile from './Compontents/ChangeProfile'
export default function Profile() {
    const { username, setUsername } = useContext(ProfileContent)

    const {name} = useParams()
  return (
    <div>
        <ChangeProfile/>
         <div>this is profile of {name} </div>
wwwww
    </div>
  )
}

