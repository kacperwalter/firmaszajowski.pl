import Image from "next/image"
import phoneIcon from "@/public/icons/phone.svg"
import emailIcon from "@/public/icons/mail.svg"
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
            <p className="CTA__contact-info-text"><Image src={phoneIcon} alt="phone-icon" height={24} width={24} /> {content.phone}</p>
            <p className="CTA__contact-info-text"><Image src={emailIcon} alt="email-icon" height={24} width={24} /> {content.email}</p>
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default CTA