import { React, useState, useEffect } from "react";

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
          "<button type='button' class='btn btn-success' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>" +
          "<i class='fas fa-check-circle'></i>" +
          "</button>" +
          "<form class='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex=-1 aria-labelledby='staticBackdropLabel' aria-hidden='true'>" +
          "<div class='modal-dialog'>" +
          "<div class='modal-content'>" +
          "<div class='modal-header'>" +
          "<h1 class='modal-title fs-5' id='staticBackdropLabel'>" +
          "Appointment Date" +
          "</h1>" +
          "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'/>" +
          "</div>" +
          "<div class='modal-body'>" +
          "<input type='date' required id='dateappointment'/>" +
          "</div>" +
          "<div class='modal-footer'>" +
          "<button type='Submit' class='btn btn-success'>" +
          "Done" +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</form>" +
          "</td>" +
          "</tr>";
        needApprove.innerHTML = html;
      });
    });
  };

  const updatePatient = async (e) => {
    e.preventDefault();
    const date = document.getElementById("dateappointment").value;
    console.log(date);
    alert("Patient Approved")
  };

  // console.log();

  useEffect(() => {
    getPatient();
  }, []);

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
              <tbody id='needApprove'>
                {/* <tr>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <i className="fas fa-check-circle" />
                    </button>
                    <form
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex={-1}
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                      onSubmit={updatePatient}
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Appointment Date
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <input type="date" required id="dateappointment" />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="Submit"
                              className="btn btn-success"
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
