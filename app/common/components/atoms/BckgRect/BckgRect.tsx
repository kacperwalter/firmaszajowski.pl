import "./BckgRect.scss"

type BckgRectProps = {
    direction: "left" | "right"
}

const BckgRect = ({ direction = "left" }: BckgRectProps) => {
  // TODO start from here 
  return <div className={`bckg-rect`}></div>
}

export default BckgRect