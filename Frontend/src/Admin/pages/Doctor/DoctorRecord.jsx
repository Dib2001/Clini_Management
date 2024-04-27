import { React, useEffect, useState } from "react";
import { DocotrDeleteId, listDepartments, listDoctors } from "../../Database/AdminService";
import { message } from "antd";

export default function DoctorRecord() {
  const HID = parseInt(localStorage.getItem("HId"), 10);
  const [Doctor, setDoctor] = useState([]);
  const [department, setdepartment] = useState([]);

  const listDoctor = async () => {
    try {
      const resDept = await listDepartments();
      const resDoctor = await listDoctors();
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
      setdepartment(filteredDept);
    } catch (error) {
      console.error("Error fetching Doctor:", error);
    }
  };

  const handleReject = async (patientId) => {
    await DocotrDeleteId(patientId).then((res) => {
      message.success("Delete");
    });
  };

  useEffect(() => {
    listDoctor();
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
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Doctor.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>{doctor.name}</td>
                    <td>{doctor.mobile}</td>
                    <td>{doctor.address}</td>
                    <td>
                      {department.map((dept) => {
                        if (dept.id === doctor.departmentID) {
                          return dept.name;
                        }
                      })}
                    </td>
                    <td><button
                        onClick={() => handleReject(doctor.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button></td>
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
