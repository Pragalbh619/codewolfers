import React from 'react'
import { cdImg } from '../../../assets/mediaCall'

const Slides = () => {
  
  return (
    <div>
      <div className='w-[90%] mx-auto'>
            <div className='flex justify-between my-[5%]' >
                <div className='flex justify-center items-center'>
                    <h1 className=' text-[70px] lxl:text-[50px] sm:hidden font-bold oswald gradient-text'>Wolves of Innovation,<br/>Masters of Code.</h1>
                </div>
                <div>
                    <img className='' src={cdImg.background} alt="" />
                </div>
            </div>
      </div>
    </div>
  )
}

export default Slides

//style={{ background: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)' }}