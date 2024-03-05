import Image from "next/image"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import szajowskiLogo from "@/public/brand/szajowski-logo.svg"
import mailIcon from "@/public/icons/mail.svg"
import phoneIcon from "@/public/icons/phone.svg"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Wrapper isWide>
        <Image
          src={szajowskiLogo}
          alt="logo"
          width={100}
          height={100}
        />

        <div className="navbar__navigation">
          <ul>
            <li>
              <a href="#about">Inwestycje</a>
            </li>
            <li>
              <a href="#offer">O firmie</a>
            </li>
            <li>
              <a href="#contact">Kontakt</a>
            </li>
          </ul>
        </div>

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