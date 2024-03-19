import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Header from "@/app/common/components/molecules/Header/Header"
import type { CTAProps } from "./CTA.types"
import "./CTA.scss"

const CTA = ({ content }: CTAProps) => {
  return (
    <section className="CTA">
      <Wrapper>
        <Header
          heading={content.heading}
          headingType='h2'
          caption={content.caption}
        />

        {content.contactInfo && (
          <div className="CTA__contact-info">
            <p>{content.phone}</p>
            <p>{content.email}</p>
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default CTA