import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function DoctorSpecialisation() {
  const [doctorcount, setdoctorcount] = useState(0);
  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-success table-striped table-hover">
              <caption className="text-center">List of Doctors & Department</caption>
              <thead className="table-light">
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{doctorcount}</th>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
