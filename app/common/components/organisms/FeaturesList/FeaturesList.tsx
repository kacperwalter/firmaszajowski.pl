import RichText from '@/app/common/components/atoms/RichText/RichText'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import Image from "next/image"
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import "./FeaturesList.scss"

const header = {
  heading: "<strong>Najważniejsze</strong> cechy inwestycji",
  caption: "Domy wolnostojące położone w Ratajach koło Chodzieży to idealne miejsce dla osób, które poszukują ciszy i spokoju z dala od centrum miasta. Otoczenie pól i lasów oraz bliskość jeziora sprzyjają tu życiu w zgodzie z naturą. Kameralna zabudowa zapewnia pełną prywatność, dając mieszkańcom nie tylko maksymalną swobodę, ale również poczucie bezpieczeństwa.",
}

const images = [
  {
    src: "/images/lesna-polana.jpg",
    alt: 'alt',
  },
  {
    src: "/images/lesna-polana-2.jpeg",
    alt: 'alt',
  }
]

const listElements = [
  {
    id: 1,
    caption: "Jedno piętro mieszkalne",
    icon: "/images/features-list/first-floor.svg",
  },
  {
    id: 2,
    caption: "Jedno piętro mieszkalne",
    icon: "/images/features-list/first-floor.svg",
  },
  {
    id: 3,
    caption: "Jedno piętro mieszkalne",
    icon: "/images/features-list/first-floor.svg",
  },
  {
    id: 4,
    caption: "Jedno piętro mieszkalne",
    icon: "/images/features-list/first-floor.svg",
  },
  {
    id: 5,
    caption: "Jedno piętro mieszkalne",
    icon: "/images/features-list/first-floor.svg",
  },
  {
    id: 6,
    caption: "Jedno piętro mieszkalne",
    icon: "/images/features-list/first-floor.svg",
  },
]

const FeaturesList = () => {
  return (
    <section className="features-list">
      <Wrapper>
        <RichText
          color={"dark"}
          text={header.caption}
        />

        <div className="features-list__info">
          <Heading
            type='h1'
            text={header.heading}
            color="dark"
          />

          <div className="features-list__images">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={1000}
              height={1000}
              className="features-list__images--primary"
            />

            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={1000}
              height={1000}
              className="features-list__images--secondary"
            />
          </div>
        </div>

        <ul className="features-list__list">
          {listElements.map((item, index) => (
            <li key={index} className="features-list__item">
              <span>{index}</span>

              <span className="features-list__item-caption">{item.caption}</span>

              <Image
                src={item.icon}
                alt={item.caption}
                width={50}
                height={50}
                className="features-list__item-icon"
              />
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default FeaturesList