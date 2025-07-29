import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Sidebar from './components/sidebar/Sidebar'


function App() {
  const [SideBar, SetSideBar] = useState("Create");
  const [Focus, setFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const getData = (data) => {
    setSearchTerm(data);
  }
  const getFocus = (data) => {
    setFocus(data);
  }
  

  return (
    <>
    <div className='flex'>
      <div className='basis-1/6'>
        <Sidebar SideBar={SideBar} SetSideBar={SetSideBar}/>
      </div>
        <div className='basis-5/6'>
          <Navbar Focus={Focus} searchTerm={searchTerm}/>
          <Home getData={getData} getFocus={getFocus}/> 
        </div>
      </div>
    </>
  )
}

export default App;