import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";
import { db } from "../../src/Firebase/firebase-conf";
import { ref, onValue } from "firebase/database";

export default function Feature() {
  // const dbopen = window.indexedDB.open("firebaseLocalStorageDb", 1);

  // dbopen.onsuccess = (event) => {
  //   const db = dbopen.result;
  //   const object = db
  //     .transaction(["firebaseLocalStorage"], "readonly")
  //     .objectStore("firebaseLocalStorage");
  //   object.openCursor().onsuccess = (event) => {
  //     const cursor = event.target.result;
  //     const value = cursor['value'].value
  //     console.log(value['stsTokenManager']);
  //   };
  // };
  const users = () => {
    const Clinicdata = ref(db, "clinic");
    onValue(Clinicdata, (snapshot) => {
      snapshot.forEach((child) => {
        const created = child.val()["profile"]["adminCreated"];
        // setClinics({Jan:created})
      });
    });
  };

  useEffect(() => {
    users();
  });

  const [Clinics, setClinics] = useState({
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
    ["Month", "Clinics"],
    [new Date(2023, 0), Clinics.Jan],
    [new Date(2023, 1), Clinics.Feb],
    [new Date(2023, 2), Clinics.Mar],
    [new Date(2023, 3), Clinics.Apr],
    [new Date(2023, 4), Clinics.May],
    [new Date(2023, 5), Clinics.Jun],
    [new Date(2023, 6), Clinics.Jul],
    [new Date(2023, 7), Clinics.Aug],
    [new Date(2023, 8), Clinics.Sep],
    [new Date(2023, 9), Clinics.Oct],
    [new Date(2023, 10), Clinics.Nov],
    [new Date(2023, 11), Clinics.Dec],
  ];

  const options = {
    title: "Clinics Added",
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
          <div className="col-lg-8 mx-auto">
            <h1 className="fw-light">Features</h1>
            <blockquote className="blockquote">
              <div className="row mx-5 my-3">
                <div className="col-sm-12 mb-3 mb-sm-0">
                  <div className="card text-center border-danger">
                    <div className="card-header">Regular Clinics</div>
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
