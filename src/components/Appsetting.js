import React from "react";

function Appsetting() {
  return (
    <div>
      {/* App Header */}
      <div className="appHeader">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle">Settings</div>
        <div className="right">
          <a href="app-notifications.html" className="headerButton">
            <ion-icon className="icon" name="notifications-outline" />
            <span className="badge badge-danger">4</span>
          </a>
        </div>
      </div>
      {/* * App Header */}
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section mt-3 text-center">
          <div className="avatar-section">
            <a href="#">
              <img
                src="assets/img/sample/avatar/avatar1.jpg"
                alt="avatar"
                className="imaged w100 rounded"
              />
              <span className="button">
                <ion-icon name="camera-outline" />
              </span>
            </a>
          </div>
        </div>
        
        <div className="listview-title mt-1">Profile Settings</div>
        <ul className="listview image-listview text inset">
          <li>
            <a href="#" className="item">
              <div className="in">
                <div>Change Username</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="item">
              <div className="in">
                <div>Update E-mail</div>
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="item">
              <div className="in">
                <div>Address</div>
                <span className="text-primary">Edit</span>
              </div>
            </a>
          </li>
          <li>
            <div className="item">
              <div className="in">
                <div>Private Profile</div>
                <div className="form-check form-switch ms-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="SwitchCheckDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="SwitchCheckDefault2"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="listview-title mt-1">Security</div>
        <ul className="listview image-listview text mb-2 inset">
          <li>
            <a href="#" className="item">
              <div className="in">
                <div>Update Password</div>
              </div>
            </a>
          </li>
          <li>
            <div className="item">
              <div className="in">
                <div>2 Step Verification</div>
                <div className="form-check form-switch ms-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="SwitchCheckDefault3"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="SwitchCheckDefault3"
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="#" className="item">
              <div className="in">
                <div>Log out all devices</div>
              </div>
            </a>
          </li>
        </ul>
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
        <a href="app-settings.html" className="item active">
          <div className="col">
            <ion-icon name="settings-outline" />
            <strong>Settings</strong>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Appsetting;
