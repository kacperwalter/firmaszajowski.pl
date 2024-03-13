import type { HeadingProps } from "./Heading.types"

const Heading = ({ type = 'h2', text }: HeadingProps) => {
  const Tag = type 

  return <Tag dangerouslySetInnerHTML={{ __html: text }} />
}

export default Heading