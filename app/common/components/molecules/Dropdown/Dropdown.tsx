import Link from "next/link"
import './Dropdown.scss'
import { dropdownItems } from "@/app/data/dropdownItems"
import type { DropdownProps } from "./Dropdown.types"

const Dropdown = ({ isVisible }: DropdownProps) => {
  return (
    <ul className={`dropdown ${!isVisible && "dropdown--is-hidden"}`}>
      {dropdownItems.map((item, index) => (
        <li key={index} className="dropdown__item">
          <Link href={item.path}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown