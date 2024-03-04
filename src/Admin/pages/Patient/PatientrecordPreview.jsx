import { React, useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

export default function PatientrecordPreview() {
  const navigate = useNavigate();

  const PatientKey = useParams();

  const clinicEmail = localStorage.getItem("adminEmail");

  const [patientclinicName, setclinicName] = useState("");

  const [patientclinicAddress, setclinicAddresss] = useState("");

  const [patient, Setpatient] = useState({
    Email: "",
    Contact: "",
    FName: "",
    LName: "",
    Sex: "",
    Age: "",
    Symptoms: "",
    Address: "",
  });

  const getPatient = async (e) => {
   
  };

  const updatePatient = async (e) => {
    e.preventDefault();
    
  };

  const getDepartment = async (e) => {
   
  };

  const getDoctor = async (e) => {
    
  };

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
  
  useEffect(() => {
    getDepartment();
    getPatient();
    DateTime();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-3 mb-3 mb-sm-0"></div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ backgroundColor: "#59cbc0" }}>
            <div className="card-header text-center">Preview Patient</div>
            <div className="card-body">
              <form className="row g-3" onSubmit={updatePatient}>
                <div className="col-md-6">
                  <label htmlFor="PatientDate" className="form-label">
                    Date
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="PatientDate"
                    min={currentDateTime}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="PatientDate" className="form-label">
                    Reports (*pdf)
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="PatientReports"
                    accept=".pdf"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pEmail" className="form-label">
                    Email
                  </label>
                  <input
                    readOnly
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="pEmail"
                    value={patient.Email}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pPhone" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    value={patient.Contact}
                    readOnly
                    type="tel"
                    className="form-control"
                    placeholder="Contact"
                    id="pPhone"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pFName" className="form-label">
                    First Name
                  </label>
                  <input
                    value={patient.FName}
                    readOnly
                    type="text"
                    className="form-control"
                    id="pFName"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pLName" className="form-label">
                    Last Name
                  </label>
                  <input
                    value={patient.LName}
                    readOnly
                    type="text"
                    className="form-control"
                    id="pLName"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pSex" className="form-label">
                    Sex
                  </label>
                  <input
                    value={patient.Sex}
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Sex"
                    id="pSex"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pAge" className="form-label">
                    Age
                  </label>
                  <input
                    value={patient.Age}
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Age"
                    id="pAge"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pSymptoms" className="form-label">
                    Symptoms
                  </label>
                  <input
                    value={patient.Symptoms}
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="Symptoms"
                    id="pSymptoms"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="pAddress" className="form-label">
                    Address
                  </label>
                  <textarea
                    value={patient.Address}
                    type="text"
                    readOnly
                    className="form-control"
                    placeholder="Address"
                    id="pAddress"
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
                <div className="col-md-6">
                  <button type="submit" className="btn btn-primary">
                    Update
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
