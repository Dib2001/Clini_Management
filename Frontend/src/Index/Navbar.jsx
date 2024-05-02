import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="p-3 text-bg-dark">
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
                <Link to="/pricing" className="nav-link px-2 text-white">
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
                  Hospital Portal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
