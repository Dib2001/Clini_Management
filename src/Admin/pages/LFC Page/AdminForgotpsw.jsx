import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminForgotpsw() {
  const [wrong, setWrong] = useState(
    "uk-button-danger uk-button  uk-button-large uk-width-1-1"
  );

  const navigate = useNavigate();

  const [Validation, setValidation] = useState("");
  const [ForgetEmail, setEmail] = useState("");

  const validationcheck = async () => {
    setValidation("was-validated");
    
  };

  const checkEmail = (event) => {
    const email = event.target;
    if (email.checkValidity()) {
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
                  <div className="uk-card-title uk-text-center">
                    <h4>Oh!</h4>
                    <h3>Don't Worry generate your new Password</h3>
                    <strong>Clinic Portal</strong>
                  </div>
                  <form className={Validation}>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: mail" />
                        <input
                          className="uk-input uk-form-large form-control"
                          type="email"
                          placeholder="Email Address"
                          required
                          onKeyUp={checkEmail}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <button
                        className={wrong}
                        onClick={validationcheck}
                        type="button"
                      >
                        Verify
                      </button>
                    </div>
                    <div className="uk-text-small uk-text-center">
                      <Link to="/admin">
                        <strong>Login</strong>
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
