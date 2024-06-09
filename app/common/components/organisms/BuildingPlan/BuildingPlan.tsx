import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'
import "./BuildingPlan.scss"

const header = {
  heading: "<strong>Plany pięter</strong>",
  subheading: "Dom jednorodzinny",
}

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
            type="h1"
            text={header.heading}
            color={"dark"}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default BuildingPlan