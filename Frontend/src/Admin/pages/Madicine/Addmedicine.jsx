import { React, useState, useEffect } from "react";
import { CreateMedicine, listMedicines } from "../../Database/AdminService";
import Select from "react-select";
import { message } from "antd";

export default function Addmedicine() {
  const HID = parseInt(localStorage.getItem("HId"), 10);
  // Define state variables and their setter functions using useState
  const [MedicineName, setMedicineName] = useState("");
  const [Quantity, setQuantity] = useState(0);

  // Function to handle the form submission
  const addMedicine = async (event) => {
    event.preventDefault();
    const data = {
      name: MedicineName,
      hospitalId: HID,
      quantity: parseInt(Quantity),
    };
    await CreateMedicine(data).then(() => message.success("Medicine Successfully added"));
  };

  return (
    <div className="row mx-5 my-3">
      <div className="col-sm-3 mb-3 mb-sm-0"></div>
      <div className="col-sm-6 mb-3 mb-sm-0">
        <div className="card" style={{ backgroundColor: "#59cbc0" }}>
          <div className="card-header text-center">Add Medicine</div>
          <div className="card-body">
            <form className="row g-3" onSubmit={addMedicine}>
              <div className="col-md-12">
                <label htmlFor="MedicineName" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="MedicineName"
Medicine                  pattern="[A-Za-z-A-Za-z]{1,}"
                  onChange={(event) => setMedicineName(event.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="Quantity" className="form-label">
                  Quantity
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="Quantity"
                  placeholder="Quantity"
                  onChange={(event) => setQuantity(event.target.value)}
                />
              </div>
              <div className="col-md-6">
                <button type="submit" className="btn btn-success">
                  Add <i className="fas fa-plus" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-sm-3 mb-3 mb-sm-0"></div>
    </div>
  );
}
