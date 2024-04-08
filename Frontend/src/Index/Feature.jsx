import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

export default function Feature() {
  const users = () => {
  };

  useEffect(() => {
    users();
  });

  const [Hospitals, setHospitals] = useState({
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  });

  const data = [
    ["Month", "Hospitals"],
    [new Date(2024, 0), Hospitals.Jan],
    [new Date(2024, 1), Hospitals.Feb],
    [new Date(2024, 2), Hospitals.Mar],
    [new Date(2024, 3), Hospitals.Apr],
    [new Date(2024, 4), Hospitals.May],
    [new Date(2024, 5), Hospitals.Jun],
    [new Date(2024, 6), Hospitals.Jul],
    [new Date(2024, 7), Hospitals.Aug],
    [new Date(2024, 8), Hospitals.Sep],
    [new Date(2024, 9), Hospitals.Oct],
    [new Date(2024, 10), Hospitals.Nov],
    [new Date(2024, 11), Hospitals.Dec],
  ];

  const options = {
    title: "Hospitals Added",
    curveType: "function",
    legend: { position: "bottom" },
    colors: ["#e0440e"],
  };

  return (
    <>
      <div className="p-3" style={{ backgroundColor: "#355e66" }}>
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
                  Hospital Portal
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
          <div className="col-lg-8 mx-auto">
            <h1 className="fw-light">Features</h1>
            <blockquote className="blockquote">
              <div className="row mx-5 my-3">
                <div className="col-sm-12 mb-3 mb-sm-0">
                  <div className="card text-center border-danger">
                    <div className="card-header">Regular Hospitals</div>
                    <div className="card-body">
                      <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                      />
                    </div>
                    <div className="card-footer text-muted">Updating...</div>
                  </div>
                </div>
              </div>
            </blockquote>
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
