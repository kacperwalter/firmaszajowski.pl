'use client'

import { useState } from 'react'
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
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible)

  return (
    <nav className="navbar"> 
      <Wrapper isWide>
        <Link href="/">
          <BrandLogo />
        </Link>

        <div className={`navbar__menu ${isMenuVisible ? "navbar__menu--visible" : ""}`}>
          <Navigation />

          <div className="navbar__contact">
            <a
              href="#" 
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
              href="#"
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

        <button className={`navbar__close ${isMenuVisible ? "" : "is-hidden" }`} onClick={toggleMenu}>
          <Image src={close} alt="close" width={18} height={18} />
        </button>

        <button className={`navbar__hamburger ${isMenuVisible ? "is-hidden" : ""}`} onClick={toggleMenu}>
          <Image src={hamburger} alt="hamburger" width={20} height={20} />
        </button>
      </Wrapper>
    </nav>
  )
}

export default Navbar