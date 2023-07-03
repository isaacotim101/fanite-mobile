import React from "react";

function QrCode() {
  return (
    <div>
      <div className="appHeader no-border">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle">QR Code Verification</div>
        <div className="right">
          <a
            href="#"
            className="headerButton"
            data-bs-toggle="modal"
            data-bs-target="#DialogBasic"
          >
            Help
          </a>
        </div>
      </div>
      {/* * App Header */}
      {/* Dialog Basic */}
      <div
        className="modal fade dialogbox"
        id="DialogBasic"
        data-bs-backdrop="static"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">QR Code Verification</h5>
            </div>
            <div className="modal-body">
              You can use QR code verification for two-factor authentication or
              protect actions.
            </div>
            <div className="modal-footer">
              <div className="btn-inline">
                <a
                  href="#"
                  className="btn btn-text-primary"
                  data-bs-dismiss="modal"
                >
                  OK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* * Dialog Basic */}
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section">
          <div className="splash-page mt-5 mb-5">
            <div className="mb-3">
              <img
                src="assets/img/sample/qr.png"
                alt="QR Code"
                className="imaged square w140"
              />
            </div>
            <h2 className="mb-2">Scan the QR Code</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              aliquam.
            </p>
          </div>
        </div>
        <div className="fixed-bar">
          <div className="row">
            <div className="col-12">
              <a
                href="app-pages.html"
                className="btn btn-lg btn-outline-secondary btn-block"
              >
                Go Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCode;
