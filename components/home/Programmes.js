import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image"
import Link from "next/link"
import { FaCheck, FaAngleRight, FaAngleLeft } from "react-icons/fa6"
import { progrmmesIcon1, progrmmesIcon2, progrmmesIcon3, progrmmesIcon4 } from '@/public/assets';
const Programmes = () => {
  const swiperRef = useRef();
  const programmesData = [
    {
      img: progrmmesIcon1,
      title: "Leadership Development",
      desc: "Unlock your leadership potential through our transformative leadership programs designed to nurture confident and responsible leaders.",
      link: "/programmes"
    },
    {
      img: progrmmesIcon2,
      title: "Leadership Development",
      desc: "Unlock your leadership potential through our transformative leadership programs designed to nurture confident and responsible leaders.",
      link: "/programmes"
    },
    {
      img: progrmmesIcon3,
      title: "Leadership Development",
      desc: "Unlock your leadership potential through our transformative leadership programs designed to nurture confident and responsible leaders.",
      link: "/programmes"
    },
    {
      img: progrmmesIcon4,
      title: "Leadership Development",
      desc: "Unlock your leadership potential through our transformative leadership programs designed to nurture confident and responsible leaders.",
      link: "/programmes"
    },
  ]
  return (
    <>
      <div className=' select-none h-[auto] py-[2rem] w-[100%] relative flex md_tablet:flex-row flex-col justify-center items-center programme-section-gradient mt-[3rem]   ' >
        <div className=" h-[100%] sm_desktop:w-[40%] md_tablet:w-[35%] w-[85%] flex flex-col items-start justify-center gap-[1rem] sm_desktop:mr-[-2rem] " >
          <h2 className=" text-white font-montserrat uppercase sm:w-[25rem] font-[700] lg_phone:text-[2.5rem] text-[2rem]  " >Our Impactful Programs</h2>
          <p className=" font-openSans font-[400] sm:w-[29rem] text-[.9rem] text-[#DFDFDF] " >Unlock your leadership potential through our transformative leadership programs designed to nurture confident and responsible leaders.</p>
          <div className=" flex md_tablet:flex-col xsm_tablet:flex-row flex-col gap-[1rem] xsm_tablet:my-[2rem] my-[1rem] " >
            <h2 className=" font-openSans flex items-center font-[500] lg_phone:text-[1.1rem] text-[1rem] gap-[1rem] text-[#C9C9C9] " ><span className="lg_phone:w-[1.7rem] w-[1.4rem] lg_phone:h-[1.7rem] h-[1.4rem] flex justify-center items-center rounded-[50%] bg-green   lg_phone:text-[1.2rem] text-[.9rem] " ><FaCheck className=" text-white " /></span> Expertise and Guidance</h2>
            <h2 className=" font-openSans flex items-center font-[500] lg_phone:text-[1.1rem] text-[1rem] gap-[1rem] text-[#C9C9C9] " ><span className=" lg_phone:w-[1.7rem] w-[1.4rem] lg_phone:h-[1.7rem] h-[1.4rem] flex justify-center items-center rounded-[50%] bg-green  lg_phone:text-[1.2rem] text-[.9rem] " ><FaCheck className=" text-white " /></span>  Tailored Solutions</h2>
          </div>
          <button className={`  w-fit px-[2rem] h-[2.5rem] md_tablet:flex hidden justify-center items-center   bg-secondaryLight hover:bg-secondary text-white rounded-md`} >View More Programs</button>
        </div>
        <div className=" h-[100%] sm_desktop:w-[45%] md_tablet:w-[50%] w-[100%] md_tablet:top-0 top-[18rem]  md_tablet:mr-[0rem] mr-[-10rem] md_tablet:flex hidden flex-row md_tablet:flex-wrap  xl_tablet:justify-center justify-end items-center  " >
          {
            programmesData.map((data, index) => {
              return (
                <div key={index} className=" bg-white w-[15rem] flex flex-col  h-[19rem] rounded-lg shadow-md px-[1rem] py-[1rem] mt-[2rem] mr-[2rem] gap-[0.5rem] " >
                  <Image
                    src={data.img}
                    alt={'Logo'} height={500} width={500}
                    className=' w-[4rem] '
                  />
                  <h2 className=" text-black text-[1rem] font-montserrat font-[600] ">{data.title}</h2>
                  <p className=" text-[#667085] text-[.9rem] font-openSans font-[400] " >{data.desc}</p>
                  <Link href={data.link} className=" text-green font-montserrat text-[.9rem] " >
                    View Program
                    <hr className=" w-[6.7rem] h-[1.9px] bg-green font-montserrat " />
                  </Link>
                </div>
              )
            })
          }
        </div>
        <div className='relative md_tablet:hidden mx-auto w-[90%] '>
          <Swiper
            className=' flex justify-center w-[95%] h-[25rem]  mx-auto'
            slidesPerView={1}
            grabCursor={true}
            style={{
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              862: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              1536: {
                slidesPerView: 3,
              }
            }}
          >
            {programmesData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" hover:cursor-grab bg-white w-[15rem] mx-auto flex flex-col  h-[19rem] rounded-lg shadow-md px-[1rem] py-[1rem] mt-[2rem]  gap-[0.5rem] " >
                    <Image
                      src={data.img}
                      alt={'Logo'} height={500} width={500}
                      className=' w-[4rem] '
                    />
                    <h2 className=" text-black text-[1rem] font-montserrat font-[600] ">{data.title}</h2>
                    <p className=" text-[#667085] text-[.9rem] font-openSans font-[400] " >{data.desc}</p>
                    <Link href={data.link} className=" text-green font-montserrat text-[.9rem] " >
                      View Program
                      <hr className=" w-[6.7rem] h-[1.9px] bg-green font-montserrat " />
                    </Link>
                  </div>
                </SwiperSlide>
              )
            })}


          </Swiper>
          {/* Carousel */}
          <div className=' z-[20] w-[90%] '>
            <div onClick={() => swiperRef.current?.slidePrev()} className=' absolute top-1/2   -translate-y-[85%]    z-10 bg-[#C5F5BF] rounded-full p-4  cursor-pointer  shadow-lg scale-[.8] ' >
              <FaAngleLeft
                className=' text-primary text-[1rem] '
              />
            </div>
            <div onClick={() => swiperRef.current?.slideNext()} className=' absolute top-1/2 right-0 -translate-y-[85%] z-10 bg-[#C5F5BF] rounded-full p-4 cursor-pointer  shadow-lg scale-[.8]  ' >
              <FaAngleRight
                className=' text-primary text-[1rem] '
              />
            </div>
          </div>
        </div>
        <button className={` mt-[2.5rem]  w-fit px-[2rem] h-[2.5rem] md_tablet:hidden flex justify-center items-center  bg-secondaryLight hover:bg-secondary text-white rounded-md`} >View More Programs</button>

      </div>
    </>
  )
}

export default Programmes
