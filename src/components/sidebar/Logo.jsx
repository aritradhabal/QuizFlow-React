import React from 'react'

function Logo() {
  return (
    <>  
        <div>
           <div className='flex items-center justify-start ml-4 mt-3 gap-x-1'>
                <img src='/thunder.svg' alt='app logo' className='w-15' />
                <h2 className='font-bold'>QuizFlow</h2>
            </div> 
        </div>
    </>
  )
}

export default Logo

