import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDoctors } from "../../Database/AdminService";

export default function DoctorMain() {
  const [doctorcount, setdoctorcount] = useState(0);

  const HID = parseInt(localStorage.getItem("HId"), 10);

  const listDoctor = async () => {
    try {
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
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  useEffect(() => {
    listDoctor();
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
