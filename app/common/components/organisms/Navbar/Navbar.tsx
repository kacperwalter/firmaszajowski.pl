import Image from "next/image"
import Link from 'next/link'
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import szajowskiLogo from "@/public/brand/szajowski-logo.svg"
import mailIcon from "@/public/icons/mail.svg"
import phoneIcon from "@/public/icons/phone.svg"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <Wrapper isWide>
        <Link href="/">
          <Image
            src={szajowskiLogo}
            alt="logo"
            width={100}
            height={100}
          />
        </Link>

        <ul className="navbar__navigation">
          <li>
            <Link href="/inwestycje">Inwestycje</Link>
          </li>
          <li>
            <Link href="/o-firmie">O firmie</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>

        <div className="navbar__contact">
          <a href="#">
            <Image
              src={mailIcon}
              alt="mail"
              width={20}
              height={20}
            />
          </a>

          <a href="#">
            <Image
              src={phoneIcon}
              alt="phone"
              width={20}
              height={20}
            />
          </a>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar