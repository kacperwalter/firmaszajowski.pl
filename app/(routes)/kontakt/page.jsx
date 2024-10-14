import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import Contact from "@/app/modules/Contact/Contact"
import KontaktRect from "@/app/common/components/atoms/BackgroundRactangles/KontaktRect/KontaktRect"

// TODO temporarly they have to be imported there, before single inwestycja is a module
import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"
// TODO remove these imports then

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
        <KontaktRect />
        <Navbar />
        <Contact />
        <Footer />
      </>
    )
  }
  
  export default ContactPage