import React from "react"
import {Link} from "react-router-dom";

function Header() {
  return (
    <div>
      {/* <header>This is the header</header> */}

      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="index.html">MXADAM//MX6</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className='text-link' to={"./"}>Home <span class="sr-only">(current)</span></Link>|
            </li>
            <li className="nav-item">
              <Link className='text-link' to={"./portfolio"}> Portfolio </Link>|
            </li>
            <li className="nav-item">
              <Link className='text-link' to={"./github"}> GitHub Projects </Link>|
            </li>
            <li className="nav-item">
              <Link className='text-link' to={"./contact"}> Contact</Link>
            </li>

          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Header;