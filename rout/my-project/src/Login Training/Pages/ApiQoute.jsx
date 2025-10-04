import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios';

export default function ApiQoute() {
    // const {data , isError ,error} = useQuery(['fact'],async () =>{
    //       const res = await axios.get('https://catfact.ninja/fact')
    //       return res.data;
    // })
    const {data ,isError,error,refetch } = useQuery({
  queryKey: ['fact'],
  queryFn: async () => {
    const res = await axios.get('https://catfact.ninja/fact');
    return res.data;
  }
});

    if (isError){
        return <h2>{error.message}</h2>
    }
  return (
    <div>
        <h2>{data?.fact}</h2>
        <button onClick={refetch }>next qoute</button>
    </div>
  )
}
