import Link from "next/link"
import './Dropdown.scss'

const Dropdown = () => {
  return (
    <ul className="dropdown">
      <li>
        <Link href="/osiedle-sadowa">
          <h5>Osiedle Sadowa</h5>
          <p>Nowoczesne domy dwulokalowe</p>
        </Link>
      </li>

      <li>
        <Link href="/osiedle-polana">
          <h5>Leśna Polana</h5>
          <p>Domy wolnostojące</p>
        </Link>
      </li>

      <li>
        <Link href="/osiedle-gajowa">
          <h5>Osiedle Gajowa</h5>
          <p>Nowoczesne domy dwulokalowe</p>
        </Link>
      </li>

      <li>
        <Link href="/osiedle-sadowa">
          <h5>Osiedle Sadowa</h5>
          <p>Nowoczesne domy dwulokalowe</p>
        </Link>
      </li>
    </ul>
  )
}

export default Dropdown