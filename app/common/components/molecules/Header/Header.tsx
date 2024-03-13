import type { HeaderProps } from './Header.types'

import Heading from '@/app/common/components/atoms/Heading/Heading'
import RichText from '@/app/common/components/atoms/RichText/RichText'

const Header = ({ heading, headingType, caption }: HeaderProps) => {
  return (
    <header>
      <Heading
        type={headingType}
        text={heading}
      />
      <RichText text={caption} />
    </header>
  )
}

export default Header