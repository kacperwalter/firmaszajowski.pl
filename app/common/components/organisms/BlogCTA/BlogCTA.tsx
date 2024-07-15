// @ts-nocheck
"use client"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Button from "@/app/common/components/atoms/Button/Button"
import ImageGallery from "@/app/common/components/molecules/ImageGallery/ImageGallery"
import { useState } from "react"

import "./BlogCTA.scss"

const BlogCTA = ({ content }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const openGallery = () => setIsGalleryOpen(true)
  const closeGallery = () => setIsGalleryOpen(false)

  const heading = content?.heading || "Default Heading"
  const caption = content?.caption || "Default Caption"
  const buttons = content?.buttons || []
  const imageGalleryContent = content?.imageGalleryContent || []

  console.log(buttons) 

  return (
    <>
      <section className="blogCTA">
        <Wrapper>
          <div className="blogCTA__container">
            {heading && (
              <Heading
                text={heading}
                type="h2"
              />
            )}

            {caption && (
              <div
                className="blogCTA__caption"
                dangerouslySetInnerHTML={{ __html: caption }}
              />
            )}

            <div className="blogCTA__buttons">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  as={button.isGalleryOpener ? "button" : "link"}
                  text={button.text}
                  href={button.href}
                  onClick={button.isGalleryOpener ? openGallery : undefined}
                  arrow={button.isGalleryOpener}
                  arrowDirection="right"
                  variant={button.isGalleryOpener ? "secondary" : undefined}
                />
              ))}
            </div> 
          </div>
        </Wrapper>
      </section>

      {isGalleryOpen && (
        <ImageGallery content={imageGalleryContent} closeGallery={closeGallery} />
      )}
    </>
  )
}

export default BlogCTA
