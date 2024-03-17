import { Color } from "@/app/types/types"

export type RichTextProps = {
  text?: string | TrustedHTML
  children?: React.ReactNode
  color?: Color
}