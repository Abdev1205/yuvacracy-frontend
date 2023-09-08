import Navbar from "@/components/Navbar"
import Hero from "@/components/home/Hero"
import Loading from "../components/Loading"
import dynamic from 'next/dynamic';
const index = () => {
  const HomeComponent = dynamic(() => import('./home'), {
    loading: () => <Loading />,
  });
  const AboutComponent = dynamic(() => import('./about'), {
    loading: () => <Loading />,
  });
  return (
    <>
      <HomeComponent />
    </>
  )
}

export default index
