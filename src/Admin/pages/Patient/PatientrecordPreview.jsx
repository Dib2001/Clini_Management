import { React, useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { db } from "../Firebase/firebase-conf";

import { ref, onValue, set } from "firebase/database";

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
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(
      db,
      "clinic/" + CEmail + "/patients/" + PatientKey.patientId
    );
    onValue(userdata, (snapshot) => {
      const patient = snapshot.val();
      if (snapshot.hasChildren() === false) {
        alert("Opps No Data Available");
        navigate("/admin/patient/approve");
      } else {
        Setpatient({
          Email: patient.Email,
          Contact: patient.Contact,
          FName: patient.FName,
          LName: patient.LName,
          Sex: patient.Sex,
          Age: patient.Age,
          Symptoms: patient.Symptoms,
          Address: patient.Address,
        });
      }
    });
  };

  const updatePatient = async (e) => {
    e.preventDefault();
    const CEmail = clinicEmail.replace(".", "");
    const PEmail = patient.Email.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail);
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        setclinicName(child.val()["adminClinicName"]);
        setclinicAddresss(child.val()["adminAddress"]);
      });
    });
    console.log(patientclinicName);
    await set(ref(db, "clinic/" + CEmail + "/patients/"+PatientKey.patientId), {
      date: document.getElementById("PatientDate").value,
      departmentlist: document.getElementById("departmentlist").value,
      doctorlist: document.getElementById("doctorlist").value,
      Email: patient.Email,
      Contact: patient.Contact,
      FName: patient.FName,
      LName: patient.LName,
      Sex: patient.Sex,
      Age: patient.Age,
      Symptoms: patient.Symptoms,
      Address: patient.Address,
    });
    await set(
      ref(db, "patient/" + PEmail + "/clinicstatus/" + patientclinicName),
      {
        date: document.getElementById("PatientDate").value,
        departmentlist: document.getElementById("departmentlist").value,
        doctorlist: document.getElementById("doctorlist").value,
        Patient_FirstName: patient.FName,
        Patient_LastName: patient.LName,
        Patient_Mobile: patient.Contact,
        Patient_Age: patient.Age,
        Patient_Address: patient.Address,
        Patient_Gender: patient.Sex,
        Patient_Symptoms: patient.Symptoms,
        Patient_Clinic_name: patientclinicName,
        Patient_Clinic_address: patientclinicAddress,
      }
    );
    alert("Patient Updated");
    navigate("/admin/patient/record");
  };

  const getDepartment = async (e) => {
    const departmentlist = document.getElementById("departmentlist");
    const CEmail = clinicEmail.replace(".", "");
    const department = ref(db, "clinic/" + CEmail + "/department");
    var html = "<option value=''>Select Department</option>";
    onValue(department, (snapshot) => {
      snapshot.forEach((child) => {
        const departmentName = child.val()["departmentname"];
        html +=
          "<option value=" +
          departmentName +
          ">" +
          departmentName +
          "</option>";
        departmentlist.innerHTML = html;
      });
    });
  };

  const getDoctor = async (e) => {
    const doctorlist = document.getElementById("doctorlist");
    const department = document.getElementById("departmentlist").value;
    const CEmail = clinicEmail.replace(".", "");
    const doctors = ref(db, "clinic/" + CEmail + "/doctors");
    var html = "<option value=''>Select Doctor</option>";
    onValue(doctors, (snapshot) => {
      snapshot.forEach((child) => {
        if (department === child.val()["doctorDepartment"]) {
          const doctorName = child.val()["doctorName"];
          html +=
            "<option value=" + doctorName + ">" + doctorName + "</option>";
        }
      });
      doctorlist.innerHTML = html;
    });
  };

  useEffect(() => {
    getDepartment();
    getPatient();
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
                    Approve
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
