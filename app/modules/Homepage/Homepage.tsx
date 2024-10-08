// @ts-nocheck
'use client'

import { useState, useEffect } from "react"
import HomepageHero from "@/app/common/components/organisms/HomepageHero/HomepageHero"
import BlogFeed from "@/app/common/components/organisms/BlogFeed/BlogFeed"
import CTA from "@/app/common/components/organisms/CTA/CTA"
import { getInvestments } from "@/sanity/sanity-utils"

const Home = () => {
  const [investments, setInvestments] = useState([])

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const investments = await getInvestments()
        const blogFeedListing = investments.map(investment => ({
          image: {
            src: investment.image.src,
            alt: investment.image.alt,
          },
          heading: investment.name,
          caption: investment.category,
          slug: investment.slug,
        }))
        setInvestments(blogFeedListing)
      } catch (error) {
        console.error("Failed to fetch investments:", error)
      }
    }
  
    fetchInvestments()
  }, [])

  const homepageHeroData = {
    heading: "Wzorzec <strong>jakości</strong>",
    caption: "Nowoczesne budownictwo dla Ciebie i Twojej rodziny",
    video: "videos/hero-video.mp4",
  }

  const blogFeedData = {
    heading: "Nasze <br><strong>inwestycje mieszkaniowe</strong>",
    caption: "Zajmujemy się budową oraz sprzedażą mieszkań  i nowoczesnych domów szeregowych w spokojnych, komfortowych lokalizacjach. Nasze inwestycje położone są w Chodzieży i jej okolicach – staramy się, aby nasze budynki wpisywały się w bieżący krajobraz, oferując klientom dostęp do zieleni, bez szkodliwej ingerencji w środowisko naturalne.",
    posts: investments,  // Use state data here
  }

  const CTAData = {
    heading: "Sprzedaż <strong>mieszkań i domów</strong>",
    caption: "ul. Słoneczna 23K <br> 64-800 Chodzież",
    contactInfo: true,
    phone: "+48 601 566 829",
    email: "biuro@firmaszajowski.pl",
  }

  return (
    <main>
      <HomepageHero content={homepageHeroData} />
      <BlogFeed content={blogFeedData} />
      <CTA content={CTAData} />
    </main>
  )
}

export default Home