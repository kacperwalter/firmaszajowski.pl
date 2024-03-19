import Details from "@/app/common/components/organisms/Details/Details"

const detailsData = {
  heading: "<strong>Firma budowlana</strong>",
  caption: "Świadczymy usługi budowlane dedykowane powierzchniom mieszkalnym i dużym przestrzeniom użytkowym. Wykonujemy kompleksowe wykończenia wnętrz bloków mieszkalnych: tynki, posadzki, izolacje termiczne i akustyczne, szpachle, malowanie. <br> Nasi pracownicy pracują na materiałach budowlanych sprawdzonych, polskich producentów, a ich kompetencje potwierdza certyfikat autoryzowanej firmy wykonawczej.",
  image: "images/example-image.png",
}

const About = () => {
  return (
    <main>
      <Details content={detailsData} />
    </main>
  )
}

export default About