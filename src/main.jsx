import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home,}from './components/index'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom";

import App from './App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App/>}>
      <Route path = '' element = {<Home/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
)
