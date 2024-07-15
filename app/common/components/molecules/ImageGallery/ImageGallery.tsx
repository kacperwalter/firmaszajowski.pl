// @ts-nocheck
"use client"

import { useEffect } from "react"
import "./ImageGallery.scss"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Image from "next/image"
import close from "@/public/icons/close.svg"
import arrowDown from "@/public/icons/arrow-down.svg"
import useImageGallery from './useImageGallery'  // Import the hook

const ImageGallery = ({ content, closeGallery }) => {
  const {
    currentImageIndex,
    currentImage,
    handlePrevious,
    handleNext,
    setCurrentImage,
    totalImages,
  } = useImageGallery(content.images)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery()
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeGallery])

  return (
    <section className="image-gallery">
      <button className="image-gallery__button-close" onClick={closeGallery}>
        <Image src={close} alt="close" width={20} height={20} />
      </button>

      <Heading
        text={content.heading}
      />

      <div className="image-gallery__content">
        <Image
          className="image-gallery__current-image"
          src={currentImage.url}
          alt={currentImage.alt}
          width={1000}
          height={1000}
        />

        <div className="image-gallery__listing">
          {content.images.map((image, index) => (
            <Image
             key={index}
             className={`image-gallery__listing-image ${index === currentImageIndex ? 'active' : ''}`}
             src={image.url}
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
              color="white"
            />
          </button>
        </nav>
      </div>
    </section>
  )
}

export default ImageGallery
