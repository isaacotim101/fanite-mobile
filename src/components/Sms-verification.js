import React from "react";

function SmsVerify() {
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
          <h1>Enter SMS Code</h1>
          <h4>Enter 4 digit sms verification code</h4>
        </div>
        <div className="section mb-5 p-2">
          <form action="index.html">
            <div className="form-group basic">
              <input
                type="text"
                className="form-control verification-input"
                id="smscode"
                placeholder="••••"
                maxLength={4}
              />
            </div>
            <div className="form-button-group transparent">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg"
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SmsVerify;
