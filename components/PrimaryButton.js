

const PrimaryButton = ({ data, show }) => {
  return (
    <>
      <button className={` ${show ? "hidden" : ""} w-fit px-[2rem] h-[2.5rem]  bg-secondaryLight hover:bg-secondary text-white rounded-md`} >{data}</button>
    </>
  )
}

export default PrimaryButton
