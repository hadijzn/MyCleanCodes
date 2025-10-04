import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserStore from './UserStore';

export default function App() {
    const Query = new QueryClient()
  return (
    <div>
        <QueryClientProvider client={Query}>
            fmvmdp
            <UserStore/>
        </QueryClientProvider>
    </div>
  )
}
