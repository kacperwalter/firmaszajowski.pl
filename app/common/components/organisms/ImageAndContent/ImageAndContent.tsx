import Image from "next/image"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from "@/app/common/components/atoms/RichText/RichText"
import "./ImageAndContent.scss"

type ImageAndContentProps = {
  content: {
    display: boolean;
    heading: string;
    caption: string;
    image: {
      url: string;
      alt: string;
    };
  };
};

const ImageAndContent = ({ content }: ImageAndContentProps) => {
  if (!content.display) {
    return null;
  }

  return (
    <section className="image-and-content">
      <Heading
        type="h2"
        text={content.heading}
        color="dark"
      />

      <Image
        className="image-and-content__image"
        src={content.image.url}
        alt={content.image.alt}
        width={1000}
        height={1000}
      />

      <RichText text={content.caption} />
    </section>
  )
}

export default ImageAndContent
