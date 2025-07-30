import React from 'react'
import CardsLayout from './Cards/CardsLayout'




function Cards() {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center max-w-full mx-auto ">
                <CardsLayout emoji="plus" title="Mathematics" desc="Calculus and Algebra"/>
                <CardsLayout emoji="laptop" title="Computer Science" desc="Data Structures and Algorithms"/>
                <CardsLayout emoji="robot" title="Artificial Intelligence" desc="Machine Learning Basics"/>
                <CardsLayout emoji="microscope" title="Chemistry" desc="Organic Chemistry Basics"/>
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