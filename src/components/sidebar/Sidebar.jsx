import React from 'react'
import Logo from './Logo'
import Sideitems from './Sideitems'

function Sidebar({SideBar, SetSideBar}) {
  return (
    <>  
        <div className='md:flex md:flex-col border-r-1 border-[#E1E7EF] md:min-h-svh md:min-w-fit w-full'>
            <Logo />
            <Sideitems SideBar={SideBar} SetSideBar={SetSideBar}/>
        </div>
    </>
  )
}

export default Sidebar