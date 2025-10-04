import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import { data, Link, useParams } from 'react-router-dom'
import axios from 'axios';
export default function FetchUsers() {
    const {data,isError,error , isLoading} = useQuery({
        queryKey:['users'], queryFn: async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
            return res.data;
        }
    })
   
    
    if(isError){
        return <h2>{error.message}</h2>
    }
    if(isLoading) {
        return <h2>is loading....</h2>
    }
  return (
    <div>
              <ul>
        {data.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
