import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth,db } from "./Firebase/firebase-conf";

import { ref, onValue } from "firebase/database";

export default function UNavbar() {
  const dbopen = window.indexedDB.open("firebaseLocalStorageDb", 1);

  const navigate = useNavigate();

  const [clinicname, Setclinicname] = useState("");

  const clinicEmail = localStorage.getItem("adminEmail");
  const clear = () => {
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    navigate("/");
  };

  const getUser = async (e) => {
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail);
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        const clinicN = child.val()["adminClinicName"];
        Setclinicname(clinicN);
      });
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#cddfed" }}
      >
        <div className="container-fluid">
          <Link
            to="#"
            className="navbar-brand"
            style={{ textDecoration: "none" }}
          >
            {clinicname}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  to="/admin/dashboard"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  to="/admin/doctor"
                >
                  Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  to="/admin/patient"
                >
                  Patient
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  to="/admin/customer"
                >
                  Customer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  to="/admin/dashboard"
                >
                  Medicine
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  to="/admin/profile"
                >
                  Profile
                </Link>
              </li>
            </ul>
            <Link to="/">
              <button className="btn btn-danger" type="button" onClick={clear}>
                Log Out
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
