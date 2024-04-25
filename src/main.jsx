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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      // <li><Link to="/allArt">All Items</Link></li>
      // <li><Link to="/addCraft">Add Craft Items</Link></li>
      // <li><Link to="/myCraft">My Craft List</Link></li>
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
