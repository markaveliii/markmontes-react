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
            <Banner bgImage = 'bg-meteorShower' title = 'FileMaker Experience'/>
            <div className="snap-always snap-center">
              <Section bgImage = 'bg-space' bgColor='bg-cyan-900' title={lor}/>
            </div>
            <Banner bgImage = 'bg-blackRain' title = 'Software Experience'/>
            <div className="snap-always snap-center" >
              <Section bgImage = 'bg-bwBox' bgColor='bg-black' title={lor}/>
            </div>
            <Banner bgImage = 'bg-goldLight' title = 'Contact' bgColor = 'bg-yellow-700'/>
            <div className="snap-always snap-center" >
              <Section bgImage = 'bg-goldForest' bgColor='bg-yellow-900' title={lor}/>
            </div>
      </div>
    </>
  )
}

export default App