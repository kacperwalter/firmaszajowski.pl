import szajowskiLogo from "@/public/brand/szajowski-logo.svg"
import Image from "next/image"

const BrandLogo = () => {
  return (
    <Image
        src={szajowskiLogo}
        alt="logo"
        width={140}
        height={100}
    />
  )
}

export default BrandLogo