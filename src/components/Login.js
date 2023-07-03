import React from "react";

function Login() {
  return (
    <div>
      <div className="appHeader no-border transparent position-absolute">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle" />
        <div className="right"></div>
      </div>
      {/* * App Header */}
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section mt-2 text-center">
          <h1>Log in</h1>
          <h4>Fill the form to log in</h4>
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
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="password1">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password1"
                      autoComplete="off"
                      placeholder="Your password"
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle" />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="app-register.html">Register Now</a>
              </div>
              <div>
                <a href="app-forgot-password.html" className="text-muted">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="form-button-group  transparent">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
