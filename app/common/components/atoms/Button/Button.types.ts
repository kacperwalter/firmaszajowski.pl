import type { ButtonType } from "@/app/types/types"

export type ButtonProps = {
  as?: ButtonType
  text: string
  href?: string
  arrow?: boolean
  arrowDirection?: 'down' | 'right'
  onClick?: () => void
}