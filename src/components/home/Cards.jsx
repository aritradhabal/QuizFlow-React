import React from 'react'
import CardsLayout from './Cards/CardsLayout'




function Cards() {
  return (
    <>
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-2 lg:gap-3 justify-items-center max-w-full mx-auto max-h-[calc(100svh-25rem)] lg:max-h-[calc(100svh-27rem)] xl:max-h-[calc(100svh-30rem)] 2xl:max-h-[calc(100svh-55rem)] overflow-y-auto">
                <CardsLayout emoji="plus" title="Mathematics" desc="Calculus and Algebra"/>
                <CardsLayout emoji="laptop" title="Computer Science" desc="Data Structures and Algorithms"/>
                <CardsLayout emoji="robot" title="Artificial Intelligence" desc="Machine Learning Basics"/>
                <CardsLayout emoji="microscope" title="Chemistry" desc="Organic Chemistry Basics"/>
                <CardsLayout emoji="pig-face" title="English Literature" desc="Animal Farm"/>
                <CardsLayout emoji="dna" title="Biology" desc="Plant Cell Structure"/>
                <CardsLayout emoji="cold-face" title="History" desc="Cold War"/>
                <CardsLayout emoji="red-apple" title="Physics" desc="Newton's Laws of Motion"/>
                <CardsLayout emoji="world-map" title="Geography" desc="World Rivers and Mountains"/>
                <CardsLayout emoji="books" title="Literature" desc="Classic novels & poetry" />
                <CardsLayout emoji="brain" title="Psychology" desc="Behavior and cognition" />
                <CardsLayout emoji="globe-showing-americas" title="World Cultures" desc="Customs & traditions worldwide" />
                <CardsLayout emoji="test-tube" title="Biochemistry" desc="Chemical processes in biology" />
                <CardsLayout emoji="microscope" title="Microbiology" desc="Study of microorganisms" />
                <CardsLayout emoji="saxophone" title="Music Theory" desc="Harmony & composition basics" />
                <CardsLayout emoji="spiral-calendar" title="Chronology" desc="Historical timelines" />
                <CardsLayout emoji="dolphin" title="Marine Biology" desc="Ocean life & ecosystems" />
                <CardsLayout emoji="oil-drum" title="Environmental Science" desc="Energy & pollution study" />


        </div>
    </>
  )
}

export default Cards