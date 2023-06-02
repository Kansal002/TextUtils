// rfc
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom' 

export default function Navbar(props) { // props basically ek variable hai jise ham pass krte hai
  //`` ese tick lagakr ham string ko js banadete hai
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> 
      <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* a and href use krne se page poora reload hojata hai that's why ham Link and to use krte hai */}
          <Link className="nav-link" aria-current="page" to="/">Home</Link> 
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input" onClick={props.changeColor } type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.text}</label>
      </div>

    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = { // it used just for strict input 
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set Title Here",
    aboutText: "About text here"
}