import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Banner from './components/Banner'

const App = () => {
  //init vars
  const lor = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias maiores corporis laborum non minus reiciendis, at consequatur sequi ad quam! Maxime reprehenderit illum dignissimos architecto unde rem et voluptatibus debitis.'
  
  //return component
  return (
    <>
      
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
            <div className="snap-always snap-center">
              <Navbar />
            </div>
            <div className="snap-always snap-center">
              <Section bannerBG = 'bg-meteorShower' bgImage = 'bg-space' bgColor='bg-cyan-900' title='Title' text={lor}/>
            </div>
            <div className="snap-always snap-center" >
              <Section bannerBG = 'bg-blackRain' bgImage = 'bg-bwBox' bgColor='bg-black' title='Title' text={lor}/>
            </div>
            <div className="snap-always snap-center" >
              <Section bannerBG = 'bg-blackRain' bgImage = 'bg-bwBox' bgColor='bg-black' title='Title' text={lor}/>
            </div>
      </div>
    </>
  )
}

export default App