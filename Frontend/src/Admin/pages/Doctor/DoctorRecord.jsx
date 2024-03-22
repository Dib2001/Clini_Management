import { React, useEffect } from "react";

export default function DoctorRecord() {
  const clinicEmail = localStorage.getItem("adminEmail");

  const getDoctor = async (e) => {
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
