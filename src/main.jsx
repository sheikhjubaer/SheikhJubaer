import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Academics from './components/Academics/Academics';
import Research from './components/Research/Research';
import Teaching from './components/Teaching/Teaching';
import Others from './components/Others/Others';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/academics',
        element: <Academics></Academics>
      },
      {
        path: '/research',
        element: <Research></Research>
      },
      {
        path: '/teaching',
        element: <Teaching></Teaching>
      },
      {
        path: '/others',
        element: <Others></Others>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
