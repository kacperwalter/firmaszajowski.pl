import type { HeadingProps } from "./Heading.types"

const Heading = ({ type = 'h2', text, color = 'dark' }: HeadingProps) => {
  const Tag = type

  const colorClassMap = {
    dark: 'heading--dark',
    white: 'heading--white',
  }

  const typeClassMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  }

  const className = `heading ${colorClassMap[color] || ''} ${typeClassMap[type] || ''}`

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: text }} 
    />
  )
}

export default Heading