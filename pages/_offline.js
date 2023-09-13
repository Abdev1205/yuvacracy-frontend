import Image from "next/image";
import { noConnectionImage } from "@/public/assets";
import Link from "next/link";
const Fallback = () => {
  return (
    <div className=' flex justify-center items-center w-[100%] h-[100vh] gap-[1rem]  '>
      <Image
        src={noConnectionImage}
        alt={'Logo'} height={500} width={500}
        className='  w-fit '
      />
      <h2>No Internet Connection</h2>
      <Link href={'/'} className=" w-fit h-[2.5rem] flex justify-center items-center bg-secondary text-white " > Go to home page</Link>

    </div>
  );
}
export default Fallback