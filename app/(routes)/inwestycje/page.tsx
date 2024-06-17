import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"
import ErrorPage from "@/app/common/components/molecules/ErrorPage/ErrorPage"

// TODO temporarly they have to be imported there, before single inwestycja is a module
import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"
// TODO remove these imports then



const InwestycjePage = () => {
  return (
    <>
      <BckgRect placement="center" />
      <Navbar />
      {/* TODO - let's use listing here, instead of error page */}
      <ErrorPage type="500" />
      <Footer />
    </>
  )
}

export default InwestycjePage