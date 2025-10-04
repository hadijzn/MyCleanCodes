import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import Mutate from './Mutate'

export default function App() {
    const Query = new QueryClient()
  return (
    <div> 
        <QueryClientProvider client={Query}>
            <Mutate/>
        </QueryClientProvider>
        
        </div>
  )
}
