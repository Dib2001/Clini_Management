import { React, useState, useEffect } from "react";

import { db } from "../Firebase/firebase-conf";

import { ref, push, onValue, orderByChild } from "firebase/database";

export default function ProfileMain() {
  const [departmentcount, setdepartmentcount] = useState(0);
  const [departmentname, setdepartmentname] = useState(" ");

  const [profile, setprofile] = useState({
    ownerName: "",
    conatct: "",
    email: "",
    password: "",
    shopname: "",
    licensee: "",
    address: "",
  });

  const clinicEmail = localStorage.getItem("adminEmail");

  // const [CliniEmail, setCliniEmail] = useState("");
  // const [CliniPassword, setCliniPassword] = useState("");
  // const [CliniClinicName, setCliniClinicName] = useState("");
  // const [CliniOwnerName, setCliniOwnerName] = useState("");
  // const [CliniMobile, setCliniMobile] = useState("");
  // const [CliniLicensee, setCliniLicensee] = useState("");
  // const [CliniPincode, setCliniPincode] = useState("");
  // const [CliniAddress, setCliniAddress] = useState("");

  const addDepartment = async (e) => {
    const CEmail = clinicEmail.replace(".", "");
    if (departmentname.startsWith(" ")) {
      alert("Please Remove Front Space");
    } else if (departmentname.length <= 0) {
      alert("Correct Department Name");
    } else {
      await push(ref(db, "clinic/" + CEmail + "/department"), {
        departmentname,
      });
    }
  };

  const getDepartment = async (e) => {
    const department = document.getElementById("departmentlist");
    const listofDepartment = document.getElementById("listofDepartment");
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail + "/department");
    var html = "";
    var html1 = "";
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        const departmentName = child.val()["departmentname"];
        html +=
          "<option value=" +
          departmentName +
          ">" +
          departmentName +
          "</option>";
        department.innerHTML = html;
        html1 += "<tr><th scope='row' class='table-success'>" + departmentName + "</th></tr>";
        listofDepartment.innerHTML = html1;
      });
    });
  };

  const listDepartment = async (e) => {
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail + "/department");
    onValue(userdata, (snapshot) => {
      const nolist = snapshot.size;
      setdepartmentcount(nolist);
    });
  };

  const getProfile = async (e) => {
    const CEmail = clinicEmail.replace(".", "");
    const userdata = ref(db, "clinic/" + CEmail);
    onValue(userdata, (snapshot) => {
      snapshot.forEach((child) => {
        const adminOwnerName = child.val()["adminOwnerName"];
        const adminMobile = child.val()["adminMobile"];
        const adminEmail = child.val()["adminEmail"];
        const adminPassword = child.val()["adminPassword"];
        const adminClinicName = child.val()["adminClinicName"];
        const adminLicensee = child.val()["adminLicensee"];
        const adminAddress = child.val()["adminAddress"];
        setprofile({
          ownerName: adminOwnerName,
          conatct: adminMobile,
          email: adminEmail,
          password: adminPassword,
          shopname: adminClinicName,
          licensee: adminLicensee,
          address: adminAddress,
        });
      });
    });
  };

  useEffect(() => {
    listDepartment();
    getProfile();
  }, []);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-3 mb-3 mb-sm-0">
          <div
            className="card text-bg-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop" onClick={getDepartment}
          >
            <div className="card-header">
              No Departments : {departmentcount}
            </div>
            <div className="card-body">
              <p className="card-text">Add Department</p>
              <i
                className="fas fa-clinic-medical"
                style={{ fontSize: "3rem" }}
              />
            </div>
          </div>
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Add Departments
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label
                        htmlFor="ProfileDepartments"
                        className="form-label"
                      >
                        Add Department
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="ProfileDepartments"
                        placeholder="Add Departments"
                        list="departmentlist"
                        onChange={(event) => {
                          setdepartmentname(event.target.value);
                        }}
                        onKeyDown={getDepartment}
                      />
                      <datalist id="departmentlist"></datalist>
                    </div>
                    <div className="col-md-6">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Department List</th>
                            </tr>
                          </thead>
                          <tbody id="listofDepartment"></tbody>
                        </table>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={addDepartment}
                        data-bs-dismiss="modal"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ backgroundColor: "#59cbc0" }}>
            <div className="card-header text-center">Profile</div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="ProfileOName" className="form-label">
                    Owner
                  </label>
                  <input
                    readOnly
                    required
                    type="text"
                    className="form-control"
                    id="ProfileOName"
                    placeholder="Owner Name"
                    value={profile.ownerName}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfileContact" className="form-label">
                    Contact
                  </label>
                  <input
                    readOnly
                    required
                    type="tel"
                    className="form-control"
                    id="ProfileContact"
                    placeholder="Contact"
                    maxLength={10}
                    minLength={10}
                    pattern="[6-9][0-9]{9}"
                    value={profile.conatct}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfielEmail" className="form-label">
                    Email
                  </label>
                  <input
                    readOnly
                    required
                    type="email"
                    className="form-control"
                    id="ProfielEmail"
                    placeholder="Email"
                    value={profile.email}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfilePassword" className="form-label">
                    Passowrd
                  </label>
                  <input
                    readOnly
                    required
                    type="password"
                    className="form-control"
                    id="ProfilePassword"
                    placeholder="Passowrd"
                    value={profile.password}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfielSName" className="form-label">
                    Shop Name
                  </label>
                  <input
                    readOnly
                    required
                    type="text"
                    className="form-control"
                    id="ProfielSName"
                    placeholder="Shop Name"
                    value={profile.shopname}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfileLicenseeNo" className="form-label">
                    Licensee No
                  </label>
                  <input
                    readOnly
                    required
                    type="text"
                    className="form-control"
                    id="ProfileLicenseeNo"
                    placeholder="Licensee No"
                    value={profile.licensee}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="ProfileAddress" className="form-label">
                    Address
                  </label>
                  <textarea
                    readOnly
                    type="text"
                    className="form-control"
                    id="ProfileAddress"
                    placeholder="Address"
                    pattern="[A-Za-z]{1,}"
                    value={profile.address}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#ProfileEdit"
                  >
                    Edit <i className="fas fa-edit" />
                  </button>
                  <div
                    className="modal fade"
                    id="ProfileEdit"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Edit Profile
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <form>
                          <div className="modal-body">
                            <div className="row g-3">
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileOEName"
                                  className="form-label"
                                >
                                  Owner
                                </label>
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfileOEName"
                                  placeholder="Owner-Name"
                                  pattern="[A-Za-z-A-Za-z]{1,}"
                                  // onChange={(event) => {
                                  //   setCliniOwnerName(event.target.value);
                                  // }}
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileEContact"
                                  className="form-label"
                                >
                                  Contact
                                </label>
                                <input
                                  required
                                  type="tel"
                                  className="form-control"
                                  id="ProfileEContact"
                                  placeholder="Contact"
                                  maxLength={10}
                                  minLength={10}
                                  pattern="[6-9][0-9]{9}"
                                  // value={profile.conatct}
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfielEEmail"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  required
                                  type="email"
                                  className="form-control"
                                  id="ProfielEEmail"
                                  placeholder="Email"
                                  // value={profile.email}
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileEPassword"
                                  className="form-label"
                                >
                                  Passowrd
                                </label>
                                <input
                                  required
                                  type="password"
                                  className="form-control"
                                  id="ProfileEPassword"
                                  placeholder="Passowrd"
                                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                  // value={profile.password}
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfielESName"
                                  className="form-label"
                                >
                                  Clinic Name
                                </label>
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfielESName"
                                  placeholder="Clinic-Name"
                                  pattern="[A-Za-z-A-Za-z]{1,}"
                                  // value={profile.shopname}
                                />
                              </div>
                              <div className="col-md-6">
                                <label
                                  htmlFor="ProfileELicenseeNo"
                                  className="form-label"
                                >
                                  Licensee No
                                </label>
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfileELicenseeNo"
                                  placeholder="Licensee No"
                                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                  // value={profile.licensee}
                                />
                              </div>
                              <div className="col-12">
                                <label
                                  htmlFor="ProfileEAddress"
                                  className="form-label"
                                >
                                  Address
                                </label>
                                <textarea
                                  required
                                  type="text"
                                  className="form-control"
                                  id="ProfileEAddress"
                                  placeholder="Address"
                                  // value={profile.address}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="submit" className="btn btn-success">
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 mb-3 mb-sm-0"></div>
      </div>
    </>
  );
}
