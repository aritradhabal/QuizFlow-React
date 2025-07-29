import React from 'react'

function Footer() {
  return (
    <>
        <div className='flex items-center justify-between'>
            <div className='m-2 w-fit' >
                <ul className="flex items-center justify-start gap-x-4 text-gray-500 text-xs">
                    <li>Support</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className='m-2 w-fit'>
                <p className="text-gray-500 text-xs text-center mt-2">
                    &copy; 2025 QuizFlow. All rights reserved.
                </p>
            </div>
        </div>
    
    </>
  )
}

export default Footer