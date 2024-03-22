import Details from "@/app/common/components/organisms/Details/Details"

const heroData = {
  heading: "<strong>Kim jesteśmy?</strong>",
  caption: "Firma Szajowski jest firmą rodzinną, której działalność rozpoczęła się w 1982 roku z inicjatywy Ryszarda Szajowskiego. Z czasem, do załogi dołączyli jego synowie: Maciej i Paweł.<br><br>Dzisiaj Firma Szajowski oferuje nie tylko usługi budowlane, ale również budowę i sprzedaż mieszkań oraz domów.",
  image: "images/o-firmie/planning.jpeg",
}

const detailsData1 = {
  heading: "<strong>Firma budowlana</strong>",
  caption: "Świadczymy usługi budowlane dedykowane powierzchniom mieszkalnym i dużym przestrzeniom użytkowym. Wykonujemy kompleksowe wykończenia wnętrz bloków mieszkalnych: tynki, posadzki, izolacje termiczne i akustyczne, szpachle, malowanie. <br> <br>  Nasi pracownicy pracują na materiałach budowlanych sprawdzonych, polskich producentów, a ich kompetencje potwierdza certyfikat autoryzowanej firmy wykonawczej.",
  image: "image/o-firmie/planning-2.jpeg",
  icons: [
    "images/dolina-nidy-logo.png",
    "images/iso-logo.png",
  ]
}

const detailsData2 = {
  heading: "<strong>Firma budowlana</strong>",
  caption: "Świadczymy usługi budowlane dedykowane powierzchniom mieszkalnym i dużym przestrzeniom użytkowym. Wykonujemy kompleksowe wykończenia wnętrz bloków mieszkalnych: tynki, posadzki, izolacje termiczne i akustyczne, szpachle, malowanie. <br><br>  Nasi pracownicy pracują na materiałach budowlanych sprawdzonych, polskich producentów, a ich kompetencje potwierdza certyfikat autoryzowanej firmy wykonawczej.",
  image: "image/o-firmie/planning-2.jpeg",
}

const About = () => {
  return (
    <main>
      <Details content={heroData} isHero />
      <Details content={detailsData1} />
      <Details content={detailsData2} isReversed />
    </main>
  )
}

export default About