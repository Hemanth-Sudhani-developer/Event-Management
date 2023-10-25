import {Link} from "react-router-dom"
import "./index.css"

const Header=()=>(
    <nav className="header-container">
       <img src="https://res.cloudinary.com/dssjycgcm/image/upload/v1696760153/gx3zecnqm8y2s3l5wymj.png" alt="logo" className="header-logo-img"/>
       <ul className="nav-menu">
        <Link className="nav-link" to="/">
          <li className="li">HOME</li>
        </Link>
        <Link className="nav-link" to="/about">
          <li>ABOUT US</li>
        </Link>
        <Link className="nav-link" to="/events">
          <li>EVENTS</li>
        </Link>
        <Link className="nav-link" to="/contact">
          <li>CONTACT</li>
        </Link>
        <Link className="nav-link" to="/registration">
          <li>REGISTRATION</li>
        </Link>
        <Link className="nav-link" to="/login">
          <li>LOGIN</li>
        </Link>
      </ul>
    </nav>
)

export default Header