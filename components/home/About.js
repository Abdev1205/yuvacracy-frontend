import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { aboutUSImage } from '@/public/assets'
const About = () => {
  return (
    <>
      <div className=' select-none flex xl_phone:flex-row flex-col justify-center w-[100%] h-[100%] mt-[3rem]  ' >
        <div className=' xl_phone:flex w-[40%] h-[100%] hidden items-center ' >
          <Image
            src={aboutUSImage}
            alt={'Logo'} height={500} width={500}
            className=' w-[27rem]'
          />
        </div>
        <div className=' flex flex-col xl_phone:items-start lg_phone:items-center items-start lg_phone:px-0 pl-[1.5rem]  justify-center h-[auto] xl_phone:w-[40%] w-[95%] xl_phone:gap-[2rem] gap-[.5rem] ' >
          <h2 className=' text-primary font-montserrat font-[700] lg_phone:text-[2.5rem] text-[2rem] ' >ABOUT US</h2>
          <Image
            src={'/assets/about-us1.svg'}
            alt={'Logo'} height={500} width={500}
            className=' xl_phone:hidden hidden mt-[-2.5rem]  lg_phone:w-[20rem] w-[15rem] '
          />
          <p className=' text-[#667085] font-openSans font-[400] xl_phone:w-[100%] sm:w-[30rem] w-[95%]  ' >The mission of the Mumbai, Maharashtra-based YuvaCracy Foundation, a youth-led organization, is to promote the growth and development of young people. We act as a vibrant space for young minds to interact, engage, and have fun while building a powerful network of change-makers. Our commitment is to support youth-friendly legislation, mobilize young people for significant social projects, and deliver effective development programs.</p>
          <Link href={'/about'} className=' font-montserrat font-[500] lg_phone:mt-[0rem] mt-[0rem] flex-col items-center text-green text-[1rem] gap-[0rem]  ' >
            <h2 className=' flex items-center gap-[.5rem] ' >
              Learn More
              <MdOutlineArrowOutward className='  text-[1.2rem] font-[400] ' />
            </h2>
            <hr className=' bg-green h-[1.9px] w-[8rem] mt-[.4rem] ' />
          </Link>
        </div>

      </div>
    </>
  )
}

export default About
