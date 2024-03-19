import type { ButtonProps } from "./Button.types"
import "./Button.scss"

const Button = ({
    as = "button", 
    variant = "primary", 
    text, 
    href = "#", 
    arrow, 
    arrowDirection = "right",
    onClick 
  }: ButtonProps) => {
    const className = `button button--${variant} button--arrow-${arrowDirection}`

    const arrowSvg = (
      <svg className="button__arrow" width="8" height="12" viewBox="0 0 8 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.294922 10.59L4.87492 6L0.294922 1.41L1.70492 0L7.70492 6L1.70492 12L0.294922 10.59Z" fill="black"/>
      </svg>
    )

    const Element = as === "link" ? "a" : "button"
    const props = {
      ...(as === "link" ? { href } : { onClick }),
      className,
    }

    return (
      <Element {...props}>
        {text}
        {arrow && arrowSvg}
      </Element>
    )
}

export default Button