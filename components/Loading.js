import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <>
      <div className=' w-[100%] h-[100vh] flex flex-col justify-center items-center ' >
        <Image
          src={'/assets/yuva-cracy.png'}
          alt={'Logo'} height={500} width={500}
          className=' w-[7rem]  '
        />
        <h1>Loading</h1>
      </div>
    </>
  )
}

export default Loading
