import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function PatientRecord() {
  const [patientcount, setpatientcount] = useState(0);
  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-bordered border-succes">
              <caption className="text-center">List of Patient</caption>
              <thead className="table-danger">
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">Symptoms</th>
                  <th scope="col">Department</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Date</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{patientcount}</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <i className="fas fa-check-circle" />
                    </button>
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
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Details Update
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
                              <div className="col-sm-12 mb-3 mb-sm-0">
                                <div
                                  className="card"
                                  style={{ "background-color": "#59cbc0" }}
                                >
                                  <div className="card-body">
                                    <div className="row g-3">
                                      <div className="col-md-6">
                                        <label
                                          htmlFor="PatientPDate"
                                          className="form-label"
                                        >
                                          Next Date
                                        </label>
                                        <input
                                          type="date"
                                          className="form-control form-control-sm"
                                          id="PatientPDate"
                                        />
                                      </div>

                                      <div className="col-md-6">
                                        <label
                                          htmlFor="PatientPUpload"
                                          className="form-label"
                                        >
                                          Reports (pdf, jpg)
                                        </label>
                                        <input
                                          type="file"
                                          className="form-control form-control-sm"
                                          id="PatientPUpload"
                                          accept=".pdf, .png, .jpg, .jpeg"
                                        />
                                      </div>

                                      <div className="col-md-12">
                                        <label
                                          htmlFor="PatientPDescription"
                                          className="form-label"
                                        >
                                          Description
                                        </label>
                                        <textarea
                                          type="text"
                                          className="form-control form-control-sm"
                                          id="PatientPDescription"
                                        />
                                      </div>

                                      <div className="col-sm-12">
                                        <select className="btn btn-secondary">
                                          <option value="">
                                            Select Department
                                          </option>
                                        </select>
                                      </div>

                                      <div className="col-sm-12">
                                        <select className="btn btn-secondary">
                                          <option value="">
                                            Select Doctor
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-success"
                                data-bs-dismiss="modal"
                              >
                                Done
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
