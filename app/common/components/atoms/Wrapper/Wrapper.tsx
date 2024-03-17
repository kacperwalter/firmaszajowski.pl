import './Wrapper.scss'
import { type WrapperProps } from './Wrapper.types'

const Wrapper = ({ children, isWide, additionalClass = "" }: WrapperProps) => {
  return (
    <div className={`wrapper ${isWide ? "wrapper--wide" : "" } ${additionalClass && additionalClass}`}>
      {children}
    </div>
  )
}

export default Wrapper