import Image from "next/image"
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from "@/app/common/components/atoms/RichText/RichText"

const content = {
  heading: "<strong>Położenie</strong><br>Spokojny zakątek Rataj",
  caption: "Wybierając lokalizację dla tej inwestycji kierowaliśmy się przede wszystkim dostępem do zieleni. Nasza propozycja jest skierowana do osób, które poszukują bliskości z przyrodą i chcą żyć w rytmie slow. Leśna Polana oferuje spokój i harmonię przez 365 dni w roku – na tarasie i w prywatnym ogrodzie!",
  image: {
    src: "/images/dom-w-lesie.png",
    alt: "alt",
    }
}

const ImageAndContent = () => {
  return (
    <section className="image-and-content">
      <Heading
        type="h1"
        text={content.heading}
        color="dark"
      />

      <Image
        src={content.image.src}
        alt={content.image.alt}
        width={1000}
        height={1000}
      />

      <RichText text={content.caption} />
    </section>
  )
}

export default ImageAndContent