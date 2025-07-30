import {React, useState} from 'react'
import { Outlet, useBlocker, useNavigate } from 'react-router'
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
      setCustomize(!data);
      navigate('/customize');
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
    // Customize Page
    const [User_data, setUser_data] = useState(NaN);

    const getUser_data = (data) => {
      setUser_data(data);
      setGenerate(true);
      setCustomize(false);
      
      console.log(data);
      navigate('/generate');
    }

    //Customize Page

  return (
    <>
      <div className='md:flex md:flex-row flex flex-col'>
        <div className='md:basis-1/7 md:relative md:w-auto w-svw fixed bottom-0'>
          <Sidebar SideBar={SideBar} SetSideBar={SetSideBar}/>
        </div>
        <div className='md:basis-6/7 h-svh w-svw grid grid-rows-[auto_1fr]'>
          <Navbar Focus={Focus} searchTerm={searchTerm} Topic={Topic} Customize={Customize} Generate={Generate} User_data={User_data}/>
            <div className='h-full'> 
              <Outlet context={{
                Focus,
                searchTerm,
                getsearchTerm,
                getFocus,
                getTopic,
                Topic,
                Customize,
                Generate,
                getUser_data
              }}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default RootLayout