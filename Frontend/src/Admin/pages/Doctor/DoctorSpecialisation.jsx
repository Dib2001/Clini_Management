import { React, useEffect, useState } from "react";
import { listDepartments, listDoctors } from "../../Database/AdminService";

export default function DoctorSpecialisation() {
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

  useEffect(() => {
    listDoctor();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-success table-striped table-hover">
              <caption className="text-center">
                List of Doctors & Department
              </caption>
              <thead className="table-light">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Department</th>
                </tr>
              </thead>
              <tbody>
                {Doctor.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>{doctor.name}</td>
                    <td>
                      {department.map((dept) => {
                        if (dept.id === doctor.departmentID) {
                          return dept.name;
                        }
                      })}
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
