import type { HeaderProps } from './Header.types'
import './Header.scss'

import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'

const Header = ({ heading, headingType, caption, color = 'dark', id }: HeaderProps) => {
  return (
    <header id={id} className="header">
      <Heading
        type={headingType}
        text={heading}
        color={color}
      />
      <RichText
        color={color}
        text={caption}
      />
    </header>
  )
}

export default Header