import { React, useState, useEffect } from "react";
import { listDoctors, listPatients } from "../../Database/AdminService";

export default function UHome() {
  const HID = parseInt(localStorage.getItem("HId"), 10);

  const [doctorcount, setdoctorcount] = useState(0);

  const [medicinecount, setmedicinecount] = useState(0);
  const [todaymedicinecount, settodaymedicinecount] = useState(0);

  const listDoctore = async (e) => {
    const res = await listDoctors();
    let count = 0;
    res.data.filter((data) => {
      if (data.hospitalId === HID) {
        count++;
        return true;
      }
      return false;
    });
    setdoctorcount(count);
  };

  const [approveappointmentcount, setapproveappointmentcount] = useState(0);
  const listPatient = async () => {
    const res = await listPatients();
    let count = 0;
    res.data.forEach((patient) => {
      if (patient.approvereject === "Y" && patient.clinicId === HID) {
        count++;
      }
    });
    setapproveappointmentcount(count);
  };

  const [appointmentcount, setappointmentcount] = useState(0);
  const listApprovePatient = async () => {
    const res = await listPatients();
    let count = 0;
    res.data.forEach((patient) => {
      if (patient.approvereject === "N" && patient.clinicId === HID) {
        console.table(patient);
        count++;
      }
    });
    setappointmentcount(count);
  };

  useEffect(() => {
    listDoctore();
    listPatient();
    listApprovePatient();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
        <p className="fs-1 text-center">Dashbord</p>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-danger ">
            <div className="card-header">Total Doctor : {doctorcount}</div>
            <div className="card-body">
              <p className="card-text">Your Best Doctors</p>
              <i className="fa fa-user-md" style={{ fontSize: "3rem" }} />
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-success">
            <div className="card-header">Total Patient</div>
            <div className="card-body">
              <p className="card-text">Today Patient : {approveappointmentcount}</p>
              <i className="fas fa-user-plus" style={{ fontSize: "3rem" }} />
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-info ">
            <div className="card-header">Appointment</div>
            <div className="card-body">
              <p className="card-text">
                Approve Appointments : {appointmentcount}
              </p>
              <i className="fa fa-calendar" style={{ fontSize: "3rem" }} />
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-warning  ">
            <div className="card-header">Total Medicine : {medicinecount}</div>
            <div className="card-body">
              <p className="card-text">
                Number of Medicine added today : {todaymedicinecount}
              </p>
              <i className="fa fa-medkit" style={{ fontSize: "3rem" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
