import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { listHospitalEmail, listHospitalLogin } from "../../Database/AdminService";
import { message } from "antd";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const [Validation, setValidation] = useState("");

  const validationcheck = () => {
    setValidation("was-validated");
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const HospitalLogin = await listHospitalLogin({loginEmail,loginPassword});
      if(HospitalLogin){
        message.success("Successfully Login").then(()=>{
          // navigate("/admin/dashboard")
          console.log(listHospitalEmail(loginEmail).data);
        // localStorage.setItem("Hospital",JSON.stringify(await listHospitalEmail(loginEmail).data))
        })
      }
    } catch (error) {
      console.error(error);
      message.error("Something Wrong")
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

  return (
    <>
      <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade">
        <div className="uk-width-1-1">
          <div className="uk-container">
            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
              <div className="uk-width-1-1@m">
                <div className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                  <h3 className="uk-card-title uk-text-center">
                    Welcome back!
                    <br></br>
                    <strong>Hospital Portal</strong>
                    <div id="checkHospital"></div>
                  </h3>
                  <form className={Validation} onSubmit={login}>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: mail" />
                        <input
                          className="uk-input uk-form-large form-control"
                          type="email"
                          placeholder="Email Address"
                          onChange={(event) => {
                            setloginEmail(event.target.value);
                          }}
                          required
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: lock" />
                        <input
                          className="uk-input uk-form-large form-control"
                          type="password"
                          minLength={8}
                          onKeyUp={checkPassword}
                          placeholder="Password"
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                          required="True"
                          autoComplete="True"
                          onChange={(event) => {
                            setloginPassword(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <button className={wrong} onClick={validationcheck} type="submit">
                        Login
                      </button>
                    </div>
                    <div className="uk-text-small uk-text-center">
                      <Link to="/admin/forgot-password">
                        <strong>Forgot Password?</strong>
                        <br></br>
                      </Link>
                      Not registered?{" "}
                      <Link to="/admin/register">Create an account</Link>
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
