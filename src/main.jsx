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
import ContactUs from './pages/ContactUs.jsx';
import At_Glance from './components/At_Glance.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import SubCategory from './pages/SubCategory.jsx';

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
        element:<PrivateRoute><Allitems></Allitems></PrivateRoute>,
        loader:()=>fetch(`http://localhost:5000/craft`)
      },
      {
        path:'/addCraft',
        element:<PrivateRoute><AddCraft></AddCraft></PrivateRoute>,
      },
      {
        path:'/Craft',
        element:<PrivateRoute><MyCraftList></MyCraftList></PrivateRoute>
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
          path:'/contact',
          element:<ContactUs></ContactUs>,
      },
      {
       path:'/glance',
       element:<At_Glance></At_Glance>,
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader :({params})=>fetch(`http://localhost:5000/craft/${params.id}`)

  },
      {
        path:'/updateCraft/:id',
        element:<UpdateCraft></UpdateCraft>,
        loader:({params})=>fetch(`http://localhost:5000/craft/${params.id}`)
      },
      {
        path:'/sub/:subcategory',
        element:<SubCategory></SubCategory>,
        loader :({params})=>fetch(`http://localhost:5000/craft/${params.subcategory}`)
      

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
