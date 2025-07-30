import React from 'react'
import { EmojiProvider, Emoji } from "react-apple-emojis"
import emojiData from "react-apple-emojis/src/data.json"

const emoji_element = () =>{
  return (
      <EmojiProvider data={emojiData}>
      <Emoji name="sparkles" width={25} />
    </EmojiProvider>
  )
}

function Top() {
  return (

    <>
      
       <div className='flex flex-col my-10'>

          <div className='flex flex-col items-center-safe'>
            <p className="flex items-center gap-x-0.5 text-black font-semibold">Create a quiz in seconds <span>{emoji_element()}</span></p>
            <p className='text-gray-600'>Enter a learning topic to get started</p>
          </div>
        
        </div> 

    </>

  
  )
}

export default Top
