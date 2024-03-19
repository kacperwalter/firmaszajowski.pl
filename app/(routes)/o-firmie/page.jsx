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
        <Navbar />
        <About />
        <Footer />
      </>
    )
  }
  
  export default AboutPage