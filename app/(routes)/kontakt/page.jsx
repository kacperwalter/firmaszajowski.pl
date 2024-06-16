import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import Contact from "@/app/modules/Contact/Contact"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

// TODO CMS
export const metadata = {
  title: "Firma Szajowski - Kontakt",
  description: "",
  alternates: {
    canonical: "https://www.firmaszajowski.pl/",
  },
  openGraph: {
    title: "Firma Szajowski - Kontakt",
    description: "",
    url: "puntmruczenia.pl",
    siteName: "Firma Szajowski",
  }
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