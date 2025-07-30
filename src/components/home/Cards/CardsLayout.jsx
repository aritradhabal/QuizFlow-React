import React from 'react'
import { EmojiProvider, Emoji } from "react-apple-emojis"
import emojiData from "react-apple-emojis/src/data.json"
import { useNavigate, useOutletContext } from 'react-router'



function CardsLayout({emoji, title, desc}) {
  const emoji_element = ({emoji}) =>{
    return (
        <EmojiProvider data={emojiData}>
        <Emoji name={emoji} width={25} />
      </EmojiProvider>
      )
  }
  const {getsearchTerm, getTopic} = useOutletContext(); 
  const cards_click = () => {
    getsearchTerm(desc);
    getTopic(false);
  }
// const CardsLayout = ({emoji, title, desc}) => {
//   const emoji_element = async ({emoji}) =>{
//     return (
//         <EmojiProvider data={emojiData}>
//         <Emoji name={emoji} width={25} />
//       </EmojiProvider>
//       )
//   }

  return (
    <>
      <div onClick={cards_click} className="bg-white h-16 w-70 p-3 text-sm rounded-md flex items-center justify-start gap-x-2.5 border-1 border-[#E2E8F0] hover:bg-[#ecf0f4] duration-400 cursor-pointer">
         <div>{emoji_element({emoji})}</div>
            <div className='flex flex-col justify-center'>
                <div className='text-gray-500'>
                  <p className='w-55 max-h-5 overflow-hidden text-ellipsis whitespace-nowrap'>{title}</p>
                </div>
                <div className='text-black'>
                  <p className='w-55 max-h-5 overflow-hidden text-ellipsis whitespace-nowrap'>{desc}</p>
                </div>
            </div>
      </div>
    </>
  )
}

export default CardsLayout