import React from 'react'
import Top from './home/Top'
import Search from './home/Search'
import Down from './home/Down'
import Cards from './home/Cards'
import Footer from './home/Footer'
import { useOutletContext } from 'react-router'

function Home() {

  const {Focus, searchTerm, getsearchTerm, getFocus, getTopic, setSearchBtnClicked} = useOutletContext();

  return (
    <>

        <div className="grid h-full grid-rows-[auto_auto_auto_1fr_auto] bg-[#F8F8FB] gap-y-2">
                <Top />
                <Search Focus={Focus} searchTerm={searchTerm} getsearchTerm={getsearchTerm} getFocus={getFocus} getTopic={getTopic} setSearchBtnClicked={setSearchBtnClicked}/>
                <Down />
                <Cards />
                <Footer />
        </div>
    </>
  )
}

export default Home