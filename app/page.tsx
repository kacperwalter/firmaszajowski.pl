import Homepage from "@/app/modules/Homepage/Homepage"
import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

const Home = () => {
  return (
    <>
      <BckgRect placement="left" />
      {/* <Navbar /> */}
      <Homepage />
      <Footer />
    </>
  )
}

export default Home