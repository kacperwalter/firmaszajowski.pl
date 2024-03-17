import type { HomepageHeroProps } from './HomepageHero.types'
import Header from '@/app/common/components/molecules/Header/Header'
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import ActionButton from '@/app/common/components/atoms/ActionButton/ActionButton'
import './HomepageHero.scss'

const HomepageHero = ({ content }: HomepageHeroProps) => {
  return (
    <section className="homepage-hero">
      <Wrapper>
        <div className="homepage-hero__container">
          <Header
            heading={content.heading}
            headingType='h1'
            caption={content.caption}
            color='white'
          />
          <video className="homepage-hero__video-background" autoPlay muted loop> 
            <source src={content.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Wrapper>
      
      <ActionButton />
    </section>
  )
}

export default HomepageHero