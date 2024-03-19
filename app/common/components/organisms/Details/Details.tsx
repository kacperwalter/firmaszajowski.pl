import Header from "@/app/common/components/molecules/Header/Header"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import type { DetailsProps } from "./Details.types"
import "./Details.scss"

const Details = ({ content }: DetailsProps) => {
  return (
    <section className="details">
      <Wrapper>
        <div className="details__content">
          <Header
            heading={content.heading}
            headingType='h2'
            caption={content.caption}
          />
        </div>
        <img src={content.image} alt="Example image" />
      </Wrapper>
    </section>
  )
}

export default Details