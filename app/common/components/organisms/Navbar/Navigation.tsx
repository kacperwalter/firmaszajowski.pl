'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import arrowDown from "@/public/icons/arrow-down.svg"
import Dropdown from "@/app/common/components/molecules/Dropdown/Dropdown"
import { navigationItems } from "@/app/data/navigationItems"

const Navigation = () => {
  const pathname = usePathname()

  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (!target.closest(".navbar__link")) {
        setIsDropdownVisible(false)
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  return (
    <ul className="navbar__navigation">
      {navigationItems.map(({ path, label, isDropdown }) => (
        isDropdown ? (
          <li
            key={path}
            className={`navbar__link ${pathname === path ? "navbar__link--active" : ""}`}
            onClick={toggleDropdownVisibility}
          >
            <button className="navbar__link-title">
              {label}
              <Image src={arrowDown} alt="arrow-down" width={20} height={20} />
            </button>
            <Dropdown isVisible={isDropdownVisible} />
          </li>
        ) : (
          <li
            key={path}
            className={`navbar__link ${pathname === path ? "navbar__link--active" : ""}`}
          >
            <Link href={path} className="navbar__link-navlink">
              {label}
            </Link>
          </li>
        )
      ))}
    </ul>
  )
}

export default Navigation