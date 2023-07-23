import React from 'react';
import Airtime from './assets/airtime';
import Bal from './assets/bal';
import Fees from './assets/fees';
import Footer from './assets/footer';
import Sidebar from './assets/sidebar';
import Topup from './assets/topup';
import Tv from './assets/tv';
import Utils from './assets/utils';

 
function Home() {

  return (
    <>
      <div>
        {/* App Header */}
        <div className="appHeader bg-primary text-light">
          <div className="left">
            <a
              href="#"
              className="headerButton"
              data-bs-toggle="modal"
              data-bs-target="#sidebarPanel"
            >
              <ion-icon name="menu-outline" />
            </a>
          </div>
          <div className="pageTitle">
            <img src="assets/img/logo.png" alt="logo" className="logo" />
          </div>
          <div className="right">
            <a href="/notification" className="headerButton">
              <ion-icon className="icon" name="notifications-outline" />
              <span className="badge badge-danger">4</span>
            </a>
            <a href="/setting" className="headerButton">
              <img
                src="assets/img/sample/avatar/avatar1.jpg"
                alt="image"
                className="imaged w32"
              />
              <span className="badge badge-danger">6</span>
            </a>
          </div>
        </div>
        {/* * App Header */}
        {/* App Capsule */}
        <div id="appCapsule">
          {/* Wallet Card */}
          <div className="section wallet-card-section pt-1">
            <div className="wallet-card">
              {/* Balance */}
              <Bal />
              {/* * Balance */}
              {/* Wallet Footer */}
              <div className="wallet-footer">
                <div className="item">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#withdrawActionSheet"
                  >
                    <div className="icon-wrapper bg-primary">
                      <ion-icon name="cellular-outline" />
                    </div>
                    <strong>Airtime</strong>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#sendActionSheet"
                  >
                    <div className="icon-wrapper bg-success">
                      <ion-icon name="tv-outline" />
                    </div>
                    <strong>TV</strong>
                  </a>
                </div>
                <div className="item">
                  <a 
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#payBills">
                    <div className="icon-wrapper bg-warning">
                      <ion-icon name="water-outline" />
                    </div>
                    <strong>Utils</strong>
                  </a>
                </div>
                <div className="item">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exchangeActionSheet"
                  >
                    <div className="icon-wrapper bg-danger">
                      <ion-icon name="ticket-outline" />
                    </div>
                    <strong>SchoolFees</strong>
                  </a>
                </div>
              </div>
              {/* * Wallet Footer */}
            </div>
          </div>
          {/* Wallet Card */}
          {/* Deposit Action Sheet */}
          <div
            className="modal fade action-sheet"
            id="depositActionSheet"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Balance</h5>
                </div>
                <div className="modal-body">
                  <div className="action-sheet-content">
                    <Topup />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* * Deposit Action Sheet */}
          {/* Withdraw Action Sheet */}
          <div
            className="modal fade action-sheet"
            id="withdrawActionSheet"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Buy Airtime</h5>
                </div>
                <div className="modal-body">
                  <div className="action-sheet-content">
                    <Airtime />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* * Withdraw Action Sheet */}
          {/* Withdraw Action Sheet */}
          <div
            className="modal fade action-sheet"
            id="payBills"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Pay Utilities</h5>
                </div>
                <div className="modal-body">
                  <div className="action-sheet-content">
                    <Utils />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Send Action Sheet */}
          <div
            className="modal fade action-sheet"
            id="sendActionSheet"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Tv Subscriptions</h5>
                </div>
                <div className="modal-body">
                  <div className="action-sheet-content">
                  <Tv />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* * Send Action Sheet */}
          {/* Exchange Action Sheet */}
          <div
            className="modal fade action-sheet"
            id="exchangeActionSheet"
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Pay School Fees</h5>
                </div>
                <div className="modal-body">
                  <div className="action-sheet-content">
                    <Fees/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* * Exchange Action Sheet */}
          {/* Transactions */}
          <div className="section mt-4">
            <div className="section-heading">
              <h2 className="title">Transactions</h2>
              <a href="app-transactions.html" className="link">
                View All
              </a>
            </div>
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
                    <strong>MTN UG Airtime</strong>
                    <p>Airtime Purchase | 256771880410</p>
                  </div>
                </div>
                <div className="right">
                  <div className="price text-success"> 2,000 Ugx</div>
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
                    <strong>Umeme YAKA</strong>
                    <p>Yaka Token</p>
                  </div>
                </div>
                <div className="right">
                  <div className="price text-success">35,000 Ugx</div>
                </div>
              </a>
              {/* * item */}
              {/* item */}
              <a href="/txndetail" className="item">
                <div className="detail">
                  <img
                    src="assets/img/sample/brand/3.jpg"
                    alt="img"
                    className="image-block imaged w48"
                  />
                  <div>
                    <strong>GoTV Recharge</strong>
                    <p>GOtv Max </p>
                  </div>
                </div>
                <div className="right">
                  <div className="price text-success">49,000 Ugx</div>
                </div>
              </a>
              {/* * item */}
              {/* item */}
              <a href="/txndetail" className="item">
                <div className="detail">
                  <img
                    src="assets/img/sample/brand/4.jpg"
                    alt="img"
                    className="image-block imaged w48"
                  />
                  <div>
                    <strong>NWSC Bills</strong>
                    <p>Water Bills Payments</p>
                  </div>
                </div>
                <div className="right">
                  <div className="price text-success">87,000 Ugx</div>
                </div>
              </a>
              {/* * item */}
              {/* item */}
              <a href="/txndetail" className="item">
                <div className="detail">
                  <img
                    src="assets/img/sample/brand/5.jpg"
                    alt="img"
                    className="image-block imaged w48"
                  />
                  <div>
                    <strong>AIRTEL UG Airtime</strong>
                    <p>Airtime Purchase | 256706025524</p>
                  </div>
                </div>
                <div className="right">
                  <div className="price text-success">3,000 Ugx</div>
                </div>
              </a>
              {/* * item */}
            </div>
          </div>
          {/* * Transactions */}
          {/* Send Money */}
          <div className="section full mt-4">
            <div className="section-heading padding">
              <h2 className="title">Send Money</h2>
              <a href="#" className="link">
                Add New
              </a>
            </div>
            {/* carousel small */}
            <div className="carousel-small splide">
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar2.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Jurrien</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar3.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Elwin</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar4.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Alma</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar5.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Justine</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar6.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Maria</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar7.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Pamela</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar8.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Neville</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar9.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Alex</strong>
                      </div>
                    </a>
                  </li>
                  <li className="splide__slide">
                    <a href="#">
                      <div className="user-card">
                        <img
                          src="assets/img/sample/avatar/avatar10.jpg"
                          alt="img"
                          className="imaged w-100"
                        />
                        <strong>Stina</strong>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* * carousel small */}
          </div>
          {/* * Send Money */}
          {/* Monthly Bills */}
          <div className="section full mt-4">
            <div className="section-heading padding">
              <h2 className="title">Monthly Bills</h2>
              <a href="app-bills.html" className="link">
                View All
              </a>
            </div>
            {/* carousel multiple */}
            <div className="carousel-multiple splide">
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="bill-box">
                      <div className="img-wrapper">
                        <img
                          src="assets/img/sample/brand/3.jpg"
                          alt="img"
                          className="image-block imaged w48"
                        />
                      </div>
                      <div className="price">49,000 Ugx</div>
                      <p>GoTV Max</p>
                      <a href="#" className="btn btn-primary btn-block btn-sm">
                        PAY NOW
                      </a>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="bill-box">
                      <div className="img-wrapper">
                        <img
                          src="assets/img/sample/brand/2.jpg"
                          alt="img"
                          className="image-block imaged w48"
                        />
                      </div>
                      <div className="price">30,000 Ugx</div>
                      <p>Umeme Yaka</p>
                      <a href="#" className="btn btn-primary btn-block btn-sm">
                        PAY NOW
                      </a>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="bill-box">
                      <div className="img-wrapper">
                        <img
                          src="assets/img/sample/brand/5.jpg"
                          alt="img"
                          className="image-block imaged w48"
                        />
                      </div>
                      <div className="price">250,000 Ugx</div>
                      <p>House Rent</p>
                      <a href="#" className="btn btn-primary btn-block btn-sm">
                        PAY NOW
                      </a>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="bill-box">
                      <div className="img-wrapper">
                        <img
                          src="assets/img/sample/brand/4.jpg"
                          alt="img"
                          className="image-block imaged w48"
                        />
                      </div>
                      <div className="price">20,000 Ugx</div>
                      <p>NSWC Water Bills</p>
                      <a href="#" className="btn btn-primary btn-block btn-sm">
                        PAY NOW
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* * carousel multiple */}
          </div>
          {/* * Monthly Bills */}
        </div>
        {/* * App Capsule */}
        {/* App Bottom Menu */}
        <Footer />
        {/* * App Bottom Menu */}
        {/* App Sidebar */}
        <Sidebar />
      </div>
    </>
  );
}
export default Home;
