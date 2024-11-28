import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container">
        {/* Left Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="https://tequre.com/wp-content/uploads/2020/04/t-web-logo.png"
            alt="Logo"
            className="d-inline-block align-top"
            style={{ width: "140px", height: "40px" }}
          />
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Contact Button */}
        <div className="collapse navbar-collapse  justify-content-center" id="navbarNav">
          {/* Center Links */}
          <ul className="navbar-nav mx-auto  w-50 justify-content-center">
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark mx-2" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>

          {/* Right Button */}
          <div className="" style={{width:"190px"}}>
          <a href="#contact" className="btn btn-warning w-full" style={{width:"190px"}}>
            Contact Us
          </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
