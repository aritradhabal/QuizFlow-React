import React from 'react'

function Search() {
  return (
    <>  
    
        <div className="relative h-12 flex items-center justify-center gap-x-2">
                <div className='relative h-full md:w-lg w-11/12 '>
                
                    <input className="shadow-md overflow-hidden text-ellipsis duration-400 border-2 border-white transition outline-none placeholder:gray-500 text-black focus:border-pink-400 hover:border-2  rounded-md h-full w-full bg-white px-3 pr-17" type="text" id="search" name="search" required minLength={4} maxLength={100} placeholder='e.g. Machine Learning Algorithms, or a YouTube Link'></input>
                    
                    <button type="submit" className="cursor-pointer rounded-md absolute top-1/2 -translate-y-1/2 right-3 px-2 py-0.5 text-white bg-pink-400">Next</button>

                </div>
        </div>
    </>
  )
}

export default Search