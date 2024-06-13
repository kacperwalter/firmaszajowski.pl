import { getInvestment } from "@/sanity/sanity-utils"

import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

import BlogpostHero from "@/app/common/components/organisms/BlogpostHero/BlogpostHero"
import FeaturesList from "@/app/common/components/organisms/FeaturesList/FeaturesList"
import BuildingPlan from "@/app/common/components/organisms/BuildingPlan/BuildingPlan"

// TODO temporarly they have to be imported there, before single inwestycja is a module
import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"
// TODO remove these imports then

type Props = {
  params: { inwestycja: string }
}

// TODO refactor of fetching data into app
const Inwestycja = async ({ params }: Props) => {
  const slug = params.inwestycja
  const investment = await getInvestment(slug)
  // console.log(investment)

  const blogpostHeroContent = {
    heading: investment.heroSection.heading.toString(),
    subheading: investment.name,
    image: {
      src: investment.image.src,
      alt: investment.image.alt,
    },
    headingAnchor: investment.heroSection.headingAnchor,
  }

  const featuresListContent = {
    heading: investment.featuresList.heading,
    caption: investment.featuresList.caption,
    images: investment.featuresList.images,
    features: investment.featuresList.features,
  }

  const buildingPlanContent = {
    heading: investment.buildingPlan.heading,
    subheading: investment.buildingPlan.subheading,
    tabs: investment.buildingPlan.tabs,
  }
  
  return (
    <>
      <BckgRect placement="center" />

      <Navbar />

      <main>
        <BlogpostHero content={blogpostHeroContent} />
        <FeaturesList content={featuresListContent} />
        <BuildingPlan content={buildingPlanContent} />
      </main>

      <Footer />
    </>
  )
}

export default Inwestycja