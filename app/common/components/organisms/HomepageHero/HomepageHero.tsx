import type { HomepageHeroProps } from './HomepageHero.types'
import Header from '@/app/common/components/molecules/Header/Header'
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'

const HomepageHero = ({ content }: HomepageHeroProps) => {
  return (
    <section className="homepage-hero">
      <Wrapper>
        {/* TODO do i need that div? */}
        <div className="homepage-hero__container">
          <Header
            heading={content.heading}
            headingType='h1'
            caption={content.caption}
          />
          <div className="homepage-hero__background"></div>
        </div>
      </Wrapper>
    </section>
  )
}

export default HomepageHero