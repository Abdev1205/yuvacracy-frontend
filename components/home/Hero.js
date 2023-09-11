import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiLogoInstagramAlt } from 'react-icons/bi'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className=' select-none w-[100%] md_tablet:flex-row flex-col-reverse md_tablet:py-[2rem] py-[1.5rem] md_tablet:h-[100vh]  h-auto mt-0 relative flex md_tablet:justify-between md_tablet:items-start items-center hero-gradient  z-10 ' >
        <div className=' flex flex-col md_tablet:justify-center gap-[1rem] my-auto h-[100%] md_tablet:w-[50%] w-[100%] sm_desktop:mt-[2rem] mt-[2rem] md_tablet:ml-[5rem] ml-0 md_tablet:items-start items-center  ' >
          <h1 className=' sm_desktop:text-[3rem] lg_phone:text-[2.5rem] text-[1.5rem] md_tablet:text-left text-center  font-montserrat font-[700] text-primary  ' >Developing <span className=' text-secondary '>Youths</span> for a Better Tomorrow</h1>
          <h2 className=' text-[#666]  sm_desktop:text-[1rem] md_tablet:text-left text-center text-[.8rem]  ' >Join us in shaping a better future for the youth community</h2>
          <div className=' flex gap-[1rem] my-[.5rem] sm_desktop:text-[2rem] text-[1.4rem] items-center  ' >

            <BiLogoInstagramAlt className=' text-primary  hover:text-[#ee2a7b] duration-150 cursor-pointer ' />
            <FaTwitter className=' text-primary  hover:text-[#1DA1F2] duration-150 cursor-pointer ' />
            <FaYoutube className=' text-primary  hover:text-[#FF0000] duration-150 cursor-pointer ' />
            <FaFacebookF className=' text-primary hover:text-[#4267B2] duration-150 cursor-pointer ' />
          </div>
          <PrimaryButton data={"Explore Our Programs"} />
        </div>
        <div className=' md_tablet:mt-[2rem] lg_phone:mt-[6rem] mt-[5rem] relative md_tablet:w-[50%] w-[100%] md_tablet:h-[100%] h-auto flex flex-col justify-center md_tablet:items-end items-center' >
          <Image
            src={'/assets/hero-image.svg'}
            alt={'Logo'} height={500} width={500}
            className=' sm_desktop:w-[100%] lg_phone:w-[35rem] w-[24rem] mt-[1rem]  z-[1] '
          />
        </div>

      </div>
    </>
  )
}

export default Hero
