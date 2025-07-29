import React from 'react'
import Logo from './Logo'
import Sideitems from './Sideitems'

function Sidebar({SideBar, SetSideBar}) {
  return (
    <>  
        <div className='flex flex-col border-r-1 border-[#E1E7EF] min-h-lvh'>
            <Logo />
            <Sideitems SideBar={SideBar} SetSideBar={SetSideBar}/>
        </div>
    </>
  )
}

export default Sidebar