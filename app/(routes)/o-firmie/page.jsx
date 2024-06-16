import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"
import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import About from "@/app/modules/About/About"

// TODO temporarly they have to be imported there, before single inwestycja is a module
import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"
// TODO remove these imports then

// TODO CMS
export const metadata = {
  title: "Firma Szajowski - O firmie",
  description: "",
  alternates: {
    canonical: "https://www.firmaszajowski.pl/",
  },
  openGraph: {
    title: "Firma Szajowski - O firmie",
    description: "",
    url: "puntmruczenia.pl",
    siteName: "Firma Szajowski",
  }
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