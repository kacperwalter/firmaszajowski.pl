import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Heading from "@/app/common/components/atoms/Heading/Heading"
import Header from "@/app/common/components/molecules/Header/Header"
import ContctInfo from "@/app/common/components/molecules/ContactInfo/ContactInfo"
import ActionButton from "@/app/common/components/atoms/ActionButton/ActionButton"
import "./SwitchableMenu.scss"
import type { SwitchableMenuProps } from "./SwitchableMenu.types"

const SwitchableMenu = ({ content }: SwitchableMenuProps) => {
  return (
    <section className="switchable-menu">
      <Wrapper>
        <Heading type="h1" text={content.heading}/>
        <div className="switchable-menu__items">
          {content.items.map(item => (
            <div key={item.id} className="switchable-menu__item">
              <div className="switchable-menu__select">
                <Heading text={item.name} />
                <ActionButton variant="secondary" />
              </div>

              <div key={item.id} className="switchable-menu__item-content">
                <Header heading={item.heading} caption={item.caption} headingType="h3" />
                <ContctInfo phone={item.phone} email={item.email} />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default SwitchableMenu