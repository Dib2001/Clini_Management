import { React, useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { listMedicines } from "../../Database/AdminService";

export default function MadicineHome() {
  const [stockmadicine, setstockmadicine] = useState(0);

  const HID = parseInt(localStorage.getItem("HId"), 10);

  
  const listMedicine = async () => {
    const res = await listMedicines();
    let count = 0;
    console.log(res);
    res.data.forEach((medicine) => {
      if (medicine.hospitalId === HID) {
        console.table(medicine);
        count++;
      }
    });
    setstockmadicine(count);
  };

  useEffect(() => {
    listMedicine();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
        <p className="fs-1 text-center">Madicine</p>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <Link to="/admin/medicine/add" style={{ "textDecoration": "none" }}>
            <div className="card text-bg-warning">
              <div className="card-header">Add Medicine</div>
              <div className="card-body">
                <i
                  className="fa fa-user-plus"
                  style={{ "fontSize": "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <Link to="/admin/medicine/stock" style={{ textDecoration: "none" }}>
            <div className="card text-bg-success">
              <div className="card-header">In Stock : {stockmadicine}</div>
              <div className="card-body">
                <i className="fa fa-poll" style={{ fontSize: "3rem" }} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
