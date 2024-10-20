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
    bg-stone-600 
    text-white
    bg-fixed
    h-1/5

    '`}>    
        <div className={`
            ${bgColor}
            '
            rounded 
            opacity-60 
            flex 
            items-center
            justify-center
            h-3/4
            w-2/4
            '`}>
            <p className='text-white p-20'>{title}</p>
        </div>
</div>
  )
}

export default Banner