import React from 'react'
import { useNavigate } from 'react-router'

function Logo() {
  const navigate = useNavigate();
  const logo_click = () => {
      navigate('/')
  }
  return (
    <>  
           <button className='hidden lg:flex' onClick={logo_click}>
                <img src='/thunder.svg' alt='app logo' className='w-5 md:w-10' />
                <h2>QuizFlow</h2>
            </button> 
    </>
  )
}

export default Logo

