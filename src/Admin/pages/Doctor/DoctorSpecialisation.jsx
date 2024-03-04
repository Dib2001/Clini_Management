import { React, useEffect } from "react";

export default function DoctorSpecialisation() {
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
              <tbody id="Doctorlist"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
