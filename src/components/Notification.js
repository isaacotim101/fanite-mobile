import React from "react";

function Notification() {
  return (
    <div>
      <div className="appHeader">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle">Notifications</div>
        <div className="right">
          <a
            href="#"
            className="headerButton"
            onclick="toastbox('toast-example-1', 3000)"
          >
            <ion-icon name="notifications-off-outline" />
          </a>
        </div>
      </div>
      {/* * App Header */}
      {/* toast bottom iconed */}
      <div id="toast-example-1" className="toast-box toast-bottom bg-primary">
        <div className="in">
          <ion-icon name="notifications-off-outline" />
          <div className="text">Notification sounds have been muted</div>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-text-light close-button"
        >
          OK
        </button>
      </div>
      {/* * toast bottom iconed */}
      {/* App Capsule */}
      <div id="appCapsule">
        <div className="section full">
          <ul className="listview image-listview flush">
            <li className="active">
              <a href="notification-detail" className="item">
                <div className="icon-box bg-primary">
                  <ion-icon name="arrow-down-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Payment Received</strong>
                    </div>
                    <div className="text-small mb-05">
                      John sent you <b>$ 50</b>
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                  <span className="badge badge-primary badge-empty" />
                </div>
              </a>
            </li>
            <li className="active">
              <a href="notification-detail" className="item">
                <div className="icon-box bg-success">
                  <ion-icon name="arrow-forward-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Money has been sent</strong>
                    </div>
                    <div className="text-small mb-05">
                      The money you sent to John was successfully sent.
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                  <span className="badge badge-primary">3</span>
                </div>
              </a>
            </li>
            <li>
              <a href="notification-detail" className="item">
                <div className="icon-box bg-danger">
                  <ion-icon name="key-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Password changed</strong>
                    </div>
                    <div className="text-small mb-05">
                      Your password has been changed
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="notification-detail" className="item">
                <div className="icon-box bg-warning">
                  <ion-icon name="chatbubble-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>New Messages</strong>
                    </div>
                    <div className="text-small mb-05">
                      You have new messages from John
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="notification-detail" className="item">
                <div className="icon-box bg-primary">
                  <ion-icon name="arrow-down-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Payment Received</strong>
                    </div>
                    <div className="text-small mb-05">
                      John sent you <b>$ 50</b>
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="notification-detail" className="item">
                <div className="icon-box bg-success">
                  <ion-icon name="arrow-forward-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Money has been sent</strong>
                    </div>
                    <div className="text-small mb-05">
                      The money you sent to John was successfully sent.
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="notification-detail" className="item">
                <div className="icon-box bg-danger">
                  <ion-icon name="key-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>Password changed</strong>
                    </div>
                    <div className="text-small mb-05">
                      Your password has been changed
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a href="notification-detail" className="item">
                <div className="icon-box bg-warning">
                  <ion-icon name="chatbubble-outline" />
                </div>
                <div className="in">
                  <div>
                    <div className="mb-05">
                      <strong>New Messages</strong>
                    </div>
                    <div className="text-small mb-05">
                      You have new messages from John
                    </div>
                    <div className="text-xsmall">5/3/2020 10:30 AM</div>
                  </div>
                </div>
              </a>
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
    </div>
  );
}

export default Notification;
