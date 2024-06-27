// @ts-nocheck
"use client"

import { useState } from "react"
import Image from "next/image"
import Wrapper from '@/app/common/components/atoms/Wrapper/Wrapper'
import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'
import "./BuildingPlan.scss"

type BuildingPlanProps = {
  content: {
    heading?: string
    subheading?: string
    tabs?: {
      name?: string
      img?: {
        url?: string
        alt?: string
      }
      caption?: string
    }[]
  }
}

const BuildingPlan = ({ content }: BuildingPlanProps) => {
  const defaultTab = {
    name: "Default Tab",
    img: {
      url: "/path/to/default/image.jpg",
      alt: "Default Alt"
    },
    caption: "Default Caption"
  }

  const tabs = content?.tabs?.length ? content.tabs : [defaultTab]
  const [activeTab, setActiveTab] = useState(tabs[0])

  const handleClick = (index: number) => {
    setActiveTab(tabs[index])
  }

  return (
    <section className="building-plan">
      <Wrapper>
        <div className="building-plan__header">
          {content?.heading && (
            <Heading
              type="h2"
              text={content.heading || "Default Heading"}
              color={"dark"}
            />
          )}

          {content?.subheading && (
            <RichText
              color={"dark"}
              text={content.subheading || "Default Subheading"}
            />
          )}
        </div>

        <article className="tabs">
          <ul className="tabs__menu">
            {tabs.map((tab, index) => (
              <li 
                className={`tabs__menu-item ${activeTab.name === tab.name ? "tabs__menu-item--active" : ""}`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {tab.name}
              </li>
            ))}
          </ul>

          <Image
            className="tabs__image"
            src={activeTab.img.url || "/path/to/default/image.jpg"}
            alt={activeTab.img.alt || "Default Alt"}
            height={1000}
            width={1000}
          />

          <div
            className="tabs__caption"
            dangerouslySetInnerHTML={{ __html: activeTab.caption || "Default Caption" }}
          />
        </article>
      </Wrapper>
    </section>
  )
}

export default BuildingPlan
