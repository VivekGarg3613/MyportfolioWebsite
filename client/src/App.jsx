import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter,RouterProvider,Route,Routes, createRoutesFromElements } from 'react-router-dom'
import {Home,About,Contact,Github,Login,SignIn,LoginHeader} from './main_import'

import Upload from './pages/Upload.jsx'
// import Video from './Home/InsideHome/Video.jsx'
// import { Calculator } from './Home/InnerSide/Calculater'
// import CurrencyConverter from './Home/InnerSide/currencyConverter'

function App() {
  const router=createBrowserRouter([
   {path:'/', element:<LoginHeader/>,
    children:[
      {path:'', element: <Login/>},
      {path:'/SignIn', element:<SignIn/>}
    ]
   },
   {path:'/mainLayout',element:<MainLayout/>, 
    children:[
      {path:"", element:<Home/>},
      {path:"About", element:<About/>},
      {path:"Contact", element:<Contact/>},
      {path:'Github/:id', element:<Github/>, 
        loader:async ({params})=>{
          const userid=params.id
          const res=await fetch(`https://api.github.com/users/${userid}`)
          return res.json()
        }
      },
      {path:'Upload',element:<Upload/>}
      // {path:'Login/SignIn',element:<SignIn/>}
    ]
   }
    
  ])
  return <RouterProvider router={router}/>
}

export default App
