// @ts-nocheck
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'
import Image from "next/image"
import ActionButton from '@/app/common/components/atoms/ActionButton/ActionButton'

import "./BlogpostHero.scss"

const BlogpostHero = ({ content }) => {
  // Define default values for content properties
  const subheading = content?.subheading || "Default Subheading"
  const heading = content?.heading || "Default Heading"
  const imageSrc = content?.image?.src || "/path/to/default/image.jpg"
  const imageAlt = content?.image?.alt || "Default Image Alt"
  const headingAnchor = content?.headingAnchor || "/default-link"

  return (
    <section className="blogpost-hero">
      <Wrapper>
        <div className="blogpost-hero__header">
          {subheading && (
            <RichText
              color={"dark"}
              text={subheading}
            />
          )}

          {heading && (
            <Heading
              type="h1"
              text={heading}
              color={"dark"}
            />
          )}
        </div>

        {imageSrc && (
          <Image
            src={imageSrc}
            width={2500}
            height={2000}
            alt={imageAlt}
          />
        )}
      </Wrapper>

      {headingAnchor && (
        <ActionButton as='link' href={headingAnchor} />
      )}
    </section>
  )
}

export default BlogpostHero
