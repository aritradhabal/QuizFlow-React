import React from 'react'
import CardsLayout from './Cards/CardsLayout'




function Cards() {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center max-w-fit mx-auto ">

                <CardsLayout emoji="pig-face" title="English Literature" desc="Animal Farm"/>
                <CardsLayout emoji="dna" title="Biology" desc="Plant Cell Structure"/>
                <CardsLayout emoji="cold-face" title="History" desc="Cold War"/>
                <CardsLayout emoji="red-apple" title="Physics" desc="Newton's Laws of Motion"/>
                <CardsLayout emoji="world-map" title="Geography" desc="World Rivers and Mountains"/>

        </div>
    </>
  )
}

export default Cards