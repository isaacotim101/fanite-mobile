import React from "react";

function Footer() {
  return (
    <div>
      <div className="appHeader">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle">Monthly Bills</div>
        <div className="right">
          <a
            href="#"
            className="headerButton"
            data-bs-toggle="modal"
            data-bs-target="#actionSheetForm"
          >
            <ion-icon name="add-outline" />
          </a>
        </div>
      </div>
      {/* * App Header */}
      {/* Extra Header */}
      <div className="extraHeader pe-0 ps-0">
        <ul className="nav nav-tabs lined" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-bs-toggle="tab"
              href="#waiting"
              role="tab"
            >
              Waiting
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              href="#paid"
              role="tab"
            >
              Paid
            </a>
          </li>
        </ul>
      </div>
      {/* * Extra Header */}
      {/* Form Action Sheet */}
      <div
        className="modal fade action-sheet"
        id="actionSheetForm"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add New Bill</h5>
            </div>
            <div className="modal-body">
              <div className="action-sheet-content">
                <form>
                  <div className="form-group basic">
                    <label className="label">Bill ID</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        #
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter an amount"
                        defaultValue={41512}
                      />
                    </div>
                    <div className="input-info">
                      Enter the ID of the bill you want to add.
                    </div>
                  </div>
                  <div className="form-group basic">
                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                      data-bs-dismiss="modal"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* * Form Action Sheet */}
      {/* App Capsule */}
      <div id="appCapsule" className="extra-header-active full-height">
        <div className="section tab-content mt-2 mb-1">
          {/* waiting tab */}
          <div
            className="tab-pane fade show active"
            id="waiting"
            role="tabpanel"
          >
            <div className="row">
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/1.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 14</div>
                  <p>Prime Monthly Subscription</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/2.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 8</div>
                  <p>Monthly Payment </p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/3.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 15</div>
                  <p>Envato Elements Subscription</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/4.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 49</div>
                  <p>Subscription Fees</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/5.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 12</div>
                  <p>Pro Membership</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/1.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 14</div>
                  <p>Prime Monthly Subscription</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/2.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 8</div>
                  <p>Monthly Payment </p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/3.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 15</div>
                  <p>Envato Elements Subscription</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    PAY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* * waiting tab */}
          {/* paid tab */}
          <div className="tab-pane fade" id="paid" role="tabpanel">
            <div className="row">
              <div className="col-6 mb-2">
                <div className="bill-box">
                  <div className="img-wrapper">
                    <img
                      src="assets/img/sample/brand/1.jpg"
                      alt="img"
                      className="image-block imaged w48"
                    />
                  </div>
                  <div className="price">$ 14</div>
                  <p>Prime Monthly Subscription</p>
                  <a href="#" className="btn btn-primary btn-block btn-sm">
                    DETAIL
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* * paid tab */}
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
    </div>
  );
}

export default Footer;
