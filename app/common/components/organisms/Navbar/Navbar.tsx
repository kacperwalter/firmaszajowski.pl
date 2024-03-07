import Image from "next/image"
import Link from "next/link"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"
import BrandLogo from "@/app/common/components/atoms/BrandLogo/BrandLogo"
import Navigation from "./Navigation"
import mailIcon from "@/public/icons/mail.svg"
import phoneIcon from "@/public/icons/phone.svg"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <Wrapper isWide>
        <Link href="/">
          <BrandLogo />
        </Link>

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
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar