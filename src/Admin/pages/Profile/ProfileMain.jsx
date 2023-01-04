import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function ProfileMain() {
  const [departmentcount, setdepartmentcount] = useState(0);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div
            className="card text-bg-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <div className="card-header">
              No Departments : {departmentcount}
            </div>
            <div className="card-body">
              <p className="card-text">Add Department</p>
              <i
                className="fas fa-clinic-medical"
                style={{ "font-size": "3rem" }}
              />
            </div>
          </div>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Add Departments
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <label htmlFor="ProfileDepartments" className="form-label">
                    Add Department
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="ProfileDepartments"
                    placeholder="Add Departments"
                    autoComplete="on"
                    list="departmentlist"
                  />
                  <datalist id="departmentlist">
                    <option value="Select">Select</option>
                  </datalist>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ "background-color": "#59cbc0" }}>
            <div className="card-header text-center">Profile</div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="ProfileOName" className="form-label">
                    Owner
                  </label>
                  <input
                    data-readonly
                    required
                    type="text"
                    className="form-control"
                    id="ProfileOName"
                    placeholder="Owner Name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfileContact" className="form-label">
                    Contact
                  </label>
                  <input
                    data-readonly
                    required
                    type="tel"
                    className="form-control"
                    id="ProfileContact"
                    placeholder="Contact"
                    maxLength={10}
                    minLength={10}
                    pattern="[6-9][0-9]{9}"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfielEmail" className="form-label">
                    Email
                  </label>
                  <input
                    data-readonly
                    required
                    type="email"
                    className="form-control"
                    id="ProfielEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfilePassword" className="form-label">
                    Passowrd
                  </label>
                  <input
                    data-readonly
                    required
                    type="password"
                    className="form-control"
                    id="ProfilePassword"
                    placeholder="Passowrd"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfielSName" className="form-label">
                    Shop Name
                  </label>
                  <input
                    data-readonly
                    required
                    type="text"
                    className="form-control"
                    id="ProfielSName"
                    placeholder="Shop Name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfileLicenseeNo" className="form-label">
                    Licensee No
                  </label>
                  <input
                    data-readonly
                    required
                    type="text"
                    className="form-control"
                    id="ProfileLicenseeNo"
                    placeholder="Licensee No"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="ProfileAddress" className="form-label">
                    Address
                  </label>
                  <textarea
                    readOnly
                    type="text"
                    className="form-control"
                    id="ProfileAddress"
                    placeholder="Address"
                    pattern="[A-Za-z]{1,}"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ProfileEdit"
                  >
                    Edit <i className="fas fa-edit" />
                  </button>
                  <div
                    className="modal fade"
                    id="ProfileEdit"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Edit Profile
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <form>
                          <div className="modal-body">
                            <div className="row g-3">
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileOEName"
                                  className="form-label"
                                >
                                  Owner
                                </label>
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfileOEName"
                                  placeholder="Owner-Name"
                                  pattern="[A-Za-z-A-Za-z]{1,}"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileEContact"
                                  className="form-label"
                                >
                                  Contact
                                </label>
                                <input
                                  required
                                  type="tel"
                                  className="form-control"
                                  id="ProfileEContact"
                                  placeholder="Contact"
                                  maxLength={10}
                                  minLength={10}
                                  pattern="[6-9][0-9]{9}"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfielEEmail"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  required
                                  type="email"
                                  className="form-control"
                                  id="ProfielEEmail"
                                  placeholder="Email"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileEPassword"
                                  className="form-label"
                                >
                                  Passowrd
                                </label>
                                <input
                                  required
                                  type="password"
                                  className="form-control"
                                  id="ProfileEPassword"
                                  placeholder="Passowrd"
                                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfielESName"
                                  className="form-label"
                                >
                                  Clinic Name
                                </label>
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfielESName"
                                  placeholder="Clinic-Name"
                                  pattern="[A-Za-z-A-Za-z]{1,}"
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileELicenseeNo"
                                  className="form-label"
                                >
                                  Licensee No
                                </label>
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfileELicenseeNo"
                                  placeholder="Licensee No"
                                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />
                              </div>
                              <div className="col-12">
                                <label
                                  htmlFor="ProfileEAddress"
                                  className="form-label"
                                >
                                  Address
                                </label>
                                <textarea
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfileEAddress"
                                  placeholder="Address"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-success">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0"></div>
      </div>
    </>
  );
}
