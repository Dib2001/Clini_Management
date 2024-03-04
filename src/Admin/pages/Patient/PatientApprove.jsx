import { React, useEffect } from "react";

export default function PatientApprove() {

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
              <caption className="text-center">Patient Wants To Admit</caption>
              <thead className="table-danger">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">Symptoms</th>
                  <th scope="col">Age</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Approve</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody id="needApprove"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
