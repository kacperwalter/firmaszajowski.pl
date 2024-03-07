import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
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
      </>
    )
  }
  
  export default AboutPage