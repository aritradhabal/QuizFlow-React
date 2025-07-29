import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Home from './home/Home'
import Sidebar from './sidebar/Sidebar'
import { useOutletContext } from 'react-router'

function HomePage() {

  const {Focus, searchTerm, getsearchTerm, getFocus, getTopic} = useOutletContext();


  return (
    <>
    
      <Home Focus={Focus} searchTerm={searchTerm} getsearchTerm={getsearchTerm} getFocus={getFocus} getTopic={getTopic} /> 

    </>
  )
}

export default HomePage;