import React from 'react';
import Airtime from './assets/airtime';
import Bal from './assets/bal';
import Fees from './assets/fees';
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
                  <h5 className="modal-title">Pay Bills</h5>
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
        <div className="appBottomMenu">
          <a href="index.html" className="item active">
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
        {/* App Sidebar */}
        <div
          className="modal fade panelbox panelbox-left"
          id="sidebarPanel"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body p-0">
                {/* profile box */}
                <div className="profileBox pt-2 pb-2">
                  <div className="image-wrapper">
                    <img
                      src="assets/img/sample/avatar/avatar1.jpg"
                      alt="image"
                      className="imaged  w36"
                    />
                  </div>
                  <div className="in">
                    <strong>Sebastian Doe</strong>
                    <div className="text-muted">4029209</div>
                  </div>
                  <a
                    href="#"
                    className="btn btn-link btn-icon sidebar-close"
                    data-bs-dismiss="modal"
                  >
                    <ion-icon name="close-outline" />
                  </a>
                </div>
                {/* * profile box */}
                {/* balance */}
                <div className="sidebar-balance">
                  <div className="listview-title">Balance</div>
                  <div className="in">
                    <h1 className="amount">$ 2,562.50</h1>
                  </div>
                </div>
                {/* * balance */}
                {/* action group */}
                <div className="action-group">
                  <a href="index.html" className="action-button">
                    <div className="in">
                      <div className="iconbox">
                        <ion-icon name="add-outline" />
                      </div>
                      Deposit
                    </div>
                  </a>
                  <a href="index.html" className="action-button">
                    <div className="in">
                      <div className="iconbox">
                        <ion-icon name="arrow-down-outline" />
                      </div>
                      Withdraw
                    </div>
                  </a>
                  <a href="index.html" className="action-button">
                    <div className="in">
                      <div className="iconbox">
                        <ion-icon name="arrow-forward-outline" />
                      </div>
                      Send
                    </div>
                  </a>
                  <a href="app-cards.html" className="action-button">
                    <div className="in">
                      <div className="iconbox">
                        <ion-icon name="card-outline" />
                      </div>
                      My Cards
                    </div>
                  </a>
                </div>
                {/* * action group */}
                {/* menu */}
                <div className="listview-title mt-1">Menu</div>
                <ul className="listview flush transparent no-line image-listview">
                  <li>
                    <a href="index.html" className="item">
                      <div className="icon-box bg-primary">
                        <ion-icon name="pie-chart-outline" />
                      </div>
                      <div className="in">
                        Overview
                        <span className="badge badge-primary">10</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="app-pages.html" className="item">
                      <div className="icon-box bg-primary">
                        <ion-icon name="document-text-outline" />
                      </div>
                      <div className="in">Pages</div>
                    </a>
                  </li>
                  <li>
                    <a href="app-components.html" className="item">
                      <div className="icon-box bg-primary">
                        <ion-icon name="apps-outline" />
                      </div>
                      <div className="in">Components</div>
                    </a>
                  </li>
                  <li>
                    <a href="app-cards.html" className="item">
                      <div className="icon-box bg-primary">
                        <ion-icon name="card-outline" />
                      </div>
                      <div className="in">My Cards</div>
                    </a>
                  </li>
                </ul>
                {/* * menu */}
                {/* others */}
                <div className="listview-title mt-1">Others</div>
                <ul className="listview flush transparent no-line image-listview">
                  <li>
                    <a href="app-settings.html" className="item">
                      <div className="icon-box bg-primary">
                        <ion-icon name="settings-outline" />
                      </div>
                      <div className="in">Settings</div>
                    </a>
                  </li>
                  <li>
                    <a href="component-messages.html" className="item">
                      <div className="icon-box bg-primary">
                        <ion-icon name="chatbubble-outline" />
                      </div>
                      <div className="in">Support</div>
                    </a>
                  </li>
                  <li>
                    <a href="app-login.html" className="item">
                      <div className="icon-box bg-primary">
                        <ion-icon name="log-out-outline" />
                      </div>
                      <div className="in">Log out</div>
                    </a>
                  </li>
                </ul>
                {/* * others */}
                {/* send money */}
                <div className="listview-title mt-1">Send Money</div>
                <ul className="listview image-listview flush transparent no-line">
                  <li>
                    <a href="#" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar2.jpg"
                        alt="image"
                        className="image"
                      />
                      <div className="in">
                        <div>Artem Sazonov</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar4.jpg"
                        alt="image"
                        className="image"
                      />
                      <div className="in">
                        <div>Sophie Asveld</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="item">
                      <img
                        src="assets/img/sample/avatar/avatar3.jpg"
                        alt="image"
                        className="image"
                      />
                      <div className="in">
                        <div>Kobus van de Vegte</div>
                      </div>
                    </a>
                  </li>
                </ul>
                {/* * send money */}
              </div>
            </div>
          </div>
        </div>
        {/* * App Sidebar */}
        {/* iOS Add to Home Action Sheet */}
        <div
          className="modal inset fade action-sheet ios-add-to-home"
          id="ios-add-to-home-screen"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add to Home Screen</h5>
                <a href="#" className="close-button" data-bs-dismiss="modal">
                  <ion-icon name="close" />
                </a>
              </div>
              <div className="modal-body">
                <div className="action-sheet-content text-center">
                  <div className="mb-1">
                    <img
                      src="assets/img/icon/192x192.png"
                      alt="image"
                      className="imaged w64 mb-2"
                    />
                  </div>
                  <div>
                    Install <strong>FanitePay</strong> on your iPhone's home
                    screen.
                  </div>
                  <div>
                    Tap <ion-icon name="share-outline" /> and Add to homescreen.
                  </div>
                  <div className="mt-2">
                    <button
                      className="btn btn-primary btn-block"
                      data-bs-dismiss="modal"
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* * iOS Add to Home Action Sheet */}
        {/* Android Add to Home Action Sheet */}
        <div
          className="modal inset fade action-sheet android-add-to-home"
          id="android-add-to-home-screen"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add to Home Screen</h5>
                <a href="#" className="close-button" data-bs-dismiss="modal">
                  <ion-icon name="close" />
                </a>
              </div>
              <div className="modal-body">
                <div className="action-sheet-content text-center">
                  <div className="mb-1">
                    <img
                      src="assets/img/icon/192x192.png"
                      alt="image"
                      className="imaged w64 mb-2"
                    />
                  </div>
                  <div>
                    Install <strong>FanitePay</strong> on your Android's home
                    screen.
                  </div>
                  <div>
                    Tap <ion-icon name="ellipsis-vertical" /> and Add to
                    homescreen.
                  </div>
                  <div className="mt-2">
                    <button
                      className="btn btn-primary btn-block"
                      data-bs-dismiss="modal"
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
