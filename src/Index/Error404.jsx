import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  
  return (
    <>
      <div className="p-3 fixed-top" style={{ backgroundColor: "#0c3833" }}>
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
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
        </div>
      </div>
    </>
  );
}
