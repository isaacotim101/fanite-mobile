import React from "react";

function Transactions() {
  return (
    <div>
      <div className="appHeader">
        <div className="left">
          <a href="#" className="headerButton goBack">
            <ion-icon name="chevron-back-outline" />
          </a>
        </div>
        <div className="pageTitle">Transactions</div>
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
        {/* Transactions */}
        <div className="section mt-2">
          <div className="section-title">Today</div>
          <div className="transactions">
            {/* item */}
            <a href="/txndetail" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/brand/1.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Amazon</strong>
                  <p>Shopping</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger"> - $ 150</div>
              </div>
            </a>
            {/* * item */}
            {/* item */}
            <a href="/txndetail" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/brand/2.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Apple</strong>
                  <p>Appstore Purchase</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger">- $ 29</div>
              </div>
            </a>
            {/* * item */}
            {/* item */}
            <a href="/txndetail" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/avatar/avatar3.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Alex Ljung</strong>
                  <p>Transfer</p>
                </div>
              </div>
              <div className="right">
                <div className="price">+ $ 1,000</div>
              </div>
            </a>
            {/* * item */}
            {/* item */}
            <a href="/txndetail" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/avatar/avatar4.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Beatriz Brito</strong>
                  <p>Transfer</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger">- $ 186</div>
              </div>
            </a>
            {/* * item */}
          </div>
        </div>
        {/* * Transactions */}
        {/* Transactions */}
        <div className="section mt-2">
          <div className="section-title">Yesterday</div>
          <div className="transactions">
            {/* item */}
            <a href="/txndetail" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/brand/1.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Amazon</strong>
                  <p>Shopping</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger"> - $ 150</div>
              </div>
            </a>
            {/* * item */}
            {/* item */}
            <a href="/txndetail" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/brand/2.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Apple</strong>
                  <p>Appstore Purchase</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger">- $ 29</div>
              </div>
            </a>
            {/* * item */}
          </div>
        </div>
        {/* * Transactions */}
        {/* Transactions */}
        <div className="section mt-2">
          <div className="section-title">Sep 20, 2020</div>
          <div className="transactions">
            {/* item */}
            <a href="/txndetail" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/brand/3.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Envato</strong>
                  <p>Shopping</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger"> - $ 24</div>
              </div>
            </a>
            {/* * item */}
          </div>
        </div>
        {/* * Transactions */}
        {/* Transactions */}
        <div className="section mt-2">
          <div className="section-title">Sep 14, 2020</div>
          <div className="transactions">
            {/* item */}
            <a href="app-notification-detail.html" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/brand/1.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Amazon</strong>
                  <p>Shopping</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger"> - $ 1,500</div>
              </div>
            </a>
            {/* * item */}
            {/* item */}
            <a href="app-notification-detail.html" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/brand/2.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Apple</strong>
                  <p>Shopping</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger"> - $ 150</div>
              </div>
            </a>
            {/* * item */}
            {/* item */}
            <a href="app-notification-detail.html" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/avatar/avatar7.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Lara Madrigal</strong>
                  <p>Transfer</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger"> - $ 550</div>
              </div>
            </a>
            {/* * item */}
            {/* item */}
            <a href="app-notification-detail.html" className="item">
              <div className="detail">
                <img
                  src="assets/img/sample/avatar/avatar6.jpg"
                  alt="img"
                  className="image-block imaged w48"
                />
                <div>
                  <strong>Dina Glenn</strong>
                  <p>Transfer</p>
                </div>
              </div>
              <div className="right">
                <div className="price text-danger"> - $ 620</div>
              </div>
            </a>
            {/* * item */}
          </div>
        </div>
        {/* * Transactions */}
        <div className="section mt-2 mb-2">
          <a href="#" className="btn btn-primary btn-block btn-lg">
            Load More
          </a>
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

export default Transactions;
