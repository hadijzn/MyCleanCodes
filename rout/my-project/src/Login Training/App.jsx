// import React, { createContext, useState } from 'react'
import { BrowserRouter,  Link, Route,  Routes } from "react-router-dom"
// import Dashboard from './Pages/Dashboard'
// import Login from './Pages/Login'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import ApiQoute from "./Pages/ApiQoute"
// export const IsLoggedInContext = createContext();

export default function App() {
  // const client = {QueryClient};
  const queryClient = new QueryClient();
    // const [username,setUsername] = useState('')
  return (
    <div>
      <QueryClientProvider client={queryClient}>
          <h2>this is my app</h2>
        <BrowserRouter>
        {/* <Link to='/Login'>Login</Link> */}
        <Link to='/QouteApi'>qoute</Link>
        <Routes>
          <Route path="/QouteApi" element={<ApiQoute/>} />
            {/* <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Login' element={<Login/>}/> */}
        </Routes>
        </BrowserRouter>
      </QueryClientProvider>
        {/* <IsLoggedInContext.Provider value={{username,setUsername}}> */}

        {/* </IsLoggedInContext.Provider> */}
    </div>
  )
}
