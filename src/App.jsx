import React from 'react'
import { Header, Menu } from './components/index'
import {AnimatePresence} from "framer-motion";
import { Navbar } from './container'
import {Outlet} from 'react-router-dom';
const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <div className = "w-screen h-auto flex flex-col bg-primary">
        <Navbar/>
        <Outlet/>
      </div>
    </AnimatePresence>
  )
}

export default App