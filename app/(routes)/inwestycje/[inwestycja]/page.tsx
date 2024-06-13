import { getInvestment } from "@/sanity/sanity-utils"

import Navbar from "@/app/common/components/organisms/Navbar/Navbar"
import Footer from "@/app/common/components/organisms/Footer/Footer"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"

import BlogpostHero from "@/app/common/components/organisms/BlogpostHero/BlogpostHero"

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

const Inwestycja = async ({ params }: Props) => {
  const slug = params.inwestycja
  const investment = await getInvestment(slug)
  console.log(investment.heroSection)

  const blogpostHeroContent = {
    heading: "<strong>Nowe oblicze domu</strong>",
    subheading: investment.name,
    image: {
      src: "/images/lesna-polana.jpg",
      alt: 'alt',
    },
  }
  

  return (
    <>
      <BckgRect placement="center" />

      <Navbar />

      <main>
        <BlogpostHero content={blogpostHeroContent} />
        <div>{investment.name}</div>

      </main>

      <Footer />
    </>
  )
}

export default Inwestycja