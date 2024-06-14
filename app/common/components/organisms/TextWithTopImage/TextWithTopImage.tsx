// @ts-nocheck
import Image from "next/image"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Heading from '@/app/common/components/atoms/Heading/Heading'

import "./TextWithTopImage.scss"

const TextWithTopImage = ({ content }) => {
  return (
    <section className="text-with-top-image">
      <Wrapper>
        <Image
          src={content.image.url}
          alt={content.image.alt}
          width={500}
          height={500}
          className="text-with-top-image__image"
        />

        <Heading text={content.heading} type="h5"/>

        <div
          className="text-with-top-image__caption"
          dangerouslySetInnerHTML={{ __html: content.caption }}
        />
      </Wrapper>
    </section>
  )
}

export default TextWithTopImage