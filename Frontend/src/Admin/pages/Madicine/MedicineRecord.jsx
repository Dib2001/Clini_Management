import React, { useEffect, useState } from "react";
import { listMedicines } from "../../Database/AdminService";

export default function MedicineRecord() {
  const HID = parseInt(localStorage.getItem("HId"), 10);
  const [Medicine, setMedicine] = useState([]);
  const getMedicine = async () => {
    try {
      const res = await listMedicines();
      const filteredMedicine = res.data.filter(
        (medicine) => medicine.hospitalId === HID
      );
    setMedicine(filteredMedicine);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  useEffect(() => {
    getMedicine();
  });
  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-12">
          <div className="table-responsive">
            <table className="table table-sm caption-top table-bordered border-succes">
              <caption className="text-center">
                List of Medicine in stock
              </caption>
              <thead className="table-danger">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {Medicine.map((data) => (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.quantity}</td>
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
