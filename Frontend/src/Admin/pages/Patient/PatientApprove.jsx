import { React, useEffect, useState } from "react";
import {
  PatientsDeleteId,
  listPatients,
} from "../../Database/AdminService";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function PatientApprove() {
  const HID = parseInt(localStorage.getItem("HId"), 10);

  const [patients, setPatients] = useState([]);

  const navigate = useNavigate();

  const getPatient = async () => {
    const res = await listPatients();
    const filteredPatients = res.data.filter(
      (patient) => patient.approvereject === "N" && patient.clinicId === HID
    );
    setPatients(filteredPatients);
  };

  useEffect(() => {
    getPatient();
  });

  const handleApprove = async (patientId) => {
    navigate(`preview/${patientId}`)
  };

  const handleReject = async (patientId) => {
    await PatientsDeleteId(patientId).then((res) => {
      message.success("Delete");
    });
  };

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
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.name}</td>
                    <td>{patient.phn}</td>
                    <td>{patient.addr}</td>
                    <td>{patient.symp}</td>
                    <td>{patient.age}</td>
                    <td>{patient.sex}</td>
                    <td>
                      <button
                        onClick={() => handleApprove(patient.id)}
                        type="button"
                        className="btn btn-success"
                      >
                        Approve
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleReject(patient.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
