import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import ErrorPage from "@/app/common/components/molecules/ErrorPage/ErrorPage"

export const metadata = {
    title: "Szajowski - Strony nie odnaleziono",
    description: "Strony nie odnaleziono",
  }
  
  const ContactPage = () => {
    return (
      <>
        <Navbar />
          <ErrorPage type="404" />
        <Footer />
      </>
    )
  }
  
  export default ContactPage