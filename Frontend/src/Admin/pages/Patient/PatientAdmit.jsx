import { React, useState, useEffect } from "react";
import Select from "react-select";
import { CreatePatients, listDepartments, listDoctors } from "../../Database/AdminService";
import { message } from "antd";
export default function PatientAdmit() {

  const HID = parseInt(localStorage.getItem("HId"), 10);

  const [patientEmail, setpatientEmail] = useState("");
  const [patientName, setpatientFirstName] = useState("");
  const [patientMobile, setpatientMobile] = useState("");
  const [patientAge, setpatientAge] = useState("");
  const [patientSymptoms, setpatientSymptoms] = useState("");
  const [patientAddress, setpatientAddress] = useState("");


  const [currentDateTime, setcurrentDateTime] = useState("");
  const DateTime = (props) => {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var min = date.getMinutes();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    setcurrentDateTime(year + "-" + month + "-" + day + " " + hour + ":" + min);
  };

  const [doctorDepartment, setdoctorDepartment] = useState("");
  const [doctor, setdoctor] = useState("");
  const [Department, setDepartment] = useState([]);
  const [Doctor, setDoctor] = useState([]);
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
  const getDoctor = async (e) => {
    try {
      const res = await listDoctors();
      const filtered = res.data.filter(
        (data) =>
          data.hospitalId === HID && data.departmentID === doctorDepartment
      );
      console.log(filtered);
      const formattedData = filtered.map((data) => ({
        value: data.id,
        label: data.name,
      }));
      console.log(formattedData);
      setDoctor(formattedData);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const gender = document.getElementById("gender").value;
    const data = {
      clinicId: HID,
      departmentID: doctorDepartment,
      doctorID: doctor,
      name: patientName,
      email: patientEmail,
      phn: patientMobile,
      sex: gender,
      age: patientAge,
      symp: patientSymptoms,
      addr: patientAddress,
      currentDateTime,
      approvereject: "Y",
      remarks: null,
      pay: "400",
    };
    CreatePatients(data).then((res) => {
      message.success("User Created Successfully");
    });
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
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="PatientDate" className="form-label">
                    Date
                  </label>
                  <input
                    readOnly
                    type="datetime-local"
                    className="form-control"
                    id="PatientDate"
                    value={currentDateTime}
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
                  <label htmlFor="pFName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pFName"
                    placeholder="Name"
                    required
                    onChange={(event) => {
                      setpatientFirstName(event.target.value);
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

                <div className="col-sm-6">
                  <Select
                    required
                    options={Department}
                    onChange={(e) => {
                      setdoctorDepartment(e.value);
                      getDoctor(e);
                    }}
                  />
                </div>

                <div className="col-sm-6">
                  <Select
                    required
                    options={Doctor}
                    onChange={(e) => setdoctor(e.value)}
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-success" onClick={registerUser}>
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
