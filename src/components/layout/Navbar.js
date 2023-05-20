import { Link } from "react-router-dom"

function Navbar() {
    return (<> <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <ul>
        <li><Link to="/about">About</Link></li>
      </ul>
      <ul>
        <li><Link to="/contact">Contact</Link></li>
      </ul> 
    </> )
}

export default Navbar