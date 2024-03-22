import Image from "next/image"
import phoneIcon from "@/public/icons/phone.svg"
import emailIcon from "@/public/icons/mail.svg"
import type { ContactInfoProps } from "./ContactInfo.types"
import "./ContactInfo.scss"

const ContactInfo = ({ phone, email }: ContactInfoProps) => {
  return (
    <article className="contact-info">
      {phone && (
        <p className="contact-info__text">
          <Image src={phoneIcon} alt="phone-icon" height={24} width={24} />
          <a href={`tel:${phone}`}>{phone}</a>
        </p>
      )}

      {email && (
        <p className="contact-info__text">
          <Image src={emailIcon} alt="email-icon" height={24} width={24} />
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      )}
    </article>
  )
}

export default ContactInfo