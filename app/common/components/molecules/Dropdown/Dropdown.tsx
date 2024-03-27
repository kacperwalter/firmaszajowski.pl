import Link from "next/link"
import './Dropdown.scss'
import { dropdownItems } from "@/app/data/dropdownItems"
import type { DropdownProps } from "./Dropdown.types"

const Dropdown = ({ isVisible }: DropdownProps) => {
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