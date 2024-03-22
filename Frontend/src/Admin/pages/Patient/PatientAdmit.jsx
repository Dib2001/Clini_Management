import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientAdmit() {
  const navigate = useNavigate();

  const clinicEmail = localStorage.getItem("adminEmail");

  const [patientEmail, setpatientEmail] = useState("");
  const [patientPassword, setpatientPassword] = useState("");
  const [patientFirstName, setpatientFirstName] = useState("");
  const [patientLastName, setpatientLastName] = useState("");
  const [patientMobile, setpatientMobile] = useState("");
  const [patientAge, setpatientAge] = useState("");
  const [patientSymptoms, setpatientSymptoms] = useState("");
  const [patientAddress, setpatientAddress] = useState("");
  const [patientclinicName, setclinicName] = useState("");
  const [patientclinicAddress, setclinicAddresss] = useState("");

  const [currentDateTime, setcurrentDateTime] = useState("");
  const DateTime = (props) => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    if(day<10) day ='0'+day;
    if(month<10) month ='0'+month;
    if(hour<10) hour ='0'+hour;
    if(min<10) min ='0'+min;
    setcurrentDateTime(
      year + "-" + month + "-" + day + " " + hour + ":" + min
    );
  };

  const getDepartment = async (e) => {
   
  };

  const getDoctor = async (e) => {
    
  };

  const updatePatient = async (e) => {
    
  };

  const registerUser = async (e) => {
    e.preventDefault();
    
  };

  useEffect(() => {
    getDepartment();
    DateTime();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-3 mb-3 mb-sm-0"></div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ backgroundColor: "#59cbc0" }}>
            <div className="card-header text-center">Register Patient</div>
            <div className="card-body">
              <form className="row g-3" onSubmit={registerUser}>
                <div className="col-md-12">
                  <label htmlFor="PatientDate" className="form-label">
                    Date
                  </label>
                  <input
                    required
                    type='datetime-local'
                    className="form-control"
                    id="PatientDate"
                    min={currentDateTime}
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
                    required
                    onChange={(event) => {
                      setpatientEmail(event.target.value);
                    }}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="pPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pPassword"
                    placeholder="Password"
                    required
                    autoComplete="on"
                    minLength={6}
                    onChange={(event) => {
                      setpatientPassword(event.target.value);
                    }}
                  />
                </div>

                <div className="col-md-6">
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
                    onChange={(event) => {
                      setpatientFirstName(event.target.value);
                    }}
                  />
                </div>

                <div className="col-md-6">
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
                    onChange={(event) => {
                      setpatientLastName(event.target.value);
                    }}
                  />
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
                </div>

                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <br />
                  <select
                    className="btn btn-warning mb-2 btn-md"
                    id="gender"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="pAge" className="form-label">
                    Age
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    id="pAge"
                    required
                    onChange={(event) => {
                      setpatientAge(event.target.value);
                    }}
                  />
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
                </div>

                <div className="col-12">
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
                </div>

                <div className="col-sm-12">
                  <select
                    className="btn btn-secondary"
                    id="departmentlist"
                    onClick={getDoctor}
                    required
                  >
                    <option value="">Select Department</option>
                  </select>
                </div>

                <div className="col-sm-12">
                  <select
                    className="btn btn-secondary"
                    id="doctorlist"
                    required
                  >
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
        <div className="col-sm-3 mb-3 mb-sm-0"></div>
      </div>
    </>
  );
}
