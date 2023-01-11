import { React, useEffect } from "react";

import { Link } from "react-router-dom";

import { db } from "../Firebase/firebase-conf";

import { ref, onValue } from "firebase/database";

export default function PatientApprove() {

  const clinicEmail = localStorage.getItem("adminEmail");

  const getPatient = async (e) => {
    const needApprove = document.getElementById("needApprove");
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail + "/clinicstatus");
    var html = "";
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        const PatientName =
          child.val()["Patient_FirstName"] +
          " " +
          child.val()["Patient_LastName"];
        const PatientMobile = child.val()["Patient_Mobile"];
        const PatientAddress = child.val()["Patient_Address"];
        const PatientSymptoms = child.val()["Patient_Symptoms"];
        const PatientAge = child.val()["Patient_Age"];
        const PatientSex = child.val()["Patient_Gender"];
        const PatientKey = child.key;
        html +=
          "<tr>" +
          "<td>" +
          PatientName +
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
          PatientAge +
          "</td>" +
          "<td>" +
          PatientSex +
          "</td>" +
          "<td class='text-center'>" +
          "<a href='/admin/patient/approve/preview/"+PatientKey+"'style='text-decoration: none;'>" +
          "<button type='button' class='btn btn-success'>" +
          "<i class='fas fa-check-circle'>" +
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
      needApprove.innerHTML = html;
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
