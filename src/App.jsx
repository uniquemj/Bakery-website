import React, { useEffect } from 'react'
import { Header, Menu } from './components/index'
import {AnimatePresence} from "framer-motion";
import { Navbar, Footer,CartContainer } from './container'
import {Outlet} from 'react-router-dom';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';


const App = () => {
  const [{foodItems, cartShow}, dispatch] = useStateValue();

  const fetchData = async () =>{
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems:data
      })
    });
  };

  useEffect(() =>{
    fetchData();
  },[cartShow])
  
  return (

    <AnimatePresence mode='wait'>
      <div className = "w-full h-auto flex flex-col bg-primary overflow-x-hidden">
        <Navbar/>
        {cartShow && 
        <CartContainer/>
        }
        <Outlet/>
        <Footer/>
      </div>
    </AnimatePresence>
  )
}

export default App