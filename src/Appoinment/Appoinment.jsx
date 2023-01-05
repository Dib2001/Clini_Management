import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase/firebase-conf";

import { ref, set, onValue } from "firebase/database";

export default function Appoinment() {
  
  // const getUser = async (e) => {
  //   const userdata = ref(db, 'clinic/');
  //   // onValue(userdata, (snapshot) => {
  //   //   snapshot.hasChild();
  //   });
  // };

  const [pin, SetPin] = useState({
    district: "",
    state: "",
  });

  const getarea = (event) => {
    let pincode = event.target;
    if (pincode.value !== "" && pincode.value.length === 6) {
      fetch("https://api.postalpincode.in/pincode/" + pincode.value)
        .then((response) => response.json())
        .then((data) => {
          if (data[0].PostOffice === null) {
          } else {
            for (let i = 0; i < data[0].PostOffice.length; i++) {
              let info = data[0].PostOffice[i];
              SetPin({
                district: info.District,
                state: info.State,
              });
            }
          }
        });
    } else {
      SetPin({
        district: "",
        state: "",
      });
    }
  };
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
                <Link to="/" className="nav-link px-2 text-white">
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
      <section className="py-2 text-center container">
        <div className="row py-lg-5 mb-3">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Take Appointment</h1>
            <p className="lead text-muted">
              From Your Favourit Clinic, Register Yourself First
            </p>
            <select className="btn btn-outline-success">
              <option value="">Select Clinic</option>
            </select>
            <p className="lead text-muted">Register Yourself First</p>
          </div>
        </div>
        <form className="row gy-2 gx-3 align-items-center">
          <div className="row">
            <div className="col-auto">
              <label htmlFor="pEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="pEmail"
                required
              />
            </div>
            <div className="col-auto">
              <label htmlFor="pPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="pPassword"
                placeholder="Password"
                minLength={8}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <label htmlFor="pFName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="pFName"
                placeholder="First Name"
                required
                pattern="[A-Za-z]{1,}"
              />
            </div>
            <div className="col-auto">
              <label htmlFor="pLName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="pLName"
                placeholder="Last Name"
                required
                pattern="[A-Za-z]{1,}"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <label htmlFor="pPhone" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="Contact"
                id="pPhone"
                maxLength={10}
                minLength={10}
                required
                pattern="[6-9][0-9]{9}"
              />
            </div>
            <div className="col-auto">
              <label htmlFor="pPin" className="form-label">
                Pincode
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Pincode"
                pattern="[1-9][0-9]{5}"
                maxLength={6}
                minLength={6}
                required
                id="pPin"
                onKeyUp={getarea}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <label htmlFor="pDistrict" className="form-label">
                District
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="District"
                data-readonly
                id="pDistrict"
                value={pin.district}
                required
                onChange={getarea}
              />
            </div>
            <div className="col-auto">
              <label htmlFor="pState" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                data-readonly
                id="pState"
                value={pin.state}
                required
                onChange={getarea}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-auto">
              <label htmlFor="pSymptoms" className="form-label">
                Symptoms
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Symptoms"
                id="pSymptoms"
                required
              />
            </div>
            <div className="col-auto">
              <label htmlFor="pDepartment" className="form-label">
                Department
              </label>
              <select
                id="pDepartment"
                className="form-select btn btn-outline-success"
                required
              >
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
