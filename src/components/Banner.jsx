import React from 'react'

function Banner({title , bgImage, bgColor}) {
  return (
    <div className={`
    ${bgImage}
    '
    bg-cover
    flex 
    items-center 
    justify-center 
    snap-start 
    bg-stone-600 
    w-screen
    text-white
    bg-fixed
    h-1/5

    '`}>    
        <div className={`
            ${bgColor}
            '
            rounded 
            opacity-80 
            flex 
            items-center
            justify-center
            h-3/4
            w-3/4
            '`}>
            <p className='text-white p-20'>{title}</p>
        </div>
</div>
  )
}

export default Banner