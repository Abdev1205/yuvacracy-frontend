import Navbar from "@/components/Navbar"
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import Programmes from "@/components/home/Programmes"
const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programmes />
      <div className=" h-[60rem] ">

      </div>
    </>
  )
}

export default home
