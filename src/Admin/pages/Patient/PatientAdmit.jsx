import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function PatientAdmit() {
  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-4 mb-3 mb-sm-0"></div>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div className="card" style={{ "background-color": "#59cbc0" }}>
            <div className="card-header text-center">Register Patient</div>
            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="PatientDate" className="form-label">
                    Date
                  </label>
                  <input
                    required
                    type="date"
                    className="form-control"
                    id="PatientDate"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="PatientFName" className="form-label">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="PatientFName"
                    placeholder="First Name"
                    pattern="[A-Za-z]{1,}"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="PatientLName" className="form-label">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="PatientLName"
                    placeholder="Last Name"
                    pattern="[A-Za-z]{1,}"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="PatientEmail" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="PatientEmail"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="PatientPassword" className="form-label">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="PatientPassword"
                    placeholder="Password"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="PatientContact" className="form-label">
                    Contact
                  </label>
                  <input
                    required
                    type="tel"
                    className="form-control"
                    id="PatientContact"
                    placeholder="Contact"
                    maxLength={10}
                    minLength={10}
                    pattern="[6-9][0-9]{9}"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="PatientSymptoms" className="form-label">
                    Symptoms
                  </label>
                  <input
                    required
                    type="tel"
                    className="form-control"
                    id="PatientSymptoms"
                    placeholder="Symptoms"
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="PatientAddress" className="form-label">
                    Address
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="PatientAddress"
                    placeholder="Address"
                  />
                </div>

                <div className="col-sm-12">
                  <select className="btn btn-secondary" required>
                    <option value="">Select Department</option>
                  </select>
                </div>

                <div className="col-sm-12">
                  <select className="btn btn-secondary" required>
                    <option value="">Select Doctor</option>
                  </select>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success">
                    Add <i className="fas fa-plus" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-0"></div>
      </div>
    </>
  );
}
