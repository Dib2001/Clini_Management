import { React, useState, useEffect } from "react";
import {
  CreateDoctors,
  DoctorsName,
  listDepartments,
} from "../../Database/AdminService";
import Select from "react-select";
import { message } from "antd";

export default function DoctorRegister() {
  const [doctorName, setdoctorName] = useState("");
  const [doctorEmail, setdoctorEmail] = useState("");
  const [doctorContact, setdoctorContact] = useState("");
  const [doctorAddress, setdoctorAddress] = useState("");
  const [doctorDepartment, setdoctorDepartment] = useState("");
  const [Department, setDepartment] = useState([]);

  const HID = parseInt(localStorage.getItem("HId"), 10);

  const [DoctorExists, setDoctorExists] = useState(false);
  const DoctorCheck = async (e) => {
    e.preventDefault();
    const Doctor = e.target.value;
    try {
      const res = await DoctorsName(Doctor);
      if (res.data && res.data.hospitalId === HID) {
        message.warning("Docotr already exists");
        setDoctorExists(true);
      } else {
        setDoctorExists(false);
      }
    } catch (error) {
      setDoctorExists(false);
    }
  };

  const addDoctor = async (e) => {
    e.preventDefault();
    const data = {
      email: doctorEmail,
      name: doctorName,
      hospitalId: HID,
      departmentID: doctorDepartment,
      mobile: doctorContact,
      address: doctorAddress,
    };
    await CreateDoctors(data).then(() => alert("Doctor Successfully added"));
  };

  const getDepartment = async () => {
    try {
      const res = await listDepartments();
      const filtered = res.data.filter((data) => data.hospitalId === HID);
      const formattedData = filtered.map((data) => ({
        value: data.id,
        label: data.name,
      }));
      setDepartment(formattedData);
    } catch (error) {
      console.error("Error fetching departments:", error);
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
                    onKeyUp={DoctorCheck}
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
                  <Select
                    required
                    options={Department}
                    onChange={(e) => setdoctorDepartment(e.value)}
                  />
                </div>
                <div className="col-12">
                  {!DoctorExists ? (
                    <button
                      type="submit"
                      className="btn btn-success"
                    >
                      Add <i className="fas fa-plus" />
                    </button>
                  ) : null}
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
