// @ts-nocheck
import { getInvestment } from "@/sanity/sanity-utils"

import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

import BlogpostHero from "@/app/common/components/organisms/BlogpostHero/BlogpostHero"
import FeaturesList from "@/app/common/components/organisms/FeaturesList/FeaturesList"
import BuildingPlan from "@/app/common/components/organisms/BuildingPlan/BuildingPlan"
import ImageAndContent from "@/app/common/components/organisms/ImageAndContent/ImageAndContent"
import BlogCTA from "@/app/common/components/organisms/BlogCTA/BlogCTA"

// TODO temporarily they have to be imported there, before single inwestycja is a module
import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"
// TODO remove these imports then

type Props = {
  params: { inwestycja: string }
}

// TODO let's refactor it and do it better 
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.inwestycja
  const investment = await getInvestment(slug)

  return {
    title: investment?.pageTitle || "Firma Szajowski",
    description: investment?.metaDescription || "",
    alternates: {
      canonical: `https://www.firmaszajowski.pl/inwestycje/${investment?.slug || ""}`,
    },
    openGraph: {
      title: investment?.pageTitle || "Firma Szajowski",
      description: investment?.metaDescription || "",
      url: `https://www.firmaszajowski.pl/inwestycje/${investment?.slug || ""}`,
      siteName: "Firmaszajowski",
    }
  }
}

// TODO refactor of fetching data into app
const Inwestycja = async ({ params }: Props) => {
  const slug = params.inwestycja
  const investment = await getInvestment(slug)
  
  const blogpostHeroContent = {
    heading: investment?.heroSection?.heading?.toString() || "Default Heading",
    subheading: investment?.name || "Default Subheading",
    image: {
      src: investment?.image?.src || "/path/to/default/image.jpg",
      alt: investment?.image?.alt || "Default Alt",
    },
    headingAnchor: investment?.heroSection?.headingAnchor || "#"
  }

  const featuresListContent = {
    heading: investment?.featuresList?.heading || "Default Features Heading",
    caption: investment?.featuresList?.caption || "Default Features Caption",
    images: investment?.featuresList?.images || [],
    features: investment?.featuresList?.features || []
  }

  const buildingPlanContent = {
    heading: investment?.buildingPlan?.heading || "Default Building Plan Heading",
    subheading: investment?.buildingPlan?.subheading || "Default Building Plan Subheading",
    tabs: investment?.buildingPlan?.tabs || []
  }

  const imageAndContentContent = {
    display: investment?.imageAndContent?.display || false,
    heading: investment?.imageAndContent?.heading || "Default Image And Content Heading",
    caption: investment?.imageAndContent?.caption || "Default Image And Content Caption",
    image: investment?.imageAndContent?.image || { url: "/path/to/default/image.jpg", alt: "Default Alt" }
  }

  const blogCTAContent = {
    display: investment?.blogCTA?.display || false,
    heading: investment?.blogCTA?.heading || "Default Blog CTA Heading",
    caption: investment?.blogCTA?.caption || "Default Blog CTA Caption",
    buttons: investment?.blogCTA?.buttons || [],
    imageGalleryContent: investment?.blogCTA?.imageGalleryContent || []
  }
  
  return (
    <>
      <BckgRect placement="center" />

      <Navbar />

      <main>
        <BlogpostHero content={blogpostHeroContent} />
        <FeaturesList content={featuresListContent} />
        <BuildingPlan content={buildingPlanContent} />
        <ImageAndContent content={imageAndContentContent} />
        <BlogCTA content={blogCTAContent} />
      </main>

      <Footer />
    </>
  )
}

export default Inwestycja
