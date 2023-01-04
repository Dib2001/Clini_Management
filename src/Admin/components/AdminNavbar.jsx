import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UNavbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ "background-color": "#cddfed" }}
      >
        <div className="container-fluid">
          <Link
            to="#"
            className="navbar-brand"
            style={{ "text-decoration": "none" }}
          >
            Your Clinic
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ "text-decoration": "none" }}
                  to="/admin/dashboard"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ "text-decoration": "none" }}
                  to="/admin/doctor"
                >
                  Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ "text-decoration": "none" }}
                  to="/admin/patient"
                >
                  Patient
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ "text-decoration": "none" }}
                  to="/admin/customer"
                >
                  Customer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ "text-decoration": "none" }}
                  to="/admin/dashboard"
                >
                  Medicine
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ "text-decoration": "none" }}
                  to="/admin/profile"
                >
                  Profile
                </Link>
              </li>
            </ul>
            <Link to="/">
              <button className="btn btn-danger" type="button">
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
