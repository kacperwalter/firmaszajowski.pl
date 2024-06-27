import Image from "next/image"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from "@/app/common/components/atoms/RichText/RichText"
import "./ImageAndContent.scss"

type ImageAndContentProps = {
  content: {
    display?: boolean
    heading?: string
    caption?: string
    image?: {
      url?: string
      alt?: string
    }
  }
}

const ImageAndContent = ({ content }: ImageAndContentProps) => {
  if (!content?.display) {
    return null
  }

  const heading = content?.heading || "Default Heading"
  const caption = content?.caption || "Default Caption"
  const imageUrl = content?.image?.url || "/path/to/default/image.jpg"
  const imageAlt = content?.image?.alt || "Default Alt Text"

  return (
    <section className="image-and-content">
      <Heading
        type="h2"
        text={heading}
        color="dark"
      />

      <Image
        className="image-and-content__image"
        src={imageUrl}
        alt={imageAlt}
        width={1000}
        height={1000}
      />

      <RichText text={caption} />
    </section>
  )
}

export default ImageAndContent
