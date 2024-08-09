import React from 'react'
import { cdImg } from '../../../assets/mediaCall'

const Introduction = () => {
  return (
    <div>
      <div className='w-[90%] mx-auto my-[5%] '>
        <h1 className="font-bold text-[60px] text-center mb-8 gradient-text
  xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] xs:text-[30px] oswald">Who We Are?</h1>
        <div className='flex py-10 lmd:py-5'>
            <div className='flex justify-center items-center w-[50%] lmd:w-full px-10 montserrat '>
              <p className='text-zinc-500 text-[18px] font-medium text-justify xl:line-clamp-6 lmd:line-clamp-none'>Codewolfers specializes in offering top-notch development services tailored to meet your unique business needs. Our team of skilled professionals is dedicated to delivering high-quality, efficient, and scalable software products that drive success and growth for our clients. At Codewolfers, we believe in bringing your ideas to life with creativity and precision. Our mission is to provide innovative software solutions that enhance your business operations and drive success.</p>
            </div>
            
            <div className='w-[50%] lmd:w-0'>
              <img className='p-5 lmd:hidden' src={cdImg.WhoWeAre} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
