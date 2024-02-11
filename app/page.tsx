import Homepage from "@/app/modules/Homepage/Homepage"
import Navbar from "@/app/common/components/organisms/Navbar/Navbar"

// TODO - import them here or in layout.tsx?
import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"

const Home = () => {
  return (
    <>
      <Navbar />
      <Homepage />
    </>
  )
}

export default Home