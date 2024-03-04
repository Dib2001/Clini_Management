import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PatientMain() {
  const [appointmentcount, setappointmentcount] = useState(0);
  const clinicEmail = localStorage.getItem("adminEmail");

  const listApprovePatient = async (e) => {
    
  };

  useEffect(() => {
    listApprovePatient();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
      <p className="fs-1 text-center">Patient</p>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/patient/record" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-danger ">
              <div className="card-header">Patient Record</div>
              <div className="card-body">
                <i
                  className="fas fa-user-injured"
                  style={{ "fontSize": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/patient/admit" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-success">
              <div className="card-header">Admit Patient</div>
              <div className="card-body">
                <i
                  className="fa fa-user-plus"
                  style={{ "fontSize": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/patient/approve" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-info ">
              <div className="card-header">
                Approve Appointment : {appointmentcount}
              </div>
              <div className="card-body">
                <i
                  className="fas fa-check-circle"
                  style={{ "fontSize": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
