import ContactInfo from "@/app/common/components/molecules/ContactInfo/ContactInfo"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Header from "@/app/common/components/molecules/Header/Header"
import type { CTAProps } from "./CTA.types"
import "./CTA.scss"

const CTA = ({ content }: CTAProps) => {
  return (
    <section className="CTA">
      <Wrapper>
        <div className="CTA__container">
          <Header
            heading={content.heading}
            headingType='h2'
            caption={content.caption}
          />

          {(content.contactInfo && content.phone && content.email) && (
            <ContactInfo
              phone={content.phone}
              email={content.email}
            />
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default CTA