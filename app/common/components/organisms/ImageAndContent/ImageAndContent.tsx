// @ts-nocheck
import Image from "next/image";
import Heading from '@/app/common/components/atoms/Heading/Heading';
import RichText from "@/app/common/components/atoms/RichText/RichText";
import "./ImageAndContent.scss";

type ImageAndContentProps = {
  content: {
    display?: boolean;
    heading?: string;
    caption?: string;
    image?: {
      url?: string;
      alt?: string;
    };
  };
};

const ImageAndContent = ({ content }: ImageAndContentProps) => {
  if (!content?.display) {
    return null;
  }

  const heading = content?.heading || "Default Heading";
  const caption = content?.caption || "Default Caption";
  const imageUrl = content?.image?.url || "/path/to/default/image.jpg";
  const imageAlt = content?.image?.alt || "Default Alt Text";

  return (
    <section className="image-and-content">
      <Heading
        className="image-and-content__heading"
        type="h2"
        text={heading}
        color="dark"
      />
      <div className="image-and-content__image-wrapper">
        <Image
          className="image-and-content__image"
          src={imageUrl}
          alt={imageAlt}
          width={1000}
          height={1000}
        />
      </div>
      <RichText
        className="image-and-content__rich-text"
        text={caption}
      />
    </section>
  );
};

export default ImageAndContent;