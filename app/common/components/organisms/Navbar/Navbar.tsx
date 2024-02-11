import Image from "next/image"
import szajowskiLogo from "@/public/brand/szajowski-logo.svg"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Image
        src={szajowskiLogo}
        alt="logo"
        width={100}
        height={100}
      />
    </nav>
  )
}

export default Navbar