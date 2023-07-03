import React from "react";

function ForgotPassword() {
  return (
    <div id="appCapsule">
      <div className="section mt-2 text-center">
        <h1>Forgot password</h1>
        <h4>Type your e-mail to reset your password</h4>
      </div>
      <div className="section mb-5 p-2">
        <form action="index.html">
          <div className="card">
            <div className="card-body pb-1">
              <div className="form-group basic">
                <div className="input-wrapper">
                  <label className="label" htmlFor="email1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email1"
                    placeholder="Your e-mail"
                  />
                  <i className="clear-input">
                    <ion-icon name="close-circle" />
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="form-button-group transparent">
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
