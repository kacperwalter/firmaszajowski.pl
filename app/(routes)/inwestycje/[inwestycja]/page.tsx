// @ts-nocheck
'use client'

import { useState, useEffect } from "react"
import { getInvestment } from "@/sanity/sanity-utils"

import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

import BlogpostHero from "@/app/common/components/organisms/BlogpostHero/BlogpostHero"
import FeaturesList from "@/app/common/components/organisms/FeaturesList/FeaturesList"
import BuildingPlan from "@/app/common/components/organisms/BuildingPlan/BuildingPlan"
import ImageAndContent from "@/app/common/components/organisms/ImageAndContent/ImageAndContent"
import BlogCTA from "@/app/common/components/organisms/BlogCTA/BlogCTA"

import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"

type Props = {
  params: { inwestycja: string }
}

const Inwestycja = ({ params }: Props) => {
  const [investment, setInvestment] = useState(null)

  useEffect(() => {
    const fetchInvestment = async () => {
      try {
        const investmentData = await getInvestment(params.inwestycja)
        setInvestment(investmentData)
      } catch (error) {
        console.error("Failed to fetch investment:", error)
      }
    }

    fetchInvestment()
  }, [params.inwestycja])

  if (!investment) {
    return <div>Loading...</div>
  }

  const blogpostHeroContent = {
    heading: investment.heroSection?.heading?.toString() || "Default Heading",
    subheading: investment.name || "Default Subheading",
    image: {
      src: investment.image?.src || "/path/to/default/image.jpg",
      alt: investment.image?.alt || "Default Alt",
    },
    headingAnchor: investment.heroSection?.headingAnchor || "#"
  }

  const featuresListContent = {
    heading: investment.featuresList?.heading || "Default Features Heading",
    caption: investment.featuresList?.caption || "Default Features Caption",
    images: investment.featuresList?.images || [],
    features: investment.featuresList?.features || []
  }

  const buildingPlanContent = {
    heading: investment.buildingPlan?.heading || "Default Building Plan Heading",
    subheading: investment.buildingPlan?.subheading || "Default Building Plan Subheading",
    tabs: investment.buildingPlan?.tabs || []
  }

  const imageAndContentContent = {
    display: investment.imageAndContent?.display || false,
    heading: investment.imageAndContent?.heading || "Default Image And Content Heading",
    caption: investment.imageAndContent?.caption || "Default Image And Content Caption",
    image: investment.imageAndContent?.image || { url: "/path/to/default/image.jpg", alt: "Default Alt" }
  }

  const blogCTAContent = {
    display: investment.blogCTA?.display || false,
    heading: investment.blogCTA?.heading || "Default Blog CTA Heading",
    caption: investment.blogCTA?.caption || "Default Blog CTA Caption",
    buttons: investment.blogCTA?.buttons || [],
    imageGalleryContent: investment.blogCTA?.imageGalleryContent || []
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