import Image from "next/image"
import SecondaryButton from "../SecondaryButton"
import PrimaryButton from "../PrimaryButton"
const Contact = () => {
  return (
    <>
      <div className=" select-none mx-auto flex sm:justify-evenly xl_phone:w-[80%] w-[100%] h-[auto] py-[2rem] sm:px-[1.5rem] xl_phone:rounded-[1rem] contact-us-gradient    " >
        <div className=" flex flex-col justify-center sm:items-start  mx-auto sm:w-[38%] md_phone:w-[22rem] w-[90%] gap-[1rem] " >
          <h2 className="text-white font-montserrat font-[700] lg_phone:text-[2.5rem] text-[2rem]" >Contact us</h2>
          <Image
            src={'/assets/contact-us.svg'}
            alt={'Logo'} height={500} width={500}
            className=' sm:hidden flex  w-[18rem]  '
          />
          <p className=" text-[#D8D5D5] text-[.9rem] font-openSans font-[400] mb-[1rem]  " >Do you have inquiries or wish to learn more about YuvaCracy? Please do not hesitate to contact us. Please get in touch with us.</p>
          <div>
            <PrimaryButton data={"Contact Us"} />
          </div>
        </div>
        <div className=" sm:flex hidden justify-center w-[40%]  " >
          <Image
            src={'/assets/contact-us.svg'}
            alt={'Logo'} height={500} width={500}
            className='   w-[28rem]  '
          />
        </div>
      </div>
    </>
  )
}

export default Contact
