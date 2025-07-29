import React from 'react'
import Top from './Top'
import Search from './Search'
import Down from './Down'
import Cards from './Cards'
import Footer from './Footer'

function Home({Focus, searchTerm, getsearchTerm, getFocus, getTopic}) {
  return (
    <>

        <div className="HomePage flex flex-col min-h-lvh bg-[#F8F8FB]">
            <div className="flex-grow">
                <Top />
                <Search Focus={Focus} searchTerm={searchTerm} getsearchTerm={getsearchTerm} getFocus={getFocus} getTopic={getTopic}/>
                <Down />
                <Cards />
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Home