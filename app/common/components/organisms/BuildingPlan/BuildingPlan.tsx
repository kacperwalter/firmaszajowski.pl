import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'
import "./BuildingPlan.scss"

const header = {
  heading: "<strong>Plany pięter</strong>",
  subheading: "Dom jednorodzinny",
}

const tabs = [
  {
    name: "Parter",
    img: {
      src: "images/parter-plan.png",
      alt: "alt",
    },
    caption: `<p>Duża powierzchnia mieszkalna pozwala na różne kombinacje zabudowy i dostosowanie jej do swoich potrzeb. Wejście jest zintegrowane z niewielkim wiatrołapem i korytarzem. Serce domu, połączona z pokojem dziennym kuchnia, zapewnia przyjazną przestrzeń do życia, a trzy pokoje dają pełen komfort wszystkim mieszkańcom. W domu przewidziano miejsce na niewielką kotłownię oraz łazienkę.</p><p>Zestawienie powierzchni</p><table><tr><td>1. Wiatrołap</td><td class="text-right">5,02 m<sup>2</sup></td></tr><tr><td>2. Korytarz</td><td class="text-right">13,50 m<sup>2</sup></td></tr><tr><td>3. Pokój</td><td class="text-right">12,48 m<sup>2</sup></td></tr><tr><td>4. Kotłownia</td><td class="text-right">6,07 m<sup>2</sup></td></tr><tr><td>5. Pokój dzienny + kuchnia</td><td class="text-right">28,80 m<sup>2</sup></td></tr><tr><td>6. Pokój</td><td class="text-right">12,07 m<sup>2</sup></td></tr><tr><td>7. Łazienka</td><td class="text-right">5,85 m<sup>2</sup></td></tr><tr><td>8. Pokój</td><td class="text-right">11,90 m<sup>2</sup></td></tr><tr><td class="pt-3">Razem:</td><td class="text-right pt-3">95,59 m<sup>2</sup></td></tr></table>`,
  },
  {
    name: "Parter",
    img: {
      src: "images/parter-plan.png",
      alt: "alt",
    },
    caption: `<p>Duża powierzchnia mieszkalna pozwala na różne kombinacje zabudowy i dostosowanie jej do swoich potrzeb. Wejście jest zintegrowane z niewielkim wiatrołapem i korytarzem. Serce domu, połączona z pokojem dziennym kuchnia, zapewnia przyjazną przestrzeń do życia, a trzy pokoje dają pełen komfort wszystkim mieszkańcom. W domu przewidziano miejsce na niewielką kotłownię oraz łazienkę.</p><p>Zestawienie powierzchni</p><table><tr><td>1. Wiatrołap</td><td class="text-right">5,02 m<sup>2</sup></td></tr><tr><td>2. Korytarz</td><td class="text-right">13,50 m<sup>2</sup></td></tr><tr><td>3. Pokój</td><td class="text-right">12,48 m<sup>2</sup></td></tr><tr><td>4. Kotłownia</td><td class="text-right">6,07 m<sup>2</sup></td></tr><tr><td>5. Pokój dzienny + kuchnia</td><td class="text-right">28,80 m<sup>2</sup></td></tr><tr><td>6. Pokój</td><td class="text-right">12,07 m<sup>2</sup></td></tr><tr><td>7. Łazienka</td><td class="text-right">5,85 m<sup>2</sup></td></tr><tr><td>8. Pokój</td><td class="text-right">11,90 m<sup>2</sup></td></tr><tr><td class="pt-3">Razem:</td><td class="text-right pt-3">95,59 m<sup>2</sup></td></tr></table>`,
  },
]

const BuildingPlan = () => {
  return (
    <section className="building-plan">
      <Wrapper>
        <div className="building-plan__header">
          <RichText
            color={"dark"}
            text={header.subheading}
          />

          <Heading
            type="h2"
            text={header.heading}
            color={"dark"}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default BuildingPlan