import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FaCheck, FaAngleRight, FaAngleLeft } from "react-icons/fa6"
import Link from 'next/link';
import Image from 'next/image';

const Testimonials = () => {
  const swiperRef = useRef();
  const testimonialsData = [
    {
      img: "/assets/person.png",
      title: "Michael Johnson",
      occupation: "Small Business Owner",
      rating: "4.5/5",
      desc: "I've attended several workshops and webinars by Yuvacracy, and each time, I've come away with practical knowledge I could immediately apply to my business. Their commitment to education is commendable.",
    },
    {
      img: "/assets/person.png",
      title: "Michael Johnson",
      occupation: "Small Business Owner",
      rating: "4.5/5",
      desc: "I've attended several workshops and webinars by Yuvacracy, and each time, I've come away with practical knowledge I could immediately apply to my business. Their commitment to education is commendable.",
    },
    {
      img: "/assets/person.png",
      title: "Michael Johnson",
      occupation: "Small Business Owner",
      rating: "4.5/5",
      desc: "I've attended several workshops and webinars by Yuvacracy, and each time, I've come away with practical knowledge I could immediately apply to my business. Their commitment to education is commendable.",
    },
    {
      img: "/assets/person.png",
      title: "Michael Johnson",
      occupation: "Small Business Owner",
      rating: "4.5/5",
      desc: "I've attended several workshops and webinars by Yuvacracy, and each time, I've come away with practical knowledge I could immediately apply to my business. Their commitment to education is commendable.",
    },
    {
      img: "/assets/person.png",
      title: "Michael Johnson",
      occupation: "Small Business Owner",
      rating: "4.5/5",
      desc: "I've attended several workshops and webinars by Yuvacracy, and each time, I've come away with practical knowledge I could immediately apply to my business. Their commitment to education is commendable.",
    },
    {
      img: "/assets/person.png",
      title: "Michael Johnson",
      occupation: "Small Business Owner",
      rating: "4.5/5",
      desc: "I've attended several workshops and webinars by Yuvacracy, and each time, I've come away with practical knowledge I could immediately apply to my business. Their commitment to education is commendable.",
    },
  ]
  return (
    <>
      <div className=' flex flex-col w-[100%] sm:mt-[6rem] mt-[3rem] ' >
        <h3 className=' mx-auto text-secondary text-center font-montserrat font-[400]  ' >TESTIMONIALS</h3>
        <h2 className='mx-auto sm:mt-0 mt-[.8rem] text-primaryLight font-montserrat text-center text-[2.5rem] uppercase font-[700] ' >Hear from Our Community</h2>
        <div className='relative sm:mt-[3rem] mt-[2rem]  mx-auto xl_phone:w-[80%] w-[100%] '>
          <Swiper
            className=' flex justify-center w-[95%] h-[21rem]   mx-auto'
            slidesPerView={1}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            style={{
              "--swiper-pagination-color": "#003366",
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 600,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
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
            {testimonialsData.map((data, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" hover:cursor-grab bg-primary lg_phone:w-[25rem] w-[90%] mx-auto flex flex-col justify-center lg_phone:h-[15rem] h-auto rounded-lg  px-[1rem] py-[1rem] mt-[2rem]  gap-[0.5rem] " >
                    <div className=' flex justify-between items-center ' >
                      <div className=' flex items-center gap-[1rem] ' >
                        <Image
                          src={data.img}
                          alt={'Logo'} height={500} width={500}
                          className=' w-[3rem] '
                        />
                        <div className=' flex flex-col ' >
                          <h2 className=' text-white font-montserrat text-[.9rem] ' >{data.title}</h2>
                          <p className=' text-[#C8C8C8] font-openSans text-[.8rem] ' >{data.occupation}</p>
                        </div>


                      </div>
                      <div>
                        <h3 className=' text-white font-openSans text-[.95rem] ' >{data.rating}</h3>
                      </div>
                    </div>
                    <p className=" text-[#8a8a8a] text-[.89rem] font-openSans font-[400] " >{data.desc}</p>
                    <Link href={"/contact"} className=" text-green font-openSans text-[.8rem] " >
                      Read More
                      <hr className=" w-[4.3rem] h-[1.4px] bg-green  " />
                    </Link>
                  </div>
                </SwiperSlide>
              )
            })}


          </Swiper>
          {/* Carousel */}
          <div className=' w-[100%] flex justify-center  z-[20] mt-[3rem] '>
            <div onClick={() => swiperRef.current?.slidePrev()} className='    -translate-y-[85%]    z-10  rounded-full p-4  cursor-pointer border-black hover:bg-primary text-primary hover:text-white duration-150  border-[1px] shadow-lg scale-[.8] ' >
              <FaAngleLeft
                className='  text-[1rem] '
              />
            </div>
            <div onClick={() => swiperRef.current?.slideNext()} className='   -translate-y-[85%] z-10  rounded-full p-4 cursor-pointer border-black border-[1px] hover:bg-primary text-primary hover:text-white duration-150 shadow-lg scale-[.8]  ' >
              <FaAngleRight
                className='  text-[1rem] '
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
