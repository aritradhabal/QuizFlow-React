import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import { Bs1Circle } from "react-icons/bs";
import { Bs1CircleFill } from "react-icons/bs";

import { Bs2Circle } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";

import { Bs3Circle } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";


function Navbar({Focus, searchTerm}) {

  const [Topic, setTopic] = useState(false);
  const [Customize, setCustomize] = useState(false);
  const [Generate, setGenerate] = useState(false);

  
  return (
    <>
      <nav className='bg-white'>
       <ul className='flex justify-evenly items-center rounded-xs my-4 text-black'>
          <li className='flex items-center gap-x-2'>
            {searchTerm.length > 4 ?
              (!Focus ? <Bs1CircleFill className='animation-pulse duration-300 text-pink-500' /> : <Bs1CircleFill className=' animate-pulse duration-300 text-pink-500' />)
              : (Focus ? <Bs1CircleFill className=' animate-pulse duration-300 text-pink-500' /> : <Bs1Circle className='transition-all duration-300 text-gray-500'/>)  
              }
            Enter Topic
          </li>
          <li className='flex items-center gap-x-2'>
            <Bs2Circle/> Customize
          </li>
          <li className='flex items-center gap-x-2'>
            <Bs3Circle/> Generate
          </li>
       </ul>
      </nav>
    </> 
  )
}

export default Navbar