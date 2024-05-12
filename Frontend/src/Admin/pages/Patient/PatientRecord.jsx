import { React, useEffect, useState } from "react";
import {
  PatientsDeleteId,
  listDepartments,
  listDoctors,
  listPatients,
} from "../../Database/AdminService";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function PatientRecord() {
  const HID = parseInt(localStorage.getItem("HId"), 10);
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [Doctor, setDoctor] = useState([]);
  const [department, setdepartment] = useState([]);

  const getPatient = async () => {
    try {
      const res = await listPatients();
      const resDept = await listDepartments();
      const resDoctor = await listDoctors();
      const filteredPatients = res.data.filter(
        (patient) => patient.approvereject === "Y" && patient.clinicId === HID
      );
      const filteredDoctor = resDoctor.data.filter((data) => {
        if (data.hospitalId === HID) {
          return true;
        }
        return false;
      });
      const filteredDept = resDept.data.filter((data) => {
        if (data.hospitalId === HID) {
          return true;
        }
        return false;
      });
      setDoctor(filteredDoctor);
      setPatients(filteredPatients);
      setdepartment(filteredDept);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  const handleUpdate = async (patientId) => {
    navigate(`preview/${patientId}`);
  };

  const handleReject = async (patientId) => {
    await PatientsDeleteId(patientId).then((res) => {
      message.success("Delete");
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
                  <th scope="col">Remarks</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.name}</td>
                    <td>{patient.age}</td>
                    <td>{patient.sex}</td>
                    <td>{patient.phn}</td>
                    <td>{patient.addr}</td>
                    <td>{patient.symp}</td>
                    <td>
                      {Doctor.map((doct) => {
                        if (doct.id === patient.doctorID) {
                          return doct.name;
                        }
                      })}
                    </td>
                    <td>
                      {department.map((dept) => {
                        if (dept.id === patient.departmentID) {
                          return dept.name;
                        }
                      })}
                    </td>
                    <td>{patient.date}</td>
                    <td>{patient.remarks}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(patient.id)}
                        type="button"
                        className="btn btn-success"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleReject(patient.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
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
