import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function DoctorMain() {
  const [doctorcount, setdoctorcount] = useState(0);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/doctor/record" style={{ "text-decoration": "none" }}>
            <div className="card text-bg-danger ">
              <div className="card-header">Doctor Record : {doctorcount}</div>
              <div className="card-body">
                <i className="fa fa-user-md" style={{ "font-size": "3rem" }} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/doctor/register" style={{ "text-decoration": "none" }}>
            <div className="card text-bg-success">
              <div className="card-header">Register Doctor</div>
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
          <Link to="/admin/doctor/specialisation" style={{ "text-decoration": "none" }}>
            <div className="card text-bg-warning">
              <div className="card-header">Doctor Specialisation</div>
              <div className="card-body">
                <i className="fa fa-user-md" style={{ "font-size": "3rem" }} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
