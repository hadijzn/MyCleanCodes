
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import React from 'react'
import FetchUsers from './FetchUsers'
import UserDetail from './UserDetail'

export default function App() {
    const queryClient = new QueryClient()
  return (
    <div>
        <QueryClientProvider client={queryClient}>
        <BrowserRouter >
         <Link to='/Fetch/:name'>Fetch</Link>
         <Routes>
             <Route path='/Fetch/:id' element={<FetchUsers/>}/>
             <Route path='/users/:id' element={<UserDetail/>}/>
         </Routes>
       </BrowserRouter> 
       </QueryClientProvider>
    </div>
  )
}

