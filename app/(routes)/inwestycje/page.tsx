import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

import BlogpostHero from "@/app/common/components/organisms/BlogpostHero/BlogpostHero"
import FeaturesList from "@/app/common/components/organisms/FeaturesList/FeaturesList"

const InwestycjePage = () => {
  return (
    <>
      <BckgRect placement="center" />
      <Navbar />
      {/* TODO - move that main into module (like in other pages) */}
      <main>
        <BlogpostHero />
        <FeaturesList />
      </main>
      <Footer />
    </>
  )
}

export default InwestycjePage