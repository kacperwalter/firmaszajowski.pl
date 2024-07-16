"use client"

import { useState } from "react"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import Heading from "@/app/common/components/atoms/Heading/Heading"
import Header from "@/app/common/components/molecules/Header/Header"
import ContactInfo from "@/app/common/components/molecules/ContactInfo/ContactInfo"
import ActionButton from "@/app/common/components/atoms/ActionButton/ActionButton"
import "./SwitchableMenu.scss"
import type { SwitchableMenuProps } from "./SwitchableMenu.types"

const SwitchableMenu = ({ content }: SwitchableMenuProps) => {
  const [activeItemId, setActiveItemId] = useState(0)

  const handleItemClick = (itemId: number) => {
    setActiveItemId(itemId)
  }

  return (
    <section className="switchable-menu">
      <Wrapper>
        <Heading type="h1" text={content.heading}/>
        <div className="switchable-menu__items">
          {content.items.map((item, index) => (
            <div
              key={index}
              className={`switchable-menu__item ${activeItemId === index ? "switchable-menu__item--active" : ""}`}
            >
              <div 
                className="switchable-menu__select"
                onClick={() => handleItemClick(index)}
              >
                <Heading text={item.name} type="h3" />
                <ActionButton variant="secondary" />
              </div>

              <div 
                className={`switchable-menu__item-content ${activeItemId === index ? "" : "is-hidden"}`}
              >
                <Header heading={item.heading} caption={item.caption} headingType="h3" />
                <ContactInfo phone={item.phone} email={item.email} />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default SwitchableMenu