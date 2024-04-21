import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./readonly.css";
import {
  CreateHospitals,
  listHospitalEmail,
  listHospitalLicense,
} from "./AdminService";
import Select from "react-select";
import { message } from "antd";

export default function AdminRegister() {

  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [registerHospitalName, setregisterHospitalName] = useState("");
  const [registerOwnerName, setregisterOwnerName] = useState("");
  const [registerMobile, setregisterMobile] = useState("");
  const [registerLicensee, setregisterLicensee] = useState("");
  const [registerPincode, setregisterPincode] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [post, setPost] = useState("");
  const [registerAddress, setregisterAddress] = useState("");

  const [Validation, setValidation] = useState("");

  const validationcheck = () => {
    setValidation("was-validated");
  };

  const [wrong, setWrong] = useState(
    "uk-button-danger uk-button  uk-button-large uk-width-1-1"
  );

  let emailExists = false;
  const EmailCheck = async (e) => {
    const email = e.target.value;
    try {
      const res = await listHospitalEmail(email);
      if (res.data) {
        message.warning("Email already exists");
        emailExists = true;
      } else {
        emailExists = false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  let licenseExists = false;
  const LicenseCheck = async (e) => {
    const license = e.target.value;
    try {
      const res = await listHospitalLicense(license);
      if (res.data) {
        message.warning("License already exists");
        licenseExists = true;
      } else {
        licenseExists = false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (e) => {
    const data = {
      email: registerEmail,
      password: registerPassword,
      hospitalName: registerHospitalName,
      ownerName: registerOwnerName,
      mobile: registerMobile,
      license: registerLicensee,
      pin: registerPincode,
      district: district,
      state: state,
      post: post,
      registerAddress: registerAddress,
    };
    CreateHospitals(data).then((res) => {
      message.success("User Created Successfully");
    });
  };

  const register = async (e) => {
    e.preventDefault();
    if (!emailExists && !licenseExists) {
      createUser();
    }
  };

  const checkPassword = (event) => {
    const passowrd = event.target;
    if (passowrd.value.length >= 8) {
      setWrong("uk-button-primary uk-button  uk-button-large uk-width-1-1");
    } else {
      setWrong("uk-button-danger uk-button  uk-button-large uk-width-1-1");
    }
  };

  const checkContact = (event) => {
    const contact = event.target;
    if (contact.value.length === 10) {
      setWrong("uk-button-primary uk-button  uk-button-large uk-width-1-1");
    } else {
      setWrong("uk-button-danger uk-button  uk-button-large uk-width-1-1");
    }
  };

  const [Options, setOptions] = useState([]);

  const getArea = (event) => {
    let pincode = event.target;
    if (pincode.value !== "" && pincode.value.length === 6) {
      fetch("https://api.postalpincode.in/pincode/" + pincode.value)
        .then((response) => response.json())
        .then((data) => {
          if (data[0].PostOffice === null) {
            setOptions([]);
            setWrong("uk-button-danger uk-button uk-button-large uk-width-1-1");
          } else {
            let newOptions = [];
            for (let i = 0; i < data[0].PostOffice.length; i++) {
              let info = data[0].PostOffice[i];
              newOptions.push({ value: info.Name, label: info.Name });
              setDistrict(info.District);
              setState(info.State);
            }
            setOptions(newOptions);
            setWrong(
              "uk-button-primary uk-button uk-button-large uk-width-1-1"
            );
          }
        });
    } else {
      setOptions([]);
      setDistrict("");
      setState("");
      setWrong("uk-button-danger uk-button uk-button-large uk-width-1-1");
    }
  };

  return (
    <>
      <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade">
        <div className="uk-width-1-1">
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                  <h3 className="uk-card-title uk-text-center">
                    Looks like you're new here!
                    <br></br>
                    Register now and join with us....<br></br>
                    <strong>Hospital Portal</strong>
                  </h3>
                  <form className={Validation} onSubmit={register}>
                    <div className="uk-margin">
                      {/*Email */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: mail" />
                        <input
                          className="form-control uk-input uk-form-large"
                          onKeyUp={EmailCheck}
                          type="email"
                          placeholder="Email Address"
                          required
                          onChange={(event) => {
                            setregisterEmail(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      {/*Password */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: lock" />
                        <input
                          className="form-control uk-input uk-form-large"
                          type="password"
                          minLength={8}
                          onKeyUp={checkPassword}
                          placeholder="Password"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                          required="True"
                          autoComplete="True"
                          onChange={(event) => {
                            setregisterPassword(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*Hospital Name */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: home" />
                        <input
                          className="form-control uk-input uk-form-large"
                          type="text"
                          placeholder="Hospital-Name"
                          required="True"
                          autoComplete="True"
                          pattern="[A-Za-z-A-Za-z]{1,}"
                          onChange={(event) => {
                            setregisterHospitalName(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*Owner Name */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: user" />
                        <input
                          className="form-control uk-input uk-form-large"
                          onKeyUp={checkPassword}
                          type="text"
                          placeholder="Owner-name"
                          required="True"
                          autoComplete="True"
                          pattern="[A-Za-z-A-Za-z]{1,}"
                          onChange={(event) => {
                            setregisterOwnerName(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*Phone number */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: phone" />
                        <input
                          className="form-control uk-input uk-form-large"
                          type="tel"
                          placeholder="Mobile Number"
                          maxLength={10}
                          minLength={10}
                          onKeyUp={checkContact}
                          required="True"
                          autoComplete="True"
                          pattern="[6-9][0-9]{9}"
                          onChange={(event) => {
                            setregisterMobile(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*Licensee */}
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: file-text"
                        />
                        <input
                          className="form-control uk-input uk-form-large"
                          type="text"
                          placeholder="Licensee No"
                          required="True"
                          autoComplete="True"
                          onKeyUp={LicenseCheck}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          onChange={(event) => {
                            setregisterLicensee(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*Pincode */}
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: location"
                        />
                        <input
                          className="form-control uk-input uk-form-large"
                          type="text"
                          placeholder="Pincode"
                          maxLength={6}
                          minLength={6}
                          pattern="[0-9]{6}"
                          title="Enter Correct Pincode"
                          required="True"
                          autoComplete="True"
                          onKeyUp={getArea}
                          onChange={(event) => {
                            setregisterPincode(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*District*/}
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: location"
                        />
                        <input
                          className="form-control uk-input uk-form-large"
                          type="text"
                          placeholder="District"
                          value={district}
                          required
                          disabled="True"
                          id="district"
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*State */}
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: location"
                        />
                        <input
                          className="form-control uk-input uk-form-large"
                          type="text"
                          placeholder="State"
                          value={state}
                          required="True"
                          disabled="True"
                          id="state"
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*PostOffice */}
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: location"
                        />
                        <Select
                          options={Options}
                          isClearable
                          onChange={(e) => setPost(e.value)}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*Address */}
                      <div className="uk-inline uk-width-1-1">
                        <span
                          className="uk-form-icon"
                          uk-icon="icon: location"
                        />
                        <textarea
                          className="form-control uk-input uk-form-large"
                          type="text"
                          placeholder="Address"
                          required
                          autoComplete="True"
                          onChange={(event) => {
                            setregisterAddress(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      <button
                        className={wrong}
                        onClick={validationcheck}
                        type="submit"
                      >
                        Create an account
                      </button>
                    </div>
                    <div className="uk-text-small uk-text-center">
                      Registered? <Link to="/admin">Login</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
