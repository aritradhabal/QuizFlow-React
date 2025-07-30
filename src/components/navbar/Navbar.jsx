import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import { Bs1Circle } from "react-icons/bs";
import { Bs1CircleFill } from "react-icons/bs";

import { Bs2Circle } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";

import { Bs3Circle } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";

import { BsCheckCircleFill } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router';

import { IoArrowBackSharp } from "react-icons/io5";


function Navbar({Focus, searchTerm, Topic, Customize, Generate}) {
  
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  }

  const url = useLocation();
  

  return (
    <>
      <nav className='text-xs bg-white w-full border-b-1 border-gray-300 md:text-sm lg:text-base'>
        <div className={url.pathname=== "/customize" === true ? "flex justify-center items-center h-fit py-1 gap-x-10 border-b-1 border-b-[#E2E8F0]":"hidden"}>
            <button onClick={goHome} className='absolute md:left-1/6 left-2 cursor-pointer flex items-center justify-center gap-x-2 hover:bg-[#F1F1F4] rounded-sm px-2'>
              <IoArrowBackSharp/>
              <p>Back</p>
            </button>
            <p className='font-bold'>{searchTerm}</p>
        </div>
       <ul className='flex justify-evenly items-center rounded-xs my-4 text-black '>
          
            <li className='flex items-center justify-center gap-x-2'>
              {url.pathname=== "/create" || url.pathname === "/" ? (
                searchTerm.length > 4 ?
                  (!Focus ? <Bs1CircleFill className='text-pink-500' /> : <Bs1CircleFill className=' animate-pulse duration-300 text-pink-500' />)
                    : (Focus ? <Bs1CircleFill className=' animate-pulse duration-300 text-pink-500' /> : <Bs1CircleFill className='transition-all duration-300 text-gray-500'/>)  
                  ) : (<BsCheckCircleFill className='text-pink-500'/>)
              }
              {url.pathname=== "/create" || url.pathname === "/" ? <p className='font-semibold'>Enter Topic</p>:<p>Enter Topic</p>}
          </li>

          <li className='flex items-center justify-center gap-x-2'>
            {url.pathname=== "/customize" === true ? 
            (<Bs2CircleFill className='animate-pulse duration-300 text-pink-500'/>): <Bs2CircleFill className='transition-all duration-300 text-gray-500'/>
             }
            {url.pathname=== "/customize" === true ? <p className='font-semibold'>Customize</p>:<p>Customize</p>}
          </li>
          <li className='flex items-center justify-center gap-x-2'>
            {url.pathname=== "/generate" === true ? 
            (<Bs2CircleFill className='transition-all duration-300 text-pink-500'/>): <Bs2CircleFill className='transition-all duration-300 text-gray-500'/>
             }
            {url.pathname=== "/generate" ? <p className='font-semibold'>Generate</p>:<p>Generate</p>}
          </li>
       </ul>
      </nav>
    </> 
  )
}

export default Navbar;