import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetail() {
    const {id} = useParams();
    const {data , isLoading,isError,error} = useQuery({
        queryKey :['user' , id],
        queryFn : async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            return res.data
        }

        
    })
            if(isLoading){
            return <h2>is loading...</h2>
        }
        if(isError){
            return <h2>{error.message}</h2>
        }
  return (
    <div>
              <h2>User Detail</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Website:</strong> {data.website}</p>
    </div>
  )
}
