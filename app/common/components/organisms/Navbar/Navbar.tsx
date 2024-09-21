'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import BrandLogo from "@/app/common/components/atoms/BrandLogo/BrandLogo"
import Navigation from "./Navigation"
import mailIcon from "@/public/icons/mail.svg"
import phoneIcon from "@/public/icons/phone.svg"
import hamburger from "@/public/icons/hamburger.svg"
import close from "@/public/icons/close.svg"
import "./Navbar.scss"

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}> 
      <Wrapper isWide>
        <Link className="navbar__linklogo" href="/">
          <BrandLogo />
        </Link>

        <button className={`navbar__close ${isMenuVisible ? "" : "is-hidden" }`} onClick={toggleMenu}>
          <Image src={close} alt="close" width={18} height={18} />
        </button>

        <button className={`navbar__hamburger ${isMenuVisible ? "is-hidden" : ""}`} onClick={toggleMenu}>
          <Image src={hamburger} alt="hamburger" width={20} height={20} />
        </button>

        <div className={`navbar__menu ${isMenuVisible ? "navbar__menu--visible" : ""}`}>
          <Navigation /> 

          <div className="navbar__contact">
            <a
              href="mailto:biuro@firmaszajowski.pl" 
              className="navbar__link-navlink"
            >
              <Image
                src={mailIcon}
                alt="mail"
                width={20}
                height={20}
              />
            </a>

            <a
              href="tel:+48601566829"
              className="navbar__link-navlink"
            >
              <Image
                src={phoneIcon}
                alt="phone"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar