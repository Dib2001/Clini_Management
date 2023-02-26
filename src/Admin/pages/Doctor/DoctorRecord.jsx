import { React, useEffect } from "react";

import { db } from "../../../Firebase/firebase-conf";

import { ref, onValue } from "firebase/database";

export default function DoctorRecord() {
  const clinicEmail = localStorage.getItem("adminEmail");

  const getDoctor = async (e) => {
    const Doctor = document.getElementById("Doctorlist");
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail + "/doctors");
    var html = "";
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        const DoctorName = child.val()["doctorName"];
        const DoctorMobile = child.val()["doctorContact"];
        const DoctorAddress = child.val()["doctorAddress"];
        const DoctorDepartment = child.val()["doctorDepartment"];
        html +=
          "<tr>" +
          "<td>" +
          DoctorName +
          "</td>" +
          "<td>" +
          DoctorMobile +
          "</td>" +
          "<td>" +
          DoctorAddress +
          "</td>" +
          "<td>" +
          DoctorDepartment +
          "</td>" +
          "<td>" +
          "<button type='button' class='btn btn-success'>" +
          "<i class='fas fa-user-edit'></i>" +
          "</button>" +
          "</td>" +
          "<td>" +
          "<button type='button' class='btn btn-danger'>" +
          "<i class='fas fa-trash-alt'></i>" +
          "</button>" +
          "</td>" +
          "</tr>"
        Doctor.innerHTML = html;
      });
    });
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-bordered border-succes">
              <caption className="text-center">List of Doctors</caption>
              <thead className="table-danger">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">Department</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody id="Doctorlist">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
