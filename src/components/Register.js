import React from "react";

function Register() {
  return (
    <div>
      <div className="appHeader no-border transparent position-absolute">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle" />
        <div className="right">
          <a href="app-login.html" className="headerButton">
            Login
          </a>
        </div>
      </div>
      {/* * App Header */}
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section mt-2 text-center">
          <h1>Register now</h1>
          <h4>Create an account</h4>
        </div>
        <div className="section mb-5 p-2">
          <form action="index.html">
            <div className="card">
              <div className="card-body">
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
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="password2">
                      Password Again
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password2"
                      autoComplete="off"
                      placeholder="Type password again"
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle" />
                    </i>
                  </div>
                </div>
                <div className="custom-control custom-checkbox mt-2 mb-1">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="customCheckb1"
                    />
                    <label className="form-check-label" htmlFor="customCheckb1">
                      I agree{" "}
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#termsModal"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-button-group transparent">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
