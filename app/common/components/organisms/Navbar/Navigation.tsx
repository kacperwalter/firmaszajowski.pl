'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import arrowDown from "@/public/icons/arrow-down.svg"
import Dropdown from "@/app/common/components/molecules/Dropdown/Dropdown"

const Navigation = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const setIsDropdownVisibleHandler = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  return (
    <ul className="navbar__navigation">
      <li
        className="navbar__link"
        onClick={setIsDropdownVisibleHandler}
      >
        <p
          className="navbar__link-title"
        >
          Inwestycje
          
          <Image
            src={arrowDown}
            alt="arrow-down"
            width={20}
            height={20}
          />
        </p>

        <Dropdown isVisible={isDropdownVisible} />
      </li>

      <li className="navbar__link">
        <Link 
          href="/o-firmie"
          className="navbar__link-navlink"
        >
          O firmie
        </Link>
      </li>

      <li className="navbar__link">
        <Link
          href="/kontakt"
          className="navbar__link-navlink"
        >
          Kontakt
        </Link>
      </li>
    </ul>
  )
}

export default Navigation