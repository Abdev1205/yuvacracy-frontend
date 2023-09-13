import React from 'react'
import Image from 'next/image'
import { yuvaCracyLogo } from '@/public/assets'

const Loading = () => {
  return (
    <>
      <div className=' flex justify-center items-center w-[100%] h-[100vh] '>
        <div className="loader blob loading  ">
          <div className=' flex justify-center items-center w-[100%] h-[100%] '>
            <Image
              src={yuvaCracyLogo}
              alt={'Logo'} height={500} width={500}
              className=' w-[80%]   '
            />
          </div>
          <span></span>
        </div>
      </div>

      {/* <div className='   ' >
        <div className=' flex justify-center items-center blob loading w-[10rem] h-[10rem] border-2 border-secondary ' >

        </div>
        <h1>Loading</h1>
      </div> */}
    </>
  )
}

export default Loading
