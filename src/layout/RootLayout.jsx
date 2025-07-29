import {React, useState} from 'react'
import { Outlet, useNavigate } from 'react-router'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import HomePage from '../components/HomePage'

function RootLayout() {

    //Navigation
    const navigate = useNavigate();
    //Navigation

    //Sidebar
    const [SideBar, SetSideBar] = useState("Create");
    //Sidebar

    //Navbar
    const [Topic, setTopic] = useState(true);
    const [Customize, setCustomize] = useState(false);
    const [Generate, setGenerate] = useState(false);

    const getTopic = (data) => {
      setTopic(data);
      setCustomize(!data)
      navigate('/customize')
    }
    //Navbar

    // Search
    const [Focus, setFocus] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getFocus = (data) => {
      setFocus(data);
    }
    const getsearchTerm = (data) => {
      setSearchTerm(data);
    }
    // Search

  return (
    <>
      <div className='flex'>
        <div className='basis-1/6'>
          <Sidebar SideBar={SideBar} SetSideBar={SetSideBar}/>
        </div>
        <div className='basis-5/6'>
          <Navbar Focus={Focus} searchTerm={searchTerm} Topic={Topic} Customize={Customize} Generate={Generate} />
          <Outlet context={{
            Focus,
            searchTerm,
            getsearchTerm,
            getFocus,
            getTopic,
            Topic,
            Customize,
            Generate
          }}/> 
        </div>
      </div>
    </>
  )
}

export default RootLayout