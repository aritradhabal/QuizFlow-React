import React, { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


import { Bs1Circle } from "react-icons/bs";
import { Bs1CircleFill } from "react-icons/bs";

import { Bs2Circle } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";

import { Bs3Circle } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";

import { BsCheckCircleFill } from "react-icons/bs";
import { useLocation, useNavigate, useOutletContext } from 'react-router';

import { IoArrowBackSharp } from "react-icons/io5";


function Navbar({Focus, searchTerm, Topic, Customize, Generate}) {

  
  const navigate = useNavigate();
  const url = useLocation();

  const goHome = () => {
    navigate('/');
  }
  const goCustomize = () => {
    navigate('/customize');
  }
  const goGenerate = () => {
    navigate('/generate');
  }
  
  

  return (
    <>
      <nav className='max-h-25 text-xs bg-white w-full border-b-1 border-[#E2E8F0] md:text-sm lg:text-base'>
        <div className={url.pathname=== "/customize" || url.pathname === "/generate" ? "flex justify-center items-center h-fit py-1 gap-x-10 border-b-1 border-b-[#E2E8F0]":"hidden"}>
            <p className='font-bold'>{searchTerm}</p>
        </div>
       <div className='flex justify-evenly items-center rounded-xs my-4 text-black '>
          
            <button onClick={goHome} className='cursor-pointer flex items-center justify-center gap-x-2'>
              {url.pathname=== "/create" || url.pathname === "/" ? (
                searchTerm.length > 4 ?
                  (!Focus ? <Bs1CircleFill className='text-pink-500' /> : <Bs1CircleFill className=' animate-pulse duration-300 text-pink-500' />)
                    : (Focus ? <Bs1CircleFill className=' animate-pulse duration-300 text-pink-500' /> : <Bs1CircleFill className='transition-all duration-300 text-gray-500'/>)  
                  ) : (<BsCheckCircleFill className='text-pink-500'/>)
              }
              {url.pathname=== "/create" || url.pathname === "/" ? (
                searchTerm.length > 4 ?
                  (!Focus ? <p className='font-semibold'>Enter Topic</p> : <p className='font-semibold'>Typing</p>)
                    : (Focus ? <p className='font-semibold'>Typing</p> : <p className=''>Enter Topic</p>)  
                  ) : (<p className=''>Completed</p>)
              }
              
          </button>

          <button className='cursor-pointer flex items-center justify-center gap-x-2'>
            {Customize === true && url.pathname=== "/customize" === true ? 
            (<Bs2CircleFill className='animate-pulse duration-300 text-pink-500'/>): Generate === true ? <BsCheckCircleFill className='text-pink-500' /> : (<Bs2CircleFill className='transition-all duration-300 text-gray-500'/>)
             }
            {url.pathname=== "/customize" === true ? <p className='font-semibold'>Customize</p>:<p>Customize</p>}
          </button>

          
          <button className='cursor-pointer flex items-center justify-center gap-x-2'>
            {url.pathname=== "/generate" === true ? 
            (<Bs2CircleFill className='transition-all duration-300 text-pink-500'/>): <Bs2CircleFill className='transition-all duration-300 text-gray-500'/>
             }
            {url.pathname=== "/generate" ? <p className='font-semibold'>Generate</p>:<p>Generate</p>}
          </button>
       </div>
      </nav>
    </> 
  )
}

export default Navbar;