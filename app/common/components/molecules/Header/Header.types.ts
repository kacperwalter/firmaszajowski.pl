import { HeadingType, Color } from "@/app/types/types"

export type HeaderProps = {
  heading: string
  headingType?: HeadingType
  caption: string
  color?: Color
  id?: string
}