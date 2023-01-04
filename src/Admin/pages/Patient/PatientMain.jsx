import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function PatientMain() {
  const [appointmentcount, setappointmentcount] = useState(0);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/patient/record" style={{ "text-decoration": "none" }}>
            <div className="card text-bg-danger ">
              <div className="card-header">Patient Record</div>
              <div className="card-body">
                <i
                  className="fas fa-user-injured"
                  style={{ "font-size": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/patient/admit" style={{ "text-decoration": "none" }}>
            <div className="card text-bg-success">
              <div className="card-header">Admit Patient</div>
              <div className="card-body">
                <i
                  className="fa fa-user-plus"
                  style={{ "font-size": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/patient/approve" style={{ "text-decoration": "none" }}>
            <div className="card text-bg-info ">
              <div className="card-header">
                Approve Appointment : {appointmentcount}
              </div>
              <div className="card-body">
                <i
                  className="fas fa-check-circle"
                  style={{ "font-size": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
