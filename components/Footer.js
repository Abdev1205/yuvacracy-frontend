import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaRegCopyright, FaAngleRight } from "react-icons/fa6"
import { BiLogoInstagramAlt } from 'react-icons/bi'
const Footer = () => {
  return (
    <>
      <div className=' flex flex-col  items-center  bg-[#EEF6FC] w-[100%] h-[auto] pt-[3rem] pb-[1rem] ' >
        <div className=' flex  xl_phone:justify-center justify-start w-[90%] xl_phone:flex-nowrap flex-wrap gap-[2rem] ' >
          <div className=' flex flex-col gap-[1rem] xl_phone:w-auto md_phone:w-[20rem] w-[100%]  ' >
            <Image
              src={'/assets/Yuva-cracy.png'}
              alt={'Logo'} height={500} width={500}
              className='  w-[11rem] md_phone:ml-[-.5rem] '
            />
            <p className=' text-[#6B6B6B] font-openSans font-[400] text-[.9rem] ' >For any inquiries or information, feel free to reach out to us. We're here to assist you.</p>
            <div className=' relative flex items-center border-2 border-primary px-[1rem] py-[.5rem] md_phone:w-fit w-[100%] rounded-md shadow-md ' >
              Email: <input type="email" className=' bg-transparent outline-none ml-[.5rem] ' name="" id="" /> <FaAngleRight className=' absolute right-[.5rem] cursor-pointer  ' />
            </div>
          </div>
          <div className=' flex flex-col gap-[1rem] xl_phone:w-auto md_phone:w-[20rem] w-[100%] ' >
            <div>
              <h2 className=' font-openSans font-[600] text-[1rem] text-black ' >About</h2>
              <p className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >Lorem is a truly unique and independent Program created by local cinephiles</p>
            </div>
            <div>
              <h2 className=' font-openSans font-[600] text-[1rem] text-black ' >Contact Us</h2>
              <p className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >Phone:<span>+91-XXXXXXX</span></p>
              <p className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >Email:<span>info@yuvacracy.org</span></p>
            </div>
            <div>
              <h2 className=' font-openSans font-[600] text-[1rem] text-black ' >Address</h2>
              <p className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >#-94-6/4 dno, abcd Mumbai, Maharashtra</p>
            </div>
          </div>
          <div className=' flex flex-col gap-[1rem] xl_phone:w-[12rem] md_phone:w-[20rem] w-[100%] ' >
            <h2 className='  font-openSans font-[600] text-[1rem] text-black ' >Navigation links</h2>
            <Link href={'/about'} className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >About Us</Link>
            <Link href={'/programmes'} className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >Programmes</Link>
            <Link href={'/contact'} className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >Contact Us</Link>
            <Link href={'/contact'} className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >Join Us</Link>
          </div>
          <div className=' flex flex-col gap-[.1rem] xl_phone ' >
            <h2 className=' font-openSans font-[600] text-[1rem] text-black ' >Follow Us</h2>
            <p className=' text-[#6B6B6B] font-openSans font-[400] tetx-[.9rem] ' >Stay updated with our latest news, events, and initiatives by connecting with us on social media.</p>
            <div className=' flex mt-[1.5rem] gap-[1rem] my-[.5rem]  text-[2rem] items-center  ' >
              <BiLogoInstagramAlt className=' text-primary  hover:text-[#ee2a7b] duration-150 cursor-pointer ' />
              <FaTwitter className=' text-primary  hover:text-[#1DA1F2] duration-150 cursor-pointer ' />
              <FaYoutube className=' text-primary  hover:text-[#FF0000] duration-150 cursor-pointer ' />
              <FaFacebookF className=' text-primary hover:text-[#4267B2] duration-150 cursor-pointer ' />
            </div>
          </div>
        </div>
        <hr className=' mt-[2rem] bg-[#C9C9C9] w-[100%] h-[1.5px] ' />
        <div className=' pt-[1rem] flex  flex-col w-fit gap-[.5rem]  justify-center items-center ' >
          <h2 className=' flex items-center text-center gap-[.3rem] text-[#6B6B6B] font-openSans   ' >Copyright <FaRegCopyright /> <span className='   ' >YuvaCracy Foundation</span> </h2>
          <h3 className=' text-[#6B6B6B] text-[.9rem] text-center ' >Developed by <Link target='blank' href={'https://dev-ab.netlify.app/'} ><span className=' font-openSans font-[600]  text-black underline text-[.9rem] ' >Abhay Mishra</span></Link> & Designed by <Link href={'/contact'} > <span className=' font-openSans font-[600] text-[.9rem] text-black underline ' >S.Eliya</span></Link></h3>
        </div>
      </div>
    </>
  )
}

export default Footer
