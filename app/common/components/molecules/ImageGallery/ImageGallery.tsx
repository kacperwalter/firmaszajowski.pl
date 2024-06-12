// @ts-nocheck
"use client"

import "./ImageGallery.scss"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Image from "next/image"
import close from "@/public/icons/close.svg"
import arrowDown from "@/public/icons/arrow-down.svg"
import useImageGallery from './useImageGallery'

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
  const {
    currentImageIndex,
    currentImage,
    handlePrevious,
    handleNext,
    setCurrentImage,
    totalImages,
  } = useImageGallery(content.images);

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
          {content.images.map((image, index) => (
            <Image
             key={index}
             className={`image-gallery__listing-image ${index === currentImageIndex ? 'active' : ''}`}
             src={image.src}
             alt={image.alt}
             width={500}
             height={500}
             onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>

        <nav className="image-gallery__selector">
          <button className="arrow-previous" onClick={handlePrevious}>
            <Image
              src={arrowDown}
              alt="arrow"
              width={20}
              height={20}
            />
          </button>

          <p className="image-gallery__navigation"><span className="image-gallery__selector-current">{currentImageIndex + 1}</span> / {totalImages}</p>

          <button className="arrow-next" onClick={handleNext}>
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
