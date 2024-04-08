import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { v4 as uuid } from "uuid";

export default function Appoinment() {
  const navigate = useNavigate();

  const [patientEmail, setpatientEmail] = useState("");
  const [patientName, setpatientName] = useState("");
  const [patientMobile, setpatientMobile] = useState("");
  const [patientAge, setpatientAge] = useState("");
  const [patientSymptoms, setpatientSymptoms] = useState("");
  const [patientAddress, setpatientAddress] = useState("");

  const [Validation, setValidation] = useState("col-sm-12 mb-12 mb-sm-0");

  const unique_id = uuid();
  const patientPassword = unique_id.slice(0, 8);

  const validationcheck = () => {
    setValidation("col-sm-12 mb-12 mb-sm-0 was-validated");
  };

  const getHospital = async (e) => {};

  const getaddress = async (e) => {};

  const createUser = async (e) => {};

  const registerUser = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getHospital();
  }, [1]);

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
                <button type="button" className="btn btn-warning me-2">
                  Patient Portal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Appointment For New User</h1>
            <p className="lead text-muted">From Your Favourit Hospital</p>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Take Appointment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form className={Validation} onSubmit={registerUser}>
              <div className="modal-body">
                <div
                  className="card text-white"
                  style={{ backgroundColor: "#254a52" }}
                >
                  <div className="card-header text-center">
                    <select
                      className="btn btn-warning mb-2 mx-2 btn-sm"
                      id="HospitalName"
                      onClick={getaddress}
                      required
                    >
                      <option value="">Select Hospital</option>
                    </select>
                    <select
                      className="btn btn-success mb-2 btn-sm"
                      id="Hospitaladdress"
                      required
                    >
                      <option value="">Select Address</option>
                    </select>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="pEmail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="pEmail"
                          required
                          onChange={(event) => {
                            setpatientEmail(event.target.value);
                          }}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please enter an valid Email.
                        </div>
                      </div>

                      <div className="col-md-6">
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
                          onChange={(event) => {
                            setpatientMobile(event.target.value);
                          }}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please enter Mobile Number.
                        </div>
                      </div>

                      <div className="col-md-12">
                        <label htmlFor="pName" className="form-label">
                          Patient Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pName"
                          placeholder="Name"
                          required
                          pattern="[A-Za-z]{1,}"
                          onChange={(event) => {
                            setpatientName(event.target.value);
                          }}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please enter First Name.
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">Gender</label>
                        <br />
                        <select
                          className="btn btn-warning mb-2 btn-md form-select"
                          id="gender"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please select Gender.
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="pAge" className="form-label">
                          Age
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Age"
                          id="pAge"
                          required
                          maxLength={3}
                          minLength={1}
                          pattern="[0-9]{1,3}"
                          onChange={(event) => {
                            setpatientAge(event.target.value);
                          }}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please enter a Age.
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="pSymptoms" className="form-label">
                          Symptoms
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Symptoms"
                          id="pSymptoms"
                          required
                          onChange={(event) => {
                            setpatientSymptoms(event.target.value);
                          }}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please enter Symptoms.
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="pAddress" className="form-label">
                          Address
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          id="pAddress"
                          required
                          onChange={(event) => {
                            setpatientAddress(event.target.value);
                          }}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please enter Address.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  onClick={validationcheck}
                  className="btn btn-primary"
                >
                  BOOK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row mx-5">
        <div className="col-sm-4 mb-4 mb-sm-0"></div>
        <div className="col-sm-4 mb-4 mb-sm-0 text-center">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Click To Book
          </button>
        </div>
        <div className="col-sm-4 mb-4 mb-sm-0"></div>
      </div>
      <div className="custom-shape-divider-bottom-1674156302">
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
