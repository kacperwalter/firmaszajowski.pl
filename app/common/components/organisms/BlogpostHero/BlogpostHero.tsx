import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'
import Image from "next/image"
import ActionButton from '@/app/common/components/atoms/ActionButton/ActionButton'

const header = {
  heading: "<strong>Nowe oblicze domu</strong>",
  subheading: "Leśna polana",
}

const image = {
  src: "/images/lesna-polana.jpg",
  alt: 'alt',
}

const BlogpostHero = () => {
  return (
    <section className="blogpost-hero">
        <Wrapper>
          <div className="blogpost-hero__header">
            <RichText
              color={"dark"}
              text={header.subheading}
            />

            <Heading
              type="h1"
              text={header.heading}
              color={"dark"}
            />
          </div>

          <Image
            src={image.src}
            width={2500}
            height={2000}
            alt={image.alt}
          />
        </Wrapper>

        <ActionButton as='link' href="#" />
    </section>
  )
}

export default BlogpostHero  