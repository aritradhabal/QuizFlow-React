import React from 'react'
import Top from './Top'
import Search from './Search'
import Down from './Down'
import Cards from './Cards'
import Footer from './Footer'

function Home({Focus, searchTerm, getsearchTerm, getFocus, getTopic}) {
  return (
    <>

        <div className="grid min-h-full grid-rows-[auto_auto_auto_auto_1fr_auto] bg-[#F8F8FB] gap-y-2">
                <Top />
                <Search Focus={Focus} searchTerm={searchTerm} getsearchTerm={getsearchTerm} getFocus={getFocus} getTopic={getTopic}/>
                <Down />
                <Cards />
                <div></div>
                <Footer />
        </div>
    </>
  )
}

export default Home