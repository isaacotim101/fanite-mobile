import React from "react";

function Bal() {
  return (
    <>
<div className="balance">
                <div className="left">
                  <span className="title">Total Balance</span>
                  <h1 className="total">145,500 Ugx</h1>
                </div>
                <div className="right">
                  <a
                    href="#"
                    className="button"
                    data-bs-toggle="modal"
                    data-bs-target="#depositActionSheet"
                  >
                    <ion-icon name="add-outline" />
                  </a>
                </div>
              </div>
    </>
  );
}

export default Bal;