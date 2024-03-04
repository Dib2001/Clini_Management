import { React, useEffect } from "react";

export default function PatientRecord() {

  const clinicEmail = localStorage.getItem("adminEmail");

  const getPatient = async (e) => {
    
  };

  useEffect(() => {
    getPatient();
  });

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-bordered border-succes">
              <caption className="text-center">List of Patient</caption>
              <thead className="table-danger">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">Symptoms</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Department</th>
                  <th scope="col">Date</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody id="Approved">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
