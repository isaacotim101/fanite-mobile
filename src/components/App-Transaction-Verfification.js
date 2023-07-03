import React from "react";

function Verification() {
  return (
    <div>
      <div className="appHeader no-border">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle">Transaction Verification</div>
        <div className="right"> </div>
      </div>
      {/* * App Header */}
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section">
          <div className="splash-page mt-5 mb-5">
            <div className="transfer-verification">
              <div className="transfer-amount">
                <span className="caption">Amount</span>
                <h2>$ 50.00</h2>
              </div>
              <div className="from-to-block mb-5">
                <div className="item text-start">
                  <img
                    src="assets/img/sample/avatar/avatar1.jpg"
                    alt="avatar"
                    className="imaged w48"
                  />
                  <strong>Jonathan</strong>
                </div>
                <div className="item text-end">
                  <img
                    src="assets/img/sample/avatar/avatar4.jpg"
                    alt="avatar"
                    className="imaged w48"
                  />
                  <strong>Amanda</strong>
                </div>
                <div className="arrow" />
              </div>
            </div>
            <h2 className="mb-2 mt-2">Verify the Transaction</h2>
            <p>
              You are sending <strong className="text-primary">$ 50.00</strong>{" "}
              to Amanda. <br />
              Are you sure?
            </p>
          </div>
        </div>
        <div className="fixed-bar">
          <div className="row">
            <div className="col-6">
              <a
                href="app-pages.html"
                className="btn btn-lg btn-outline-secondary btn-block"
              >
                Cancel
              </a>
            </div>
            <div className="col-6">
              <a
                href="app-pages.html"
                className="btn btn-lg btn-primary btn-block"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verification;
