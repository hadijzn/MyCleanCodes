import { BrowserRouter,  Routes } from "react-router-dom"
// import  {About}   from './Pages/About'
// import Contacts from './Pages/Contacts'

// import  {Main}  from './Pages/Main'
// import Nav from './Pages/Nav'
// import NotFound from './Pages/NotFound'
// import { Success } from './Pages/Success'
// import Register from './Pages/Register'
// import Profile from './Pages/Profile'
// import Training from './Training'
// import { useState, createContext } from 'react';
// export const ProfileContent = createContext();

export default function Home() {
  // const [username,setUsername] = useState('hadi coding...')
  return (
    <div>
       {/* <ProfileContent.Provider value={{username,setUsername}}> */}
         <BrowserRouter>
        {/* <Nav/> */}
        <h2>this is home</h2>
        <Routes>
            {/* <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contacts/>}></Route>
            <Route path='/main' element={<Main/>}></Route>
            <Route path='/profile/:name' element={<Profile/>}></Route>
            <Route path='*' element={<NotFound/>}></Route> */}
            {/* <Route path='/' element={<Register/>} ></Route>
            <Route path='/Success' element={<Success />} ></Route> */}
            {/* <Route path='/Training' element={<Training/>}></Route> */}
        </Routes>
        </BrowserRouter>
       {/* </ProfileContent.Provider> */}
    </div>
  )
}
