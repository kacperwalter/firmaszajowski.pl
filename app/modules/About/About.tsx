import Details from "@/app/common/components/organisms/Details/Details"
import TextWithTopImage from "@/app/common/components/organisms/TextWithTopImage/TextWithTopImage"

const heroData = {
  heading: "<strong>Kim jesteśmy?</strong>",
  caption: "Firma Szajowski jest firmą rodzinną, której działalność rozpoczęła się w 1982 roku z inicjatywy Ryszarda Szajowskiego. Z czasem, do załogi dołączyli jego synowie: Maciej i Paweł.<br><br>Dzisiaj Firma Szajowski oferuje nie tylko usługi budowlane, ale również budowę i sprzedaż mieszkań oraz domów.",
  image: "images/o-firmie/planning.jpeg",
}

const detailsData1 = {
  heading: "<strong>Firma budowlana</strong>",
  caption: "Świadczymy usługi budowlane dedykowane powierzchniom mieszkalnym i dużym przestrzeniom użytkowym. Wykonujemy kompleksowe wykończenia wnętrz bloków mieszkalnych: tynki, posadzki, izolacje termiczne i akustyczne, szpachle, malowanie. <br> <br>  Nasi pracownicy pracują na materiałach budowlanych sprawdzonych, polskich producentów, a ich kompetencje potwierdza certyfikat autoryzowanej firmy wykonawczej.",
  image: "images/o-firmie/planning-2.jpeg",
  icons: [
    "images/dolina-nidy-logo.png",
    "images/iso-logo.png",
  ]
}

const detailsData2 = {
  heading: "<strong>Inwestycje mieszkaniowe</strong>",
  caption: "Znajomość rynku budowlanego i stabilne zaplecze finansowe, pozwalające na sprawną realizację inwestycji, zaprocentowały zaufaniem naszych klientów. Zajmujemy się budową oraz sprzedażą mieszkań i domów w spokojnych, komfortowych lokalizacjach.  <br><br>  Nasze inwestycje położone są w Chodzieży i okolicach. Staramy się, aby nasze budynki wpisywały się w bieżący krajobraz, oferując dostęp do zieleni, bez szkodliwej ingerencji w środowisko. Budujemy z pasją i perspektywą.",
  image: "images/o-firmie/planning-3.jpeg",
}

const dofinansowanieData = {
  heading: "Projekt dotyczący utrzymania zdolności do pracy przez cały okres aktywności zawodowej",
  caption: "<p><strong>Dofinansowanie:</strong> 88.235,68 zł</p><p><strong>Wartość całkowita:</strong> 120.123,73 zł</p><p><strong>Dofinansowanie:</strong> Fundusz Ubezpieczeń Społecznych</p><p><strong>Krótki opis projektu:</strong> Ograniczenie obciążenia układu mięśniowo szkieletowego podczas ręcznych prac transportowych poprzez zakup urządzeń do transportu bliskiego, oraz zwiększenie bezpieczeństwa podczas pracy na wysokości poprzez zakup rusztowań jezdnych.</p><p><strong>Data podpisania umowy:</strong> Styczeń 2024 r.</p>",
  image: {
    url: "/images/flaga-i-godlo.png",
    alt: "alt",
  },
}

const About = () => {
  return (
    <main>
      <Details content={heroData} isHero />
      <Details id="scroll-to-view" content={detailsData1} />
      <Details content={detailsData2} isReversed />
      <TextWithTopImage content={dofinansowanieData} />
    </main>
  )
}

export default About