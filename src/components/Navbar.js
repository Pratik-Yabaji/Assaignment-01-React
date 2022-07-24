import React from "react";

export default function () {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          iNVENTORY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Music
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Tech
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
