import React from 'react'
import Image from 'next/image'
import { underConstructionImage } from '@/public/assets'
const Under = () => {
  return (
    <>
      <div className=' flex w-[100%] h-[90vh] justify-center items-center  ' >
        <Image
          src={underConstructionImage}
          alt={'underConstructionImage'} height={500} width={500}
          className='  w-fit   '
        />
      </div>
    </>
  )
}

export default Under
