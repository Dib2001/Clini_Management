import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function CustomerMain() {
  const [appointmentcount, setappointmentcount] = useState(0);

  return (
    <>
      <div className="row mx-5 my-3">
      <p className="fs-1 text-center">Customer</p>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <Link to="/admin/commingsoon" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-danger ">
              <div className="card-header">
                Total Customer : {appointmentcount}
              </div>
              <div className="card-body">
                <i
                  className="fas fa-calendar-alt"
                  style={{ "fontSize": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <Link to="/admin/commingsoon" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-success">
              <div className="card-header">
                Customer Bill
              </div>
              <div className="card-body">
                <i
                  className="fa fa-user-plus"
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
