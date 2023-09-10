import Image from "next/image"
import { FaCheck } from "react-icons/fa6"

const WhyChooseUs = () => {
  const whyChooseUsData = [
    {
      title: "Expertise and Guidance",
    },
    {
      title: "Tailored Solutions",
    },
    {
      title: "Social Impact Focus",
    },
    {
      title: "Proven Results",
    },
    {
      title: "Holistic Approach",
    },
  ]
  return (
    <>
      <div className=' flex flex-row-reverse justify-center items-center w-[100%] md_tablet:h-[90vh] h-auto md_tablet:py-0 py-[3rem] gap-[3rem] ' >
        <div className=' flex flex-col justify-center md_tablet:items-start lg_phone:items-center items-start md_tablet:w-[40%] lg_phone:w-[30rem] w-[90%] h-[100%] xl_phone:gap-[2rem] gap-[1.5rem] ' >
          <h2 className="text-primary font-montserrat font-[700] lg_phone:text-[2.5rem] text-[2rem] " >Why Choose Us</h2>
          <Image
            src={'/assets/why-choose-us.svg'}
            alt={'Logo'} height={500} width={500}
            className=' md_tablet:hidden w-[18rem] lg_phone:mx-0 mx-auto '
          />
          <p className="text-[#667085] font-openSans font-[400]  " >At Yuvacracy, we recognize that your path to constructive social change is unique. Here are some of the reasons why we are the appropriate partner to assist you on this revolutionary journey</p>
          <div className=" flex flex-col md_tablet:gap-[2rem] gap-[1.5rem]  " >
            {
              whyChooseUsData.map((data, index) => {
                return (
                  <div key={index} className="  " >
                    <h2 className=" font-openSans mt-[-.5rem] flex items-center font-[600] lg_phone:text-[1.1rem] text-[1rem] gap-[1rem] text-black " ><span className=" lg_phone:w-[1.7rem] w-[1.4rem] lg_phone:h-[1.7rem] h-[1.4rem] flex justify-center items-center rounded-[50%] bg-green   lg_phone:text-[1.1rem] text-[.9rem] " ><FaCheck className=" text-white " /></span> {data.title}</h2>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='md_tablet:flex hidden justify-center items-center w-[45%] h-[100%] ' >
          <Image
            src={'/assets/why-choose-us.svg'}
            alt={'Logo'} height={500} width={500}
            className=' w-[27rem]'
          />
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
