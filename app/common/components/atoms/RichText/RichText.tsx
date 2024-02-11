import { type RichTextProps } from "./RichText.types"

const RichText = ({ text, children }: RichTextProps) => {
  return (
    <p className="rich-text">
      {text || children}
    </p>
  )
}

export default RichText