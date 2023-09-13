import React from 'react'

const SecondaryButton = ({ data }) => {
  return (
    <>
      <button onClick={handleDownload} className=" w-fit px-[1rem] h-[2.5rem] bg-green hover:bg-[#226f31] text-white rounded-md" >{data}</button>
    </>
  )
}

export default SecondaryButton
