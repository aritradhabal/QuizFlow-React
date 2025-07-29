import React, { useState } from 'react'

function Search({Focus, searchTerm, getsearchTerm, getFocus, getTopic}) {

  const handleFocus = () => { 
    getFocus(true);
  }
  const handleBlur = () => {
    getFocus(false);
  }
  const handleChange = (e) => {
    getsearchTerm(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
    getsearchTerm(searchTerm);
    getTopic(false);
  }

  return (
    <>  
    
        <div className="relative h-12 flex items-center justify-center gap-x-2">
                <form name="form" onSubmit={submit} className='relative h-full md:w-lg w-11/12 '>
                
                    <input onFocus={handleFocus} onBlur={handleBlur} value={searchTerm} onChange={handleChange} className="shadow-md overflow-hidden text-ellipsis duration-400 border-2 border-white transition outline-none placeholder:gray-500 text-black focus:border-pink-400 hover:border-2  rounded-md h-full w-full bg-white px-3 pr-17" type="text" id="search" name="search" minLength={4} maxLength={100} required placeholder='e.g. Machine Learning Algorithms, or a YouTube Link'></input>
                    
                    <button type="submit" className={`rounded-md absolute top-1/2 -translate-y-1/2 right-3 px-2 py-0.5 text-white bg-pink-400 ${searchTerm.length < 4 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>Next</button>

                </form>
        </div>
    </>
  )
}

export default Search