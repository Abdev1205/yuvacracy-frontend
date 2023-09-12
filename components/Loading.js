import React from 'react'
import Image from 'next/image'
import { yuvaCracyLogo } from '@/public/assets'

const Loading = () => {
  return (
    <>
      <div className=' w-[100%] h-[100vh] flex flex-col justify-center items-center ' >
        <Image
          src={yuvaCracyLogo}
          alt={'Logo'} height={500} width={500}
          className=' w-[7rem]  '
        />
        <h1>Loading</h1>
      </div>
    </>
  )
}

export default Loading
