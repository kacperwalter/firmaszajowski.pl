// @ts-nocheck
import RichText from '@/app/common/components/atoms/RichText/RichText'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Image from "next/image"
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import "./FeaturesList.scss"

const FeaturesList = ({ content }) => {
  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number
  }

  const caption = content?.caption || "Default Caption"
  const heading = content?.heading || "Default Heading"
  const images = content?.images || []
  const features = content?.features || []

  return (
    <section className="features-list" id="features-list">
      <Wrapper>
        {caption && (
          <RichText color={"dark"} text={caption} />
        )}

        <div className="features-list__info">
          {heading && (
            <Heading type='h1' text={heading} color="dark" />
          )}

          <div className="features-list__images">
            {images[0] && (
              <Image
                src={images[0].url || "/path/to/default/image.jpg"}
                alt={images[0].alt || "Default Alt"}
                width={1000}
                height={1000}
                className="features-list__images--primary"
              />
            )}

            {images[1] && (
              <Image
                src={images[1].url || "/path/to/default/image.jpg"}
                alt={images[1].alt || "Default Alt"}
                width={1000}
                height={1000}
                className="features-list__images--secondary"
              />
            )}
          </div>
        </div>

        <ul className="features-list__list">
          {features.map((item, index) => (
            <li key={index} className="features-list__item">
              <span className="features-list__item-caption">
                <span className="features-list__item--index">{formatNumber(index + 1)}</span>
                <p>{item.caption || "Default Feature Caption"}</p>
              </span>

              {item.icon && (
                <Image
                  src={item.icon.url || "/path/to/default/icon.jpg"}
                  alt={item.caption || "Default Feature Caption"}
                  width={50}
                  height={50}
                  className="features-list__item-icon"
                />
              )}
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default FeaturesList
