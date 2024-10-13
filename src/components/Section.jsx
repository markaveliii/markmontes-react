import React from 'react'

function Section({bgImage, bgColor, title}) {
  return (
    // container
        <div className='snap-y snap-mandatory h-4/5 w-screen overflow-scroll scroll-smooth'>
            {/* slider */}
                <div className={`
                    ${bgImage}
                    '
                    bg-cover
                    flex 
                    items-center 
                    justify-center 
                    snap-start 
                    bg-stone-600 
                    h-full
                    w-screen
                    text-white
                    '
                    `}>
                        <div className={`
                            ${bgColor}
                            'h-4/5 
                            w-4/5 
                            rounded-lg
                            opacity-80 
                            grid
                            grid-cols-3
                            `}>
                            <p className='flex content-center items-center justify-center text-white text-sm p-20'>{title}</p>
                            <p className='flex content-center items-center justify-center text-white text-sm p-20'>{title}</p>
                            <p className='flex content-center items-center justify-center text-white text-sm p-20'>{title}</p>

                        </div>
                </div>
        </div>
  )
}

export default Section