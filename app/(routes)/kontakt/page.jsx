import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
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
      </>
    )
  }
  
  export default ContactPage