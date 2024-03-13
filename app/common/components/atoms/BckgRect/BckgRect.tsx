import "./BckgRect.scss"
import { BckgRectProps } from "./BckgRect.types"

const BckgRect = ({ placement = "left" }: BckgRectProps) => {
  let className = "bckg-rect"

  switch (placement) {
    case "left":
      className += " bckg-rect--left"
      break
    case "right":
      className += " bckg-rect--right"
      break
    case "center":
      className += " bckg-rect--center"
      break
  }

  return <div className={className}></div>
}

export default BckgRect