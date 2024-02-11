import Image from "next/image"
import szajowskiLogo from "@/public/brand/szajowski-logo.svg"
import Wrapper from "@/app/common/components/atoms/Wrapper/Wrapper"

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
      </Wrapper>
    </nav>
  )
}

export default Navbar