import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <div className="p-3" style={{ backgroundColor: "#26798b" }}>
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
          <div className="col-lg-8 mx-auto">
            <h1 className="fw-light">Subscrption</h1>
            <blockquote className="blockquote">
              <div className="row mx-5 my-3">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card text-center border-danger">
                    <div className="card-header">Offline</div>
                    <div className="card-body">
                      <h5 className="card-title">Save your on your pc</h5>
                      <p className="card-text">
                        You have to follow some steps to save your data on your pc. It is very simple to use.
                      </p>
                      <Link href="#" className="btn btn-info">
                        Comming Soon
                      </Link>
                    </div>
                    <div className="card-footer text-muted">Updating...</div>
                  </div>
                </div>
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="card text-center border-info">
                    <div className="card-header">Online</div>
                    <div className="card-body">
                      <h5 className="card-title">Save your data on Cloud</h5>
                      <p className="card-text">
                        Your data will be save on cloud. You can access your data over internet. It is very simple to use.
                      </p>
                      <Link href="#" className="btn btn-danger">
                      Comming Soon
                      </Link>
                    </div>
                    <div className="card-footer text-muted">Updating...</div>
                  </div>
                </div>
              </div>
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
