import React from 'react';

import { Bs1Square } from "react-icons/bs";
import { Bs2Square } from "react-icons/bs";
import { Bs3Square } from "react-icons/bs";

import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <nav className='bg-white'>
       <ul className='flex justify-evenly items-center rounded-xs my-4 text-black'>
          <li className='flex items-center gap-x-2'><Bs1Square/> Enter Topic</li>
          <li className='flex items-center gap-x-2'><Bs2Square/> Customize</li>
          <li className='flex items-center gap-x-2'><Bs3Square/> Generate</li>
       </ul>
      </nav>
    </> 
  )
}

export default Navbar