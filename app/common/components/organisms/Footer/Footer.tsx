// @ts-nocheck
'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { getInvestments } from "@/sanity/sanity-utils"

import BrandLogo from "@/app/common/components/atoms/BrandLogo/BrandLogo"
import ContactInfo from "@/app/common/components/molecules/ContactInfo/ContactInfo"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import { navigationItems } from "@/app/data/navigationItems"
import "./Footer.scss"

const Footer = () => {
  const [investments, setInvestments] = useState([])

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const investments = await getInvestments()
        console.log("Dropdown - fetched investments useEffect", investments)
        setInvestments(investments)
      } catch (error) {
        console.error("Failed to fetch investments:", error)
      }
    }
  
    fetchInvestments()
  }, [])

  return (
    <section className="footer">
      <Wrapper isWide>
        <div className="footer__contact">
          <BrandLogo />
          <p>Firma Szajowski <br />ul. Słoneczna 23K, 64-800 Chodzież</p>
          <p>© 2024 Wszystkie prawa zastrzeżone</p>
        </div>

        <ul className="footer__navigation">
          {navigationItems.map((item, index) => (
            <li className="footer__navigation-column" key={index}>
              {item.isDropdown ? (
                <>
                  <a className="footer__navigation-heading" href={item.path}>{item.label}</a>
                  <ul className="footer__navigation-list">
                  {investments.map((item, index) => (
                    <li key={index} className="">
                      <Link href={`/inwestycje/${item.slug}`} className="dropdown__link">
                          <h4 className="">{item.name} - {item.category}</h4>
                      </Link>
                    </li>
                  ))}
                  </ul>
                </>
              ) : (
                <a className="footer__navigation-heading" href={item.path}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>

        <ContactInfo
          phone="+48 601 566 829"
          email="biuro@firmaszajowski.pl"
        />
      </Wrapper>
    </section>
  )
}

export default Footer