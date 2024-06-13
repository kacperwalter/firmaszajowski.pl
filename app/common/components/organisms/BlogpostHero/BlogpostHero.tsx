// @ts-nocheck
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'
import Image from "next/image"
import ActionButton from '@/app/common/components/atoms/ActionButton/ActionButton'

import "./BlogpostHero.scss"


const BlogpostHero = ({ content }) => {
  return (
    <section className="blogpost-hero">
        <Wrapper>
          <div className="blogpost-hero__header">
            <RichText
              color={"dark"}
              text={content.subheading}
            />

            <Heading
              type="h1"
              text={content.heading}
              color={"dark"}
            />
          </div>

          <Image
            src={content.image.src}
            width={2500}
            height={2000}
            alt={content.image.alt}
          />
        </Wrapper>

        <ActionButton as='link' href={content.headingAnchor} />
    </section>
  )
}

export default BlogpostHero  