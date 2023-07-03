import React from "react";

function TransactionDetail() {
  return (
    <div>
      <div className="appHeader">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle">Transaction Detail</div>
        <div className="right">
          <a
            href="#"
            className="headerButton"
            data-bs-toggle="modal"
            data-bs-target="#DialogBasic"
          >
            <ion-icon name="trash-outline" />
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
              <h5 className="modal-title">Delete</h5>
            </div>
            <div className="modal-body">Are you sure?</div>
            <div className="modal-footer">
              <div className="btn-inline">
                <a
                  href="#"
                  className="btn btn-text-secondary"
                  data-bs-dismiss="modal"
                >
                  CANCEL
                </a>
                <a
                  href="#"
                  className="btn btn-text-primary"
                  data-bs-dismiss="modal"
                >
                  DELETE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* * Dialog Basic */}
      {/* App Capsule */}
      <div id="appCapsule" className="full-height">
        <div className="section mt-2 mb-2">
          <div className="listed-detail mt-3">
            <div className="icon-wrapper">
              <div className="iconbox">
                <ion-icon name="arrow-forward-outline" />
              </div>
            </div>
            <h3 className="text-center mt-2">Payment Sent</h3>
          </div>
          <ul className="listview flush transparent simple-listview no-space mt-3">
            <li>
              <strong>Status</strong>
              <span className="text-success">Success</span>
            </li>
            <li>
              <strong>To</strong>
              <span>Jordi Santiago</span>
            </li>
            <li>
              <strong>Bank Name</strong>
              <span>Envato Bank</span>
            </li>
            <li>
              <strong>Transaction Category</strong>
              <span>Shopping</span>
            </li>
            <li>
              <strong>Receipt</strong>
              <span>Yes</span>
            </li>
            <li>
              <strong>Date</strong>
              <span>Sep 25, 2020 10:45 AM</span>
            </li>
            <li>
              <strong>Amount</strong>
              <h3 className="m-0">$ 24</h3>
            </li>
          </ul>
        </div>
      </div>
      {/* * App Capsule */}
      {/* App Bottom Menu */}
      <div className="appBottomMenu">
        <a href="index.html" className="item">
          <div className="col">
            <ion-icon name="pie-chart-outline" />
            <strong>Overview</strong>
          </div>
        </a>
        <a href="app-pages.html" className="item">
          <div className="col">
            <ion-icon name="document-text-outline" />
            <strong>Pages</strong>
          </div>
        </a>
        <a href="app-components.html" className="item">
          <div className="col">
            <ion-icon name="apps-outline" />
            <strong>Components</strong>
          </div>
        </a>
        <a href="app-cards.html" className="item">
          <div className="col">
            <ion-icon name="card-outline" />
            <strong>My Cards</strong>
          </div>
        </a>
        <a href="app-settings.html" className="item">
          <div className="col">
            <ion-icon name="settings-outline" />
            <strong>Settings</strong>
          </div>
        </a>
      </div>
      {/* * App Bottom Menu */}
      {/* App Bottom Menu */}
      <div className="appBottomMenu">
        <a href="index.html" className="item">
          <div className="col">
            <ion-icon name="pie-chart-outline" />
            <strong>Overview</strong>
          </div>
        </a>
        <a href="app-pages.html" className="item">
          <div className="col">
            <ion-icon name="document-text-outline" />
            <strong>Pages</strong>
          </div>
        </a>
        <a href="app-components.html" className="item">
          <div className="col">
            <ion-icon name="apps-outline" />
            <strong>Components</strong>
          </div>
        </a>
        <a href="app-cards.html" className="item">
          <div className="col">
            <ion-icon name="card-outline" />
            <strong>My Cards</strong>
          </div>
        </a>
        <a href="app-settings.html" className="item">
          <div className="col">
            <ion-icon name="settings-outline" />
            <strong>Settings</strong>
          </div>
        </a>
      </div>
    </div>
  );
}

export default TransactionDetail;
