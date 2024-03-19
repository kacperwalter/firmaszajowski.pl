import BrandLogo from "@/app/common/components/atoms/BrandLogo/BrandLogo"
import Header from "@/app/common/components/molecules/Header/Header"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"
import type { DetailsProps } from "./Details.types"
import "./Details.scss"

const Details = ({ content, isReversed = false }: DetailsProps) => {
  return (
    <section className={`details ${isReversed ? "details--reverse" : ""}`}>
      <Wrapper>
        <div className="details__content">
          <BrandLogo />
          <Header
            heading={content.heading}
            headingType='h2'
            caption={content.caption}
          />
          {content.icons && (
            <div className="details__icons">
              {content.icons.map((icon, index) => (
                <img
                  key={index}
                  className="details__icon"
                  src={icon}
                  alt="Example icon"
                />
              ))}
            </div>
          )}
        </div>
        <img
          className="details__image"
          src={content.image}
          alt="Example image" 
        />
      </Wrapper>
      {!isReversed && <BckgRect placement="left" />}
    </section>
  )
}

export default Details