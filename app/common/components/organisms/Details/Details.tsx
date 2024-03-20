import BrandLogo from "@/app/common/components/atoms/BrandLogo/BrandLogo"
import Header from "@/app/common/components/molecules/Header/Header"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import BckgRect from "@/app/common/components/atoms/BckgRect/BckgRect"
import Button from "@/app/common/components/atoms/Button/Button"
import type { DetailsProps } from "./Details.types"
import "./Details.scss"

const Details = ({
  content,
  isReversed = false,
  isHero = false
}: DetailsProps) => {
  isReversed = isHero ? true : isReversed

  return (
    <section className={`details ${isHero ? "details--hero" : ""} ${isReversed ? "details--reverse" : ""}`}>
      <Wrapper>
        <div className="details__content">
          {!isHero && <BrandLogo />}

          <Header
            heading={content.heading}
            headingType={isHero ? "h1" : "h2"}
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

          {isHero && (
            <Button
              as="link"
              text="Poznaj nas"
              href="/"
              arrow
              arrowDirection="down"
            />
          )}
        </div>

        <img
          className="details__image"
          src={content.image}
          alt="Example image" 
        />
      </Wrapper>

      {(!isReversed && !isHero) && <BckgRect placement="left" />}
    </section>
  )
}

export default Details