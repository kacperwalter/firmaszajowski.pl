// @ts-nocheck
import { useState } from 'react'

const useImageGallery = (images) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const setCurrentImage = (index) => {
    setCurrentImageIndex(index)
  }

  return {
    currentImageIndex,
    currentImage: images[currentImageIndex],
    handlePrevious,
    handleNext,
    setCurrentImage,
    totalImages: images.length,
  }
}

export default useImageGallery
