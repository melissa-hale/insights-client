import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand">
            <Link to="/"></Link>
            <div class="logo-image">
              <img
                src="https://i.imgur.com/khVtDE2.png"
                class="img-fluid"
              ></img>
            </div>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link">
                  <Link to="/">Write a Review</Link>
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/Home">Get Involved</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/Home">Contact</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <Link to="/Home">About</Link>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
    );
};

export default NavBar;