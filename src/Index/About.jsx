import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="p-3" style={{ backgroundColor: "#032830" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <Link to="/admin">
                <button type="button" className="btn btn-success me-2">
                  Clinic
                </button>
              </Link>
              <Link to="/Patient/Login">
                <button type="button" className="btn btn-warning">
                  Patient
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <figure className="text-center container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">About Me</h1>
            <blockquote className="blockquote">
              <p className="lead text-center">Typing.....</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Created By <cite title="Source Title">- D Chakraborty</cite>
            </figcaption>
          </div>
        </div>
      </figure>
    </>
  );
}
