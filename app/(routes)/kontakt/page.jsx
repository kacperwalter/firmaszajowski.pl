import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import Contact from "@/app/modules/Contact/Contact"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

export const metadata = {
    title: "Szajowski - Kontakt",
    description: "",
  }
  
  const ContactPage = () => {
    return (
      <>
        <BckgRect placement="left" />
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  }
  
  export default ContactPage