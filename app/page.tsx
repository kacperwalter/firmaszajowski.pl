import Homepage from "@/app/modules/Homepage/Homepage"
import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"

const Home = () => {
  return (
    <>
      <BckgRect placement="left" />
      <Navbar />
      <Homepage />
      <Footer />
    </>
  )
}

export default Home