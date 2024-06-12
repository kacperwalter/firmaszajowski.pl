// @ts-nocheck
"use client"

import "./ImageGallery.scss"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Image from "next/image"
import close from "@/public/icons/close.svg"
import arrowDown from "@/public/icons/arrow-down.svg"
import { useState } from "react"

const content = {
  heading: "Galeria zdjęć inwestycji",
  images: [
    {
      src: "/images/sample-gallery/1.jpeg",
      alt: "alt",
    },
    {
      src: "/images/sample-gallery/2.jpeg",
      alt: "alt",
    },
    {
      src: "/images/sample-gallery/3.jpeg",
      alt: "alt",
    },
  ]
}

const ImageGallery = ({ isOpen = "false" }) => {
  const [currentImage, setCurrentImage] = useState(content.images[0])

  return (
    <section className="image-gallery">
      <button>
        <Image src={close} alt="close" width={20} height={20} />
      </button>

      <Heading
        text={content.heading}
      />

      <div className="image-gallery__content">
        <Image
          className="image-gallery__current-image"
          src={currentImage.src}
          alt={currentImage.alt}
          width={1000}
          height={1000}
        />

        <div className="image-gallery__listing">
          {content.images.map(image => (
            <Image
             className="image-gallery__listing-image"
             src={image.src}
             alt={image.alt}
             width={500}
             height={500}
            />
          ))}
        </div>

        <nav className="image-gallery__selector">
          <button className="arrow-previous">
            <Image
              src={arrowDown}
              alt="arrow"
              width={20}
              height={20}
            />
          </button>

          <p className="image-gallery__navigation"><span className="image-gallery__selector-current">1</span> / 6</p>

          <button className="arrow-next">
            <Image
              src={arrowDown}
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
        </nav>
      </div>
    </section>
  )
}

export default ImageGallery