import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

import BlogpostHero from "@/app/common/components/organisms/BlogpostHero/BlogpostHero"
import FeaturesList from "@/app/common/components/organisms/FeaturesList/FeaturesList"
import BuildingPlan from "@/app/common/components/organisms/BuildingPlan/BuildingPlan"
import ImageAndContent from "@/app/common/components/organisms/ImageAndContent/ImageAndContent"
import BlogCTA from "@/app/common/components/organisms/BlogCTA/BlogCTA"

// TODO temporarly they have to be imported there, before single inwestycja is a module
import "@/app/common/styles/colors.scss"
import "@/app/common/styles/fonts.scss"
import "@/app/common/styles/globals.scss"
import "@/app/common/styles/spacings.scss"
import "@/app/common/styles/utils/is-hidden.scss"
// TODO remove these imports then

const CTAcontent = {
  heading: "Jeśli interesuję Cię ta nieruchomość <strong>prosimy o kontakt</strong>",
  caption: "<strong>Oferta:</strong><br>- dom o łącznej powierzchni użytkowej 113,8 m2<br>- dom o łącznej powierzchni użytkowej 113,8 m2",
  buttons: [
    {
      text: "Sprawdź standard wykończenia",
      href: "#"
    },
    {
      text: "Zobacz galerię zdjęć",
      href: "#"
    },
  ],
  imageGalleryContent: {
    heading: "Galeria zdjęć inwestycji",
    images: [
      {
        src: "/images/sample-gallery/1.jpeg",
        alt: "alt",
      },
      {
        src: "/images/sample-gallery/2.jpeg",
        alt: "alt",
      },
      {
        src: "/images/sample-gallery/3.jpeg",
        alt: "alt",
      },
    ]
  }
}

const InwestycjePage = () => {
  return (
    <>
      <BckgRect placement="center" />
      <Navbar />
      {/* TODO - move that main into module (like in other pages) */}
      <main>
        <BlogpostHero />
        <FeaturesList />
        <BuildingPlan />
        <ImageAndContent />
        <BlogCTA content={CTAcontent}/>
      </main>
      <Footer />
    </>
  )
}

export default InwestycjePage