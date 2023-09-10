import Navbar from "@/components/Navbar"
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import Programmes from "@/components/home/Programmes"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Contact from "@/components/home/Contact"
const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programmes />
      <WhyChooseUs />
      <Contact />
      <div className=" h-[60rem] ">

      </div>
    </>
  )
}

export default home
