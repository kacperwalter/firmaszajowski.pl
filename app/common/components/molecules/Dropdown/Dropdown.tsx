import Link from "next/link"
import './Dropdown.scss'
import { dropdownItems } from "@/app/data/dropdownItems"

const Dropdown = () => {
  return (
    <ul className="dropdown">
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