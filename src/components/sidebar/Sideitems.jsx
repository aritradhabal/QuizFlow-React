import React from 'react'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { HiDocumentSearch } from "react-icons/hi";
import { RiQuillPenLine } from "react-icons/ri";
import { RiQuillPenFill } from "react-icons/ri";




function Sideitems({SideBar, SetSideBar}) {
    
    const create=()=>{
        SetSideBar("Create");
    }
    const activity=()=>{
        SetSideBar("Activity");
    }
    const join=()=>{
        SetSideBar("Join");
    }
  return (
    <>
        <div className="flex flex-col justify-center gap-y-2 mt-10 px-5">
            <button onClick={create} className={`Create cursor-pointer flex items-center justify-start transition duration-350 gap-x-2 rounded-sm hover:bg-[#E2E8F0] py-1 px-2 ${SideBar === 'Create' ? 'bg-[#FDEDF7]' : ''}`}>
                {SideBar === 'Create' ? <AiFillThunderbolt className='fill-pink-500'/> : <AiFillThunderbolt className='fill-gray-700'/>}
                <p className='font-medium'>Create</p>
            </button>
            <button onClick={activity} className={`Create cursor-pointer flex items-center justify-start transition duration-350 gap-x-2 rounded-sm hover:bg-[#E2E8F0] py-1 px-2 ${SideBar === 'Activity' ? 'bg-[#FDEDF7]' : ''}`}>
                {SideBar === 'Activity' ? <HiDocumentSearch className='fill-pink-500'/> : <HiDocumentSearch  className=''/>}
                <p className='font-medium'>Activity</p>
            </button>
            <button onClick={join} className={`Create cursor-pointer flex items-center justify-start transition duration-350 gap-x-2 rounded-sm hover:bg-[#E2E8F0] py-1 px-2 ${SideBar === 'Join' ? 'bg-[#FDEDF7]' : ''}`}>
                {SideBar === 'Join' ? <RiQuillPenFill className='fill-pink-500'/> : <RiQuillPenFill className=''/>}
                <p className='font-medium'>Join</p>
            </button>

        </div>  
    </>
  )
}

export default Sideitems