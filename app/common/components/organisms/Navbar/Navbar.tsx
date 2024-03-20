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

            <Image
              src={close}
              alt="close"
              width={20}
              height={20}
              className="navbar__close"
              onClick={toggleMenu}
            />
          </div>
        </div>

        <Image
          src={hamburger}
          alt="hamburger"
          width={20}
          height={20}
          className="navbar__hamburger"
          onClick={toggleMenu}
        />
      </Wrapper>
    </nav>
  )
}

export default Navbar