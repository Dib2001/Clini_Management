import { React, useState, useEffect } from "react";
export default function DoctorRegister() {

  const [doctorName, setdoctorName] = useState("");
  const [doctorEmail, setdoctorEmail] = useState("");
  const [doctorContact, setdoctorContact] = useState("");
  const [doctorAddress, setdoctorAddress] = useState("");
  const [doctorDepartment, setdoctorDepartment] = useState("");

  const clinicEmail = localStorage.getItem("adminEmail");

  const addDoctor = async (e) => {
    e.preventDefault();
    alert("Doctor Successfully added")
  };

  const getDepartment = async (e) => {
    
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
            <div className="card-header text-center">Register Doctor</div>
            <div className="card-body">
              <form className="row g-3" onSubmit={addDoctor}>
                <div className="col-md-12">
                  <label htmlFor="DoctorName" className="form-label">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="DoctorName"
                    placeholder="Doctor-Name"
                    pattern="[A-Za-z-A-Za-z]{1,}"
                    onChange={(event) => {
                      setdoctorName(event.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="DoctorEmail" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="DoctorEmail"
                    placeholder="Email"
                    onChange={(event) => {
                      setdoctorEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="DoctorContact" className="form-label">
                    Contact
                  </label>
                  <input
                    required
                    type="tel"
                    className="form-control"
                    id="DoctorContact"
                    placeholder="Contact"
                    maxLength={10}
                    minLength={10}
                    pattern="[6-9][0-9]{9}"
                    onChange={(event) => {
                      setdoctorContact(event.target.value);
                    }}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="DoctorAddress" className="form-label">
                    Address
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="DoctorAddress"
                    placeholder="Address"
                    required
                    onChange={(event) => {
                      setdoctorAddress(event.target.value);
                    }}
                  />
                </div>
                <div className="col-sm-6">
                  <select
                    className="btn btn-secondary"
                    required
                    id="departmentlist"
                    onChange={(event) => {
                      setdoctorDepartment(event.target.value);
                    }}
                  >
                    <option value="">Select Department</option>
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
