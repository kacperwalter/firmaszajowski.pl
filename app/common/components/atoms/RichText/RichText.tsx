import { type RichTextProps } from "./RichText.types"

const RichText = ({ text, children }: RichTextProps) => {
  const content = text || children
  
  if (!content) return null

  return <p className="rich-text" dangerouslySetInnerHTML={{ __html: content }} />
}

export default RichText