import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home,AboutUs, Contact, Login, SignUp}from './components/index'
import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom";

import App from './App'
import { StateProvider } from './context/StateProvider';
import { initialState } from './context/initialState';
import reducer  from './context/reducer';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App/>}>
      <Route path = '' element = {<Home/>}/>
      <Route path="about-us" element = {<AboutUs/>}/>
      <Route path="contact" element = {<Contact/>}/>
      <Route path="login" element = {<Login/>}/>
      <Route path = "signup" element = {<SignUp/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState = {initialState} reducer = {reducer}>
      <RouterProvider router = {router}/>
    </StateProvider>
  </React.StrictMode>
)
