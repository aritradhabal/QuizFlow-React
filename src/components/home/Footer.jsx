import React from 'react'

function Footer() {
  return (
    <>
            <div className='md:flex items-center justify-between hidden'>
                <div className='m-2 w-fit' >
                    <ul className="flex items-center justify-start gap-x-3 text-gray-500 text-xs">
                        <li className='cursor-pointer'>Support</li>
                        <li className='cursor-pointer'>Privacy</li>
                        <li className='cursor-pointer'>Terms</li>
                    </ul>
                </div>
                <div className='m-2'>
                    <p className="text-gray-500 text-xs text-center mt-2 cursor-pointer">
                        &copy; 2025 QuizFlow. All rights reserved.
                    </p>
                </div>
            </div>
    </>
  )
}

export default Footer