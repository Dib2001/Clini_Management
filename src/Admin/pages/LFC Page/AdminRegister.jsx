import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./readonly.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Firebase/firebase-conf";

import { ref, set, onValue } from "firebase/database";

export default function AdminRegister() {
  const navigate = useNavigate();

  const [registerEmail, setregisterEmail] = useState("");
  const [registerPassword, setregisterPassword] = useState("");
  const [registerClinicName, setregisterClinicName] = useState("");
  const [registerOwnerName, setregisterOwnerName] = useState("");
  const [registerMobile, setregisterMobile] = useState("");
  const [registerLicensee, setregisterLicensee] = useState("");
  const [registerPincode, setregisterPincode] = useState("");
  const [registerAddress, setregisterAddress] = useState("");

  const getUser = async (e) => {
    const userdata = ref(db, 'clinic/');
    onValue(userdata, (snapshot) => {
      const data = snapshot.hasChild(registerClinicName);
      if (data === true){
        // alert("Clinic Already Exsist");
      }
    });
  };

  const createUser = async (e) => { {/*await delete*/ }
    await set(ref(db, "clinic/" + registerClinicName + "/profile"), {
      adminEmail: registerEmail,
      adminPassword: registerPassword,
      adminClinicName: registerClinicName,
      adminOwnerName: registerOwnerName,
      adminMobile: registerMobile,
      adminLicensee: registerLicensee,
      adminAddress:
        registerAddress +
        ", " +
        document.getElementById("pos").value +
        ", " +
        document.getElementById("district").value +
        ", " +
        registerPincode +
        ", " +
        document.getElementById("state").value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      getUser();
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // getUser();
      createUser();
      navigate("/admin");
    } catch (error) {
      console.log(error.message)
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        alert("Email Already Exsist");
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Enter Correct Email");
      }
    }
  };

  const [wrong, setWrong] = useState(
    "uk-button-danger uk-button  uk-button-large uk-width-1-1"
  );

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

  const [pin, SetPin] = useState({
    district: "",
    state: "",
  });

  const getarea = (event) => {
    let pincode = event.target;
    let pos = document.getElementById("pos");
    if (pincode.value !== "" && pincode.value.length === 6) {
      fetch("https://api.postalpincode.in/pincode/" + pincode.value)
        .then((response) => response.json())
        .then((data) => {
          var html = "";
          if (data[0].PostOffice === null) {
            setWrong(
              "uk-button-danger uk-button  uk-button-large uk-width-1-1"
            );
          } else {
            for (let i = 0; i < data[0].PostOffice.length; i++) {
              let info = data[0].PostOffice[i];
              html +=
                '<option value="' + info.Name + '">' + info.Name + "</option>";
              SetPin({
                district: info.District,
                state: info.State,
                postoffice: (pos.innerHTML = html),
              });
              setWrong(
                "uk-button-primary uk-button  uk-button-large uk-width-1-1"
              );
            }
          }
        });
    } else {
      var html1 = "";
      html1 = '<option value="">Select</option>';
      SetPin({
        district: "",
        state: "",
        postoffice: (pos.innerHTML = html1),
      });
      setWrong("uk-button-danger uk-button  uk-button-large uk-width-1-1");
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
                    <strong>LOCAL</strong>
                  </h3>
                  <form onSubmit={register}>
                    <div className="uk-margin">
                      {/*Email */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: mail" />
                        <input
                          className="uk-input uk-form-large"
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
                          className="uk-input uk-form-large"
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
                      {/*Clinic Name */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: home" />
                        <input
                          className="uk-input uk-form-large"
                          type="text"
                          onKeyUp={checkPassword}
                          placeholder="Clinic-Name"
                          required="True"
                          autoComplete="True"
                          pattern="[A-Za-z-A-Za-z]{1,}"
                          onChange={(event) => {
                            setregisterClinicName(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      {/*Owner Name */}
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: user" />
                        <input
                          className="uk-input uk-form-large"
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
                          className="uk-input uk-form-large"
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
                          className="uk-input uk-form-large"
                          type="text"
                          placeholder="Licensee No"
                          required="True"
                          autoComplete="True"
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
                          className="uk-input uk-form-large"
                          type="text"
                          placeholder="Pincode"
                          maxLength={6}
                          minLength={6}
                          pattern="[0-9]{6}"
                          title="Enter Correct Pincode"
                          required="True"
                          autoComplete="True"
                          onKeyUp={getarea}
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
                          className="uk-input uk-form-large"
                          type="text"
                          placeholder="District"
                          value={pin.district}
                          required
                          data-readonly
                          id="district"
                          // onChange={(event) => {
                          //   setregisterDistrict(event.target.value);
                          // }}
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
                          className="uk-input uk-form-large"
                          type="text"
                          placeholder="State"
                          value={pin.state}
                          data-readonly
                          required="True"
                          autoComplete="True"
                          id="state"
                          // onChange={(event) => {
                          //   setregisterState(event.target.value);
                          // }}
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
                        <select
                          className="uk-input uk-form-large"
                          id="pos"
                          required
                        >
                          <option value="">Select</option>
                        </select>
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
                          className="uk-input uk-form-large"
                          type="text"
                          placeholder="Address"
                          required="True"
                          autoComplete="True"
                          onChange={(event) => {
                            setregisterAddress(event.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="uk-margin">
                      <button className={wrong} type="submit">
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
