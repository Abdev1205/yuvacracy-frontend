import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { HiMenu } from 'react-icons/hi'
import { FaXmark } from 'react-icons/fa6'
import { yuvaCracyLogo } from '@/public/assets';
const Navbar = () => {
  const router = useRouter();
  const [scrolly, setScrolly] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrolly(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <Head>
        <title>YuvaCracy</title>
      </Head>
      <nav className={`fixed w-[100%] select-none font-poppins z-50 top-0 md_tablet:pl-[1rem] pl-[0rem] pr-[1rem]  h-[4rem]  duration-150 flex justify-between items-center ${scrolly > 30 ? " shadow-xl bg-white  " : ""}`}>
        <div className='lg_phone:ml-[4rem] ml-[1.4rem] mt-[.5rem] w-fit '>
          <Image
            src={yuvaCracyLogo}
            alt={'Logo'} height={500} width={500}
            className=' w-[7rem]'
          />
        </div>
        <HiMenu onClick={() => setNavOpen(!navOpen)} className=' cursor-pointer text-primary_2 text-[2rem] md_tablet:hidden flex absolute right-[20px] ' />
        <div className={`md_tablet:relative absolute md_tablet:translate-x-[0%] duration-[.3s] ${navOpen ? "translate-x-[0%] hero-gradient " : "translate-x-[-200%]"} top-0 md_tablet:h-auto h-[100vh] w-[100%] md_tablet:w-fit    md_tablet:bg-transparent flex md_tablet:flex-row flex-col pl-0 md_tablet:items-center  md_tablet:mr-[4rem] md_tablet:pl-[0rem] pt-[2rem] md_tablet:pt-[0rem]  `} >
          <FaXmark onClick={() => setNavOpen(!navOpen)} className=' cursor-pointer text-primary_2 text-[2rem] md_tablet:hidden flex absolute right-[30px] top-[23px] w-fit ' />
          <ul className={`flex md_tablet:flex-row  md_tablet:mt-[0rem] mt-[6rem] text-[.9rem] flex-col  items-center md_tablet:gap-[3rem] gap-[.7rem]  select-none`}>

            <Link href="/" >
              <li
                className={`${router.pathname === '/' ? 'border-b-2 border-primaryLight font-[600]' : ' text-[#555]'} inline-block p-2 hover:text-primary transition duration-200 menu-link`}
              >
                Home
              </li>
            </Link>
            <Link href="/about" >
              <li
                className={`${router.pathname === '/about' ? 'border-b-2 border-primaryLight font-[600]' : ' text-[#555]'} inline-block p-2 hover:text-primary transition duration-200 menu-link`}
              >
                About Us
              </li>
            </Link>
            <Link href="/programmes" >
              <li
                className={`${router.pathname === '/programmes' ? 'border-b-2 border-primaryLight font-[600]' : ' text-[#555]'} inline-block p-2 hover:text-primary transition duration-200 menu-link`}
              >
                Programmes
              </li>
            </Link>
            <Link href="/contact" >
              <li
                className={`${router.pathname === '/contact' ? 'border-b-2 border-primaryLight font-[600]' : ' text-[#555]'} inline-block p-2 hover:text-primary transition duration-200 menu-link`}
              >
                Contact
              </li>
            </Link>
            <button className='  border-[1.5px] border-secondary h-[2.5rem] w-[8rem] rounded-md hover:bg-secondary hover:text-white duration-100 ' >Join Us</button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
