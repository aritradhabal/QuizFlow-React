import React from 'react'
import CardsLayout from './Cards/CardsLayout'




function Cards() {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 md:gap-2 lg:gap-3 justify-items-center max-w-full mx-auto max-h-90 md:max-h-95 overflow-y-auto">
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