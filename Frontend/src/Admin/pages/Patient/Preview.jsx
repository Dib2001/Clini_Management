import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PatientsId, PatientsUpdateId, listDepartments, listDoctors } from "../../Database/AdminService";
import { message } from "antd";
import Select from "react-select";
export default function Preview() {
  const navigate = useNavigate();

  const PatientKey = useParams();
  const HID = parseInt(localStorage.getItem("HId"), 10);

  const [Department, setDepartment] = useState([]);
  const [Doctor, setDoctor] = useState([]);
  const [doctorDepartment, setdoctorDepartment] = useState("");
  const [doctor, setdoctor] = useState("");
  const [patient, setpatient] = useState([]);
  const [currentDateTime, setcurrentDateTime] = useState("");
  const DateTime = () => {
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

  const getPatient = async () => {
    const get = await PatientsId(PatientKey.patientId);
    setpatient(get.data)
  };

  const updatePatient = async () => {
    const get = await PatientsId(PatientKey.patientId);
    const {
      clinicId,
      departmentID,
      doctorID,
      name,
      email,
      phn,
      sex,
      age,
      symp,
      addr,
      date,
      remarks,
      pay,
    } = get.data;
    const extractedData = {
      clinicId,
      departmentID:doctorDepartment,
      doctorID:doctor,
      name,
      email,
      phn,
      sex,
      age,
      symp,
      addr,
      date:currentDateTime,
      approvereject:"Y",
      remarks,
      pay,
    };
    await PatientsUpdateId(PatientKey.patientId,extractedData).then((res) => {
      message.success("Approved");
    });
    navigate(`/admin/patient/approve`)
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
                    readOnly
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="pEmail"
                    value={patient.email}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pPhone" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    value={patient.phn}
                    readOnly
                    type="tel"
                    className="form-control"
                    placeholder="Contact"
                    id="pPhone"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pFName" className="form-label">
                    Name
                  </label>
                  <input
                    value={patient.name}
                    readOnly
                    type="text"
                    className="form-control"
                    id="pFName"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="pSex" className="form-label">
                    Sex
                  </label>
                  <input
                    value={patient.sex}
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
                    value={patient.age}
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
                    value={patient.symp}
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
                    value={patient.addr}
                    type="text"
                    readOnly
                    className="form-control"
                    placeholder="Address"
                    id="pAddress"
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
                <div className="col-md-6">
                  <button type="button" className="btn btn-primary" onClick={updatePatient}>
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
