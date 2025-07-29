import React from 'react'
import { useNavigate } from 'react-router'

function Logo() {
  const navigate = useNavigate();
  const logo_click = () => {
      navigate('/')
  }
  return (
    <>  
        <div>
           <button onClick={logo_click} className='cursor-pointer flex items-center justify-start ml-4 mt-3 gap-x-1'>
                <img src='/thunder.svg' alt='app logo' className='w-15' />
                <h2 className='font-bold'>QuizFlow</h2>
            </button> 
        </div>
    </>
  )
}

export default Logo

