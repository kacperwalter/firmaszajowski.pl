import Link from "next/link"
import './Dropdown.scss'
import type { DropdownItem } from "@/app/types/types"
import { getInvestments } from "@/sanity/sanity-utils"
import type { DropdownProps } from "./Dropdown.types"

const Dropdown = async ({ isVisible }: DropdownProps) => {
  const investments = await getInvestments()

  const dropdownItems = investments.map((investment) => ({
    name: investment.name,
    category: investment.category,
    path: investment.path
  }))

  return (
    <ul className={`dropdown ${isVisible ? "" : "is-hidden"}`}>
      {dropdownItems.map((item, index) => (
        <li key={index} className="dropdown__item">
          <Link href={item.path} className="dropdown__link">
              <h4 className="dropdown__title">{item.name}</h4>
              <p className="dropdown__description">{item.category}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown