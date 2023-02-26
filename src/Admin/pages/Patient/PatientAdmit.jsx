import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../../../Firebase/firebase-conf";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { ref, onValue, set, push } from "firebase/database";

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

  const updatePatient = async (e) => {
    const patientSex = document.getElementById("gender").value;
    const CEmail = clinicEmail.replace(".", "");
    const PEmail = patientEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail);
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        setclinicName(child.val()["adminClinicName"]);
        setclinicAddresss(child.val()["adminAddress"]);
      });
    });
    console.log(patientclinicName);
    await push(ref(db, "clinic/" + CEmail + "/patients"), {
      date: document.getElementById("PatientDate").value,
      departmentlist: document.getElementById("departmentlist").value,
      doctorlist: document.getElementById("doctorlist").value,
      Email: patientEmail,
      Password : patientPassword,
      Contact: patientMobile,
      FName: patientFirstName,
      LName: patientLastName,
      Sex: patientSex,
      Age: patientAge,
      Symptoms: patientSymptoms,
      Address: patientAddress,
    });
    await set(ref(db, "patient/" + PEmail + "/profile"), {
      Patient_Email: patientEmail,
      Patient_Password: patientPassword,
      Patient_FirstName: patientFirstName,
      Patient_LastName: patientLastName,
      Patient_Mobile: patientMobile,
      Patient_Age: patientAge,
      Patient_Address: patientAddress,
      Patient_Gender: patientSex,
    });
    await set(ref(db, "patient/" + PEmail + "/clinicstatus/"+patientclinicName), {
      Patient_FirstName: patientFirstName,
      Patient_LastName: patientLastName,
      Patient_Mobile: patientMobile,
      Patient_Age: patientAge,
      Patient_Address: patientAddress,
      Patient_Gender: patientSex,
      Patient_Symptoms: patientSymptoms,
      date: document.getElementById("PatientDate").value,
      departmentlist: document.getElementById("departmentlist").value,
      doctorlist: document.getElementById("doctorlist").value,
      Patient_Clinic_name: patientclinicName,
      Patient_Clinic_address: patientclinicAddress,
    });
    alert("Patient Registered");
    navigate("/admin/patient/admit");
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, patientEmail, patientPassword);
      updatePatient();
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        alert("Email Already Exsist");
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Enter Correct Email");
      }
    }
  };

  useEffect(() => {
    getDepartment();
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
