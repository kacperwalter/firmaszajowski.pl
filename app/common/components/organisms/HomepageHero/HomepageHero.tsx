import type { HomepageHeroProps } from './HomepageHero.types'
import Header from '@/app/common/components/molecules/Header/Header'


// TODO - you can pass content to organisms but not to atoms or molecules
const HomepageHero = ({ content }: HomepageHeroProps) => {
  return (
    <section className="homepage-hero">
      <div className="homepage-hero__container">
        <Header
          heading={content.heading}
          headingType='h1'
          caption={content.caption}
        />
        <div className="homepage-hero__background"></div>
      </div>
    </section>
  )
}

export default HomepageHero