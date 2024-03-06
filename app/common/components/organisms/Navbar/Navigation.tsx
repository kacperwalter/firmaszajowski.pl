import Image from "next/image"
import Link from "next/link"
import arrowDown from "@/public/icons/arrow-down.svg"

const Navigation = () => {
  return (
    <ul className="navbar__navigation">
      <li className="navbar__link">
        <Link href="/inwestycje">
          Inwestycje
          
          <Image
          src={arrowDown}
          alt="arrow-down"
          width={20}
          height={20}
          />
        </Link>
      </li>

      <li className="navbar__link">
        <Link href="/o-firmie">
          O firmie
        </Link>
      </li>

      <li className="navbar__link">
        <Link href="/kontakt">
          Kontakt
        </Link>
      </li>
    </ul>
  )
}

export default Navigation