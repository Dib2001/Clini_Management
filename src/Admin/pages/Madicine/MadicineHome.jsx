import { React, useState } from "react";
import { Form, Link } from "react-router-dom";

export default function MadicineHome() {
  const [soldmadicine, setsoldmadicine] = useState(0);
  const [stockmadicine, setstockmadicine] = useState(0);

  return (
    <>
      <div className="row mx-5 my-3">
        <p className="fs-1 text-center">Madicine</p>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <Link to="/admin/commingsoon" style={{ textDecoration: "none" }}>
            <div className="card text-bg-danger ">
              <div className="card-header">Sold Madicine : {soldmadicine}</div>
              <div className="card-body">
                <i
                  className="fas fa-cart-arrow-down"
                  style={{ fontSize: "3rem" }}
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <Link to="/admin/commingsoon" style={{ textDecoration: "none" }}>
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
