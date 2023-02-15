import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

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
                <Link to="/feature" className="nav-link px-2 text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricnig" className="nav-link px-2 text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="nav-link px-2 text-white">
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
                  Clinic Portal
                </button>
              </Link>
              <Link to="/Patient/Login">
                <button type="button" className="btn btn-warning">
                  Patient Portal
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
      <div className="custom-shape-divider-bottom-1674155641">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </>
  );
}
