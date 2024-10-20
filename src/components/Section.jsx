import React from 'react'
import Banner from './Banner'


function Section({bannerColor, bannerBG, bgImage, bgColor, title, text}) {
  return (
    // container
        <div className='snap-y snap-mandatory h-screen scroll-smooth w-screen'>
            <Banner bgImage = {bannerBG} title = {title} bgColor={bgColor}/>
            <div className={`
                    ${bgImage}
                    '
                    bg-cover
                    flex 
                    items-center 
                    justify-center 
                    snap-start 
                    bg-stone-600 
                    h-4/5
                    text-white
                    '
                    `}>
                        <div className={`
                            ${bgColor}
                            'h-auto
                            w-4/5 
                            rounded-lg
                            opacity-80 
                            grid
                            grid-cols-3
                            snap-end
                            `}>
                            <p className='text-sm text-white p-20 flex items-center justify-center'>{text}</p>
                            <p className='text-sm text-white p-20 flex items-center justify-center'>{text}</p>
                            <p className='text-sm text-white p-20 flex items-center justify-center'>{text}</p>

                        </div>
                </div>
        </div>
  )
}

export default Section