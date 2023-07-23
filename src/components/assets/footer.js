import React from 'react';

function Footer() {

  return (
<div className="appBottomMenu">
          <a href="/" className="item active">
            <div className="col">
              <ion-icon name="pie-chart-outline" />
              <strong>Overview</strong>
            </div>
          </a>
          <a href="/txn" className="item">
            <div className="col">
              <ion-icon name="document-text-outline" />
              <strong>Transactions</strong>
            </div>
          </a>
          <a href="/bills" className="item">
            <div className="col">
              <ion-icon name="apps-outline" />
              <strong>Bills</strong>
            </div>
          </a>
          <a href="/wallet" className="item">
            <div className="col">
              <ion-icon name="card-outline" />
              <strong>Wallet</strong>
            </div>
          </a>
          <a href="/setting" className="item">
            <div className="col">
              <ion-icon name="settings-outline" />
              <strong>Settings</strong>
            </div>
          </a>
        </div>
  );
}

export default Footer;