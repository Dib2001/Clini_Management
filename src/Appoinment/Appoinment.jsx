import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase/firebase-conf";

import { ref, onValue, set, push } from "firebase/database";

export default function Appoinment() {
  const navigate = useNavigate();

  const [patientEmail, setpatientEmail] = useState("");
  const [patientPassword, setpatientPassword] = useState("");
  const [patientFirstName, setpatientFirstName] = useState("");
  const [patientLastName, setpatientLastName] = useState("");
  const [patientMobile, setpatientMobile] = useState("");
  const [patientAge, setpatientAge] = useState("");
  const [patientSymptoms, setpatientSymptoms] = useState("");
  const [patientAddress, setpatientAddress] = useState("");
  // const getUser = async (e) => {
  //   const userdata = ref(db, 'clinic/');
  //   // onValue(userdata, (snapshot) => {
  //   //   snapshot.hasChild();
  //   });
  // };
  const getClinic = async (e) => {
    const Clinicdata = ref(db, "clinic");
    const clinicName = document.getElementById("clinicName");
    var cName = '<option value="">Select Clinic</option>';
    onValue(Clinicdata, (snapshot) => {
      snapshot.forEach((child) => {
        const clinicN = child.val()["profile"]["adminClinicName"];
        cName += '<option value="' + clinicN + '">' + clinicN + "</option>";
      });
      clinicName.innerHTML = cName;
    });
  };

  const getaddress = async (e) => {
    const Clinicdata = ref(db, "clinic");
    const clinicName = document.getElementById("clinicName").value;
    const clinicAddress = document.getElementById("clinicaddress");
    var cAddress = '<option value="">Select Address</option>';
    onValue(Clinicdata, (snapshot) => {
      snapshot.forEach((child) => {
        if (clinicName === child.val()["profile"]["adminClinicName"]) {
          const clinicAddrss = child.val()["profile"]["adminAddress"];
          cAddress +=
            '<option value="' +
            clinicAddrss +
            '">' +
            clinicAddrss +
            "</option>";
        }
      });
      clinicAddress.innerHTML = cAddress;
    });
  };

  const createUser = async (e) => {
    const Clinicdata = ref(db, "clinic");
    const patientGender = document.getElementById("gender").value;
    const clinicAddress = document.getElementById("clinicaddress").value;
    const clinicName = document.getElementById("clinicName").value;
    const PEmail = patientEmail.replace(".", "");
    await set(ref(db, "patient/" + PEmail + "/profile"), {
      Patient_Email: patientEmail,
      Patient_Password: patientPassword,
      Patient_FirstName: patientFirstName,
      Patient_LastName: patientLastName,
      Patient_Mobile: patientMobile,
      Patient_Age: patientAge,
      Patient_Address: patientAddress,
      Patient_Gender: patientGender,
    });
    await push(ref(db, "patient/" + PEmail + "/clinicstatus"), {
      Patient_FirstName: patientFirstName,
      Patient_LastName: patientLastName,
      Patient_Mobile: patientMobile,
      Patient_Age: patientAge,
      Patient_Address: patientAddress,
      Patient_Gender: patientGender,
      Patient_Symptoms: patientSymptoms,
      Patient_Clinic_name: clinicName,
      Patient_Clinic_address: clinicAddress,
      Patient_Clinic_Status: "0",
    });
    onValue(Clinicdata, (snapshot) => {
      snapshot.forEach(async (child) => {
        if (clinicName === child.val()["profile"]["adminClinicName"]) {
          if (clinicAddress === child.val()["profile"]["adminAddress"]) {
            const clinic = child
              .val()
              ["profile"]["adminEmail"].replace(".", "");
            await set(ref(db, "clinic/" + clinic + "/clinicstatus/" + PEmail), {
              Patient_FirstName: patientFirstName,
              Patient_LastName: patientLastName,
              Patient_Mobile: patientMobile,
              Patient_Age: patientAge,
              Patient_Symptoms: patientSymptoms,
              Patient_Address: patientAddress,
              Patient_Gender: patientGender,
              Patient_Email: patientEmail,
              Patient_Clinic_Status: "0",
            });
          }
        }
      });
    });
    window.location.reload(true);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, patientEmail, patientPassword);
      createUser();
      navigate("/Patient/Login");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        alert("Email Already Exsist");
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Enter Correct Email");
      }
    }
  };

  localStorage.removeItem("adminEmail");

  useEffect(() => {
    getClinic();
  });

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
      <div className="text-center container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Take Appointment</h1>
            <p className="lead text-muted">From Your Favourit Clinic</p>
          </div>
        </div>
      </div>
      <form className="row mx-5" onSubmit={registerUser}>
        <div className="col-sm-3 mb-3 mb-sm-0"></div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ backgroundColor: "#59cbc0" }}>
            <div className="card-header text-center">
              <select
                className="btn btn-warning mb-2 mx-2 btn-sm"
                id="clinicName"
                onClick={getaddress}
                required
              >
                <option value="">Select Clinic</option>
              </select>
              <select
                className="btn btn-success mb-2 btn-sm"
                id="clinicaddress"
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
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    required
                    autoComplete="on"
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
                <div className="col-md-6">
                  <button type="submit" className="btn btn-primary">
                    BOOK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0"></div>
      </form>
    </>
  );
}
