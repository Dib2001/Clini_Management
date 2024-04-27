import { React, useState, useEffect } from "react";
import {
  HospitalId,
  HospitalUpdate,
  CreateDepartments,
  listDepartments,
  DepartmentsName,
} from "../../Database/AdminService";
import { message } from "antd";

export default function ProfileMain() {
  const HID = parseInt(localStorage.getItem("HId"), 10);

  const [departmentcount, setdepartmentcount] = useState(0);
  const [departmentname, setdepartmentname] = useState(" ");
  const [department, setdepartment] = useState([]);

  const [ownerName, setOwnerName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [post, setPost] = useState("");
  const [pin, setPin] = useState("");

  const addDepartment = async (e) => {
    const data = {
      name: departmentname,
      hospitalId: HID,
    };
    await CreateDepartments(data).then((res) => {
      message.success("Department Created Successfully");
    });
  };

  const listDepartment = async () => {
    try {
      const res = await listDepartments();
      let count = 0;
      const filtered = res.data.filter((data) => {
        if (data.hospitalId === HID) {
          count++;
          return true;
        }
        return false;
      });
      setdepartment(filtered);
      setdepartmentcount(count);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const getProfile = async (e) => {
    const res = await HospitalId(HID);
    const {
      email,
      password,
      hospitalName,
      ownerName,
      mobile,
      license,
      pin,
      district,
      state,
      post,
      address,
    } = res.data;
    setOwnerName(ownerName);
    setContact(mobile);
    setEmail(email);
    setPassword(password);
    setHospitalName(hospitalName);
    setLicenseNo(license);
    setAddress(address);
    setDistrict(district);
    setState(state);
    setPost(post);
    setPin(pin);
  };

  const updateProfile = async (e) => {
    const extractedData = {
      email: email,
      password: password,
      hospitalName: hospitalName,
      ownerName: ownerName,
      mobile: contact,
      license: licenseNo,
      pin: pin,
      district: district,
      state: state,
      post: post,
      address: address,
    };
    await HospitalUpdate(HID, extractedData).then((res) => {
      console.table(res.data);
    });
  };

  const [DepartmentExists, setDepartmentExists] = useState(false);

  const DepartmentCheck = async (e) => {
    e.preventDefault();
    let data = e.target.value;
    try {
      const res = await DepartmentsName(data);
      console.log(res.data);
      if (res.data && res.data.hospitalId === HID) {
        message.warning("Department already exists");
        setDepartmentExists(true);
      } else {
        setDepartmentExists(false);
      }
    } catch (error) {
      setDepartmentExists(false);
    }
  };

  useEffect(() => {
    getProfile();
    listDepartment();
  }, [1]);

  return (
    <>
      <div className="row mx-5 my-3">
        <div className="col-sm-4 mb-3 mb-sm-0">
          <div
            className="card text-bg-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
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
                        onChange={(event) => {
                          setdepartmentname(event.target.value);
                        }}
                        onKeyUp={DepartmentCheck}
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th scope="col">Department List</th>
                            </tr>
                          </thead>
                          <tbody>
                            {department.map((dept) => (
                              <tr key={dept.id}>
                                <td>{dept.name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="modal-footer">
                      {!DepartmentExists ? (
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={addDepartment}
                          data-bs-dismiss="modal"
                        >
                          Add
                        </button>
                      ) : null}
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
                    value={ownerName}
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
                    value={contact}
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
                    value={email}
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
                    value={password}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ProfielSName" className="form-label">
                    Hospital Name
                  </label>
                  <input
                    readOnly
                    required
                    type="text"
                    className="form-control"
                    id="ProfielSName"
                    placeholder="Hospital Name"
                    value={hospitalName}
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
                    value={licenseNo}
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
                    value={`${address}, ${post}, ${district}, ${state}, ${pin}`}
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
                </div>
              </div>
            </div>
          </div>
        </div>
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
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
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
                      <label htmlFor="ProfileOName" className="form-label">
                        Owner
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="ProfileOName"
                        placeholder="Owner Name"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfileContact" className="form-label">
                        Contact
                      </label>
                      <input
                        required
                        type="tel"
                        className="form-control"
                        id="ProfileContact"
                        placeholder="Contact"
                        maxLength={10}
                        minLength={10}
                        pattern="[6-9][0-9]{9}"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfielEmail" className="form-label">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        className="form-control"
                        id="ProfielEmail"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfilePassword" className="form-label">
                        Password
                      </label>
                      <input
                        required
                        type="password"
                        className="form-control"
                        id="ProfilePassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfielSName" className="form-label">
                        Hospital Name
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="ProfielSName"
                        placeholder="Hospital Name"
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfileLicenseeNo" className="form-label">
                        Licensee No
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="ProfileLicenseeNo"
                        placeholder="Licensee No"
                        value={licenseNo}
                        onChange={(e) => setLicenseNo(e.target.value)}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="ProfileAddress" className="form-label">
                        Address
                      </label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="ProfileAddress"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfileDistrict" className="form-label">
                        District
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="ProfileDistrict"
                        placeholder="District"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfileState" className="form-label">
                        State
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="ProfileState"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfilePost" className="form-label">
                        Post
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="ProfilePost"
                        placeholder="Post"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="ProfilePin" className="form-label">
                        Pin
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id="ProfilePin"
                        placeholder="Pin"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={updateProfile}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
