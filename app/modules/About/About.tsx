import Details from "@/app/common/components/organisms/Details/Details"

const detailsData1 = {
  heading: "<strong>Firma budowlana</strong>",
  caption: "Świadczymy usługi budowlane dedykowane powierzchniom mieszkalnym i dużym przestrzeniom użytkowym. Wykonujemy kompleksowe wykończenia wnętrz bloków mieszkalnych: tynki, posadzki, izolacje termiczne i akustyczne, szpachle, malowanie. <br> Nasi pracownicy pracują na materiałach budowlanych sprawdzonych, polskich producentów, a ich kompetencje potwierdza certyfikat autoryzowanej firmy wykonawczej.",
  image: "images/example-image.png",
  icons: [
    "images/dolina-nidy-logo.png",
    "images/iso-logo.png",
  ]
}

const detailsData2 = {
  heading: "<strong>Firma budowlana</strong>",
  caption: "Świadczymy usługi budowlane dedykowane powierzchniom mieszkalnym i dużym przestrzeniom użytkowym. Wykonujemy kompleksowe wykończenia wnętrz bloków mieszkalnych: tynki, posadzki, izolacje termiczne i akustyczne, szpachle, malowanie. <br> Nasi pracownicy pracują na materiałach budowlanych sprawdzonych, polskich producentów, a ich kompetencje potwierdza certyfikat autoryzowanej firmy wykonawczej.",
  image: "images/example-image.png",
}

const About = () => {
  return (
    <main>
      <Details content={detailsData1} />
      <Details content={detailsData2} isReversed />
    </main>
  )
}

export default About