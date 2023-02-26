import { React, useEffect } from "react";

import { db } from "../../../Firebase/firebase-conf";

import { ref, onValue } from "firebase/database";

export default function PatientRecord() {

  const clinicEmail = localStorage.getItem("adminEmail");

  const getPatient = async (e) => {
    const Approve = document.getElementById("Approved");
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail + "/patients");
    var html = "";
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        const PatientName =child.val()["FName"] +" "+child.val()["LName"];
        const PatientMobile = child.val()["Contact"];
        const PatientAddress = child.val()["Address"];
        const PatientSymptoms = child.val()["Symptoms"];
        const PatientDepartment = child.val()["departmentlist"];
        const PatientDoctor = child.val()["doctorlist"];
        const PatientAge = child.val()["Age"];
        const PatientSex = child.val()["Sex"];
        const PatientDate = child.val()["date"];
        const PatientKey = child.key;
        html +=
          "<tr>" +
          "<td>" +
          PatientName +
          "</td>" +
          "<td>" +
          PatientAge +
          "</td>" +
          "<td>" +
          PatientSex +
          "</td>" +
          "<td>" +
          PatientMobile +
          "</td>" +
          "<td>" +
          PatientAddress +
          "</td>" +
          "<td>" +
          PatientSymptoms +
          "</td>" +
          "<td>" +
          PatientDoctor +
          "</td>" +
          "<td>" +
          PatientDepartment +
          "</td>" +
          "<td>" +
          PatientDate +
          "</td>" +
          "<td class='text-center'>" +
          "<a href='/admin/patient/record/preview/"+PatientKey+"'style='text-decoration: none;'>" +
          "<button type='button' class='btn btn-success'>" +
          "<i class='fas fa-user-edit'>" +
          "</i>" +
          "</button>" +
          "</a>" +
          "</td> " +
          "<td class='text-center'>" +
          "<button type='button' class='btn btn-danger'>" +
          "<i class='fas fa-trash-alt'></i>" +
          "</button>" +
          "</td>" +
          "</tr>";
      });
      Approve.innerHTML = html;
    });
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
