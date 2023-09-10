import Navbar from "@/components/Navbar"
import Hero from "@/components/home/Hero"
import About from "@/components/home/About"
import Programmes from "@/components/home/Programmes"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Contact from "@/components/home/Contact"
import Testimonials from "@/components/home/Testimonials"
import Footer from "@/components/Footer"
const home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programmes />
      <WhyChooseUs />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  )
}

export default home
