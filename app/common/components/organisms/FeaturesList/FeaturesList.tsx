// @ts-nocheck
import RichText from '@/app/common/components/atoms/RichText/RichText'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Image from "next/image"
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import "./FeaturesList.scss"


const FeaturesList = ({ content }) => {
  const formatNumber = (number: number) => {
    return number < 10 ? `0${number}` : number
  }

  return (
    <section className="features-list">
      <Wrapper>
        <RichText color={"dark"} text={content.caption} />

        <div className="features-list__info">
          <Heading type='h1' text={content.heading} color="dark" />

          <div className="features-list__images">
            <Image
              src={content.images[0].url}
              alt={content.images[0].alt}
              width={1000}
              height={1000}
              className="features-list__images--primary"
            />

            <Image
              src={content.images[1].url}
              alt={content.images[1].alt}
              width={1000}
              height={1000}
              className="features-list__images--secondary"
            />
          </div>
        </div>

        <ul className="features-list__list">
          {content.features.map((item, index) => (
            <li key={index} className="features-list__item">
              <span className="features-list__item-caption">
                <span className="features-list__item--index">{formatNumber(index + 1)}</span>
                <p>{item.caption}</p>
              </span>

              <Image
                src={item.icon.url}
                alt={item.caption}
                width={50}
                height={50}
                className="features-list__item-icon"
              />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default FeaturesList
