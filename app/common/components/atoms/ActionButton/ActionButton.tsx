import "./ActionButton.scss"

const ActionButton = () => {
  return (
    <button className="action-button">
      <svg className="action-button__arrow" width="14" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 13L12.59 11.59L8 16.17V0H6V16.17L1.41 11.58L0 13L7 20L14 13Z" fill="black"/>
      </svg>
    </button>
  )
}

export default ActionButton