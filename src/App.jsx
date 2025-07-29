import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Sidebar from './components/sidebar/Sidebar'


function App() {
  const [sidebar, setsidebar] = useState("Create");
  return (
    <>
    <div className='flex'>
      <div className='basis-1/6'>
        <Sidebar SideBar={sidebar} SetSideBar={setsidebar}/>
      </div>
        <div className='basis-5/6'>
          <Navbar />
          <Home /> 
        </div>
      </div>
    </>
  )
}

export default App;