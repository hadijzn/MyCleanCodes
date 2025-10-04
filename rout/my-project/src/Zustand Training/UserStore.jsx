import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import useUserStore from './UseUserStore';

export default function UserStore() {
    const { users, setUsers, removeUser } = useUserStore();
    const {data,isLoading,isError,error} = useQuery(
        {
            queryKey:['users'],
            queryFn: async ()=>{
                const res = await axios.get('https://jsonplaceholder.typicode.com/users/');
                return res.data;
            }
        }
    )
useEffect(() => {
  if (data) {
    setUsers(data);
  }
}, [data]);

  return (
    <div>
         {isError && <h2>{error.message}</h2>}
         {isLoading && <h2>loading...</h2>}
      <ul>
        {users.map((user)=>(
         <li className='mx-2'>
          {user.name}
           <button  className='mx-2 bg-red-400 text-white rounded-md ' 
           onClick={()=> removeUser(user.id)}>DELETE</button>
         </li>
    ))}
  </ul>
  </div>

  )
}
