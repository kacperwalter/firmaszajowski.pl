import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"
import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import About from "@/app/modules/About/About"

export const metadata = {
    title: "Szajowski - O firmie",
    description: "",
  }
  
  const AboutPage = () => {
    return (
      <>
        <BckgRect placement="right"/>
        <Navbar />
        <About />
        <Footer />
      </>
    )
  }
  
  export default AboutPage