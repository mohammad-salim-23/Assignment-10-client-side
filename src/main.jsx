import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import Allitems from './pages/Allitems.jsx';
import AddCraft from './pages/AddCraft.jsx';
import MyCraftList from './pages/MyCraftList.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import ViewDetails from './pages/ViewDetails.jsx';
import UpdateCraft from './components/UpdateCraft.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch(`http://localhost:5000/craft`)
      },
     
      {
        path:'/allArt',
        element:<Allitems></Allitems>,
      },
      {
        path:'/addCraft',
        element:<AddCraft></AddCraft>,
      },
      {
        path:'/myCraft',
        element:<MyCraftList></MyCraftList>
      },
      {
        path:'/signin',
        element:<SignIn></SignIn>,
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>,
      },
      {
        path:'/details/:id',
        element:<ViewDetails></ViewDetails>,
        loader :({params})=>fetch(`http://localhost:5000/craft/${params.id}`)

      },
      {
        path:'/updateCraft/:id',
        element:<UpdateCraft></UpdateCraft>,
        loader:({params})=>fetch(`http://localhost:5000/craft/${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
