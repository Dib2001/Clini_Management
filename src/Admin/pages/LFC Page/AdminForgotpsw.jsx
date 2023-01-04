import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function AdminForgotpsw() {
  const [wrong, setWrong] = useState(
    "uk-button-danger uk-button  uk-button-large uk-width-1-1"
  );

  const checkEmail = (event) => {
    const passowrd = event.target;
    const check = document.getElementById("checked")
    if (passowrd.checkValidity()) {
      setWrong("uk-button-primary uk-button  uk-button-large uk-width-1-1");
      check.innerHTML =
        '<div class="uk-inline uk-width-1-1">' +
        '<span class="uk-form-icon" uk-icon="icon: lock"></span>'+
          '<input class="uk-input uk-form-large" type="tel" maxlength=6 placeholder="OTP" pattern="[0-9]{6}" title="Enter Correct OTP" required="True" autoComplete="True" />'+
        '</div>';
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
                    Oh!<h4>Don't Worry generate your new Password</h4>
                    <strong>LOCAL</strong>
                  </h3>
                  <form>
                    <div className="uk-margin">
                      <div className="uk-inline uk-width-1-1">
                        <span className="uk-form-icon" uk-icon="icon: mail" />
                        <input
                          className="uk-input uk-form-large"
                          type="email"
                          placeholder="Email Address"
                          required
                          onKeyUp={checkEmail}
                        />
                      </div>
                    </div>
                    <div className="uk-margin">
                      <div id="checked"></div>
                    </div>
                    <div className="uk-margin">
                      <button className={wrong} type="submit">
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
