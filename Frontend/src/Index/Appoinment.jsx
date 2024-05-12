import { React, useState, useEffect } from "react";
import { CreatePatients, listHospitals } from "../Admin/Database/AdminService";
import Select from "react-select";
import { QRCode, message } from "antd";

export default function Appoinment() {
  const [patientEmail, setpatientEmail] = useState("");
  const [patientName, setpatientName] = useState("");
  const [patientMobile, setpatientMobile] = useState("");
  const [patientAge, setpatientAge] = useState("");
  const [patientSymptoms, setpatientSymptoms] = useState("");
  const [patientAddress, setpatientAddress] = useState("");
  const [hospitalId, sethospitalId] = useState("");

  const [Validation, setValidation] = useState("col-sm-12 mb-12 mb-sm-0");

  const validationcheck = () => {
    setValidation("col-sm-12 mb-12 mb-sm-0 was-validated");
  };

  const [Hospital, setHospital] = useState([]);
  useEffect(() => {
    const getHospital = async () => {
      try {
        const res = await listHospitals();
        console.table(res.data);
        const formattedData = res.data.map((hospital) => ({
          value: hospital.id,
          label: `${hospital.hospitalName}, ${hospital.post}, ${hospital.district}, ${hospital.pin}, ${hospital.address}`,
          address: hospital.address,
        }));
        setHospital(formattedData);
      } catch (error) {
        console.error("Error fetching hospital data:", error);
      }
    };
    getHospital(); // Call getHospital when the component mounts
  }, []);

  const registerUser = async (e) => {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const data = {
      clinicId: hospitalId,
      departmentID: null,
      doctorID: null,
      name: patientName,
      email: patientEmail,
      phn: patientMobile,
      sex: gender,
      age: patientAge,
      symp: patientSymptoms,
      addr: patientAddress,
      date: new Date().toLocaleDateString(),
      approvereject: "N",
      remarks: null,
      pay: "400",
    };
    console.table(data);
    CreatePatients(data).then((res) => {
      message.success("User Created Successfully");
    });
  };

  return (
    <>
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
            <form className={Validation}>
              <div className="modal-body">
                <div className="card-header text-center">
                  <Select
                    options={Hospital}
                    onChange={(e) => sethospitalId(e.value)}
                  />
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
              <div className="modal-footer">
                <button
                  onClick={validationcheck}
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#PayModal"
                >
                  BOOK
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="PayModal"
        tabIndex={-1}
        aria-labelledby="PayModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="PayModalLabel">
                Pay Amount 400/-
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
                <div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-md-12 ">
                        <QRCode
                          type="svg"
                          value={`upi://pay?pa=7365955640@paytm&am=${400}&cu=INR`}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="pEmail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="pEmail"
                          disabled
                          value={patientEmail}
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
                          disabled
                          pattern="[6-9][0-9]{9}"
                          value={patientMobile}
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
                          disabled
                          pattern="[A-Za-z]{1,}"
                          value={patientName}
                        />
                        <div
                          className="invalid-feedback"
                          style={{ color: "#fbacb4" }}
                        >
                          Please enter First Name.
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

      <div className="row mx-5 mb-3">
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

      {/* Carosel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="front.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="front2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="high.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/*  */}
    </>
  );
}
