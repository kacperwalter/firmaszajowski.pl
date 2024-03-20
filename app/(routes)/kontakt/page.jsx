import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import Contact from "@/app/modules/Contact/Contact"

export const metadata = {
    title: "Szajowski - Kontakt",
    description: "",
  }
  
  const ContactPage = () => {
    return (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  }
  
  export default ContactPage