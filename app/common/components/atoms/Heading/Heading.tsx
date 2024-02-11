import type { HeadingProps } from "./Heading.types"

const Heading = ({ headingType = 'h2', text }: HeadingProps) => {
  const Tag = headingType

  return (
    <Tag>
      {text}
    </Tag>
  )
}

export default Heading