import type { HeadingType } from "@/app/types"

export type HeadingProps = {
  type?: HeadingType
  text: string
  color?: 'dark' | 'white'
}