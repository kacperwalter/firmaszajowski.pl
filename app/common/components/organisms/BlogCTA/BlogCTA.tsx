// @ts-nocheck
"use client"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Button from "@/app/common/components/atoms/Button/Button"
import ImageGallery from "@/app/common/components/molecules/ImageGallery/ImageGallery"
import { useState } from "react"

import "./blogCTA.scss"

const BlogCTA = ({ content }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);

  return (
    <>
      <section className="blogCTA">
        <Wrapper>
          <div className="blogCTA__container">
            <Heading
              text={content.heading}
              type="h2"
            />

            <div
              className="blogCTA__caption"
              dangerouslySetInnerHTML={{ __html: content.caption }}
            />

            <div className="blogCTA__buttons">
              {content.buttons[0].text && (
                <Button
                  as="link"
                  text={content.buttons[0].text}
                  href={content.buttons[0].href}
                />
              )}

              {content.buttons[1].text && (
                <Button
                  as="button"
                  text={content.buttons[1].text}
                  onClick={openGallery}
                  arrow
                  arrowDirection="right"
                  variant="secondary"
                />
              )}
            </div>
          </div>
        </Wrapper>
      </section>

      {isGalleryOpen && (
        <ImageGallery content={content.imageGalleryContent} closeGallery={closeGallery} />
      )}
    </>
  )
}

export default BlogCTA
