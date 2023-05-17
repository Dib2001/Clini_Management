import { React, useState, useEffect } from "react";

import { ref, onValue } from "firebase/database";
import { db } from "../../../Firebase/firebase-conf";

export default function UHome() {
  const clinicEmail = localStorage.getItem("adminEmail");

  const [doctorcount, setdoctorcount] = useState(0);

  const [patientcount, setpatientcount] = useState(0);
  const [todaypatientcount, settodaypatientcount] = useState(0);

  const [approveappointmentcount, setapproveappointmentcount] = useState(0);

  const [medicinecount, setmedicinecount] = useState(0);
  const [todaymedicinecount, settodaymedicinecount] = useState(0);

  const [patientFNamecount, setpatientFNamecount] = useState();
  const [patientLNamecount, setpatientLNamecount] = useState();
  const [patientSympNamecount, setpatientSympNamecount] = useState();
  const [patientMobileNamecount, setpatientMobileNamecount] = useState();
  const [patientAddressNamecount, setpatientAddressNamecount] = useState();
  const [patientStatusNamecount, setpatientStatusNamecount] = useState();

  const listDoctore = async (e) => {
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail + "/doctors");
    onValue(userdata, (snapshot) => {
      const nolist = snapshot.size;
      setdoctorcount(nolist);
    });
  };

  const listApprovePatient = async (e) => {
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail + "/clinicstatus");
    onValue(userdata, (snapshot) => {
      const nolist = snapshot.size;
      setapproveappointmentcount(nolist);
    });
  };

  useEffect(() => {
    listDoctore();
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
            <div className="card-header">Total Patient : {patientcount}</div>
            <div className="card-body">
              <p className="card-text">Today Patient : {todaypatientcount}</p>
              <i className="fas fa-user-plus" style={{ fontSize: "3rem" }} />
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div className="card text-bg-info ">
            <div className="card-header">Appointment</div>
            <div className="card-body">
              <p className="card-text">
                Approve Appointments : {approveappointmentcount}
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
        {/* <div className="col-sm-6">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-bordered border-success">
              <caption>Recent Patient</caption>
              <thead>
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Symptoms</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{patientcount}</th>
                  <td>{patientFNamecount}</td>
                  <td>{patientLNamecount}</td>
                  <td>{patientSympNamecount}</td>
                  <td>{patientMobileNamecount}</td>
                  <td>{patientAddressNamecount}</td>
                  <td>{patientStatusNamecount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-bordered border-success">
              <caption>No of Medicine</caption>
              <thead>
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Medincine Name</th>
                  <th scope="col">Symptoms</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{patientcount}</th>
                  <td>{patientFNamecount}</td>
                  <td>{patientSympNamecount}</td>
                  <td>{patientMobileNamecount}</td>
                  <td>{patientAddressNamecount}</td>
                  <td>{patientStatusNamecount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </>
  );
}
