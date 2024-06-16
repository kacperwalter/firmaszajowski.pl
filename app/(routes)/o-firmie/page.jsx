import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"
import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import About from "@/app/modules/About/About"

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