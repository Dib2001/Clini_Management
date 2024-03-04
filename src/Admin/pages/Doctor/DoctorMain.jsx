import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function DoctorMain() {
  const [doctorcount, setdoctorcount] = useState(0);

  const clinicEmail = localStorage.getItem("adminEmail");

  const listDoctore = async (e) => {
  };

  useEffect(() => {
    listDoctore();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
      <p className="fs-1 text-center">Doctor</p>
        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/doctor/record" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-danger ">
              <div className="card-header">Doctor Record : {doctorcount}</div>
              <div className="card-body">
                <i className="fa fa-user-md" style={{ "fontSize": "3rem" }} />
              </div>
            </div>
          </Link>
        </div>

        <div className="col-sm-4 mb-3 mb-sm-0">
          <Link to="/admin/doctor/register" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-success">
              <div className="card-header">Register Doctor</div>
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
          <Link to="/admin/doctor/specialisation" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-warning">
              <div className="card-header">Doctor Specialisation</div>
              <div className="card-body">
                <i className="fa fa-user-md" style={{ "fontSize": "3rem" }} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
