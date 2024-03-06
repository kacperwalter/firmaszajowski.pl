import szajowskiLogo from "@/public/brand/szajowski-logo.svg"
import Image from "next/image"

// width and height via props? 
const BrandLogo = () => {
  return (
    <Image
        src={szajowskiLogo}
        alt="logo"
        width={100}
        height={100}
    />
  )
}

export default BrandLogo