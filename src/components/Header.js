import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import Bills from "./App-bills";
  import Setting from "./Appsetting";
  import ForgotPassword from "./Forgot-password";
  import Login from "./Login";
  import Notification from "./Notification";
  import NotifyDetail from "./Notification-Detail";
  import Qr from "./Qr-code";
  import Register from "./Register";
  import Sms from "./Sms-verification";
  import TxnDetail from "./Transaction-Detail";
  import Txn from "./Transactions";
import Home from './Home'

function Header() {

  return (
    <Router>
        <Switch>
            <Route path="/bills"> <Bills /></Route>
            <Route path="/setting"><Setting /></Route>
            <Route path="/reset"> <ForgotPassword /> </Route>
            <Route path="/login"> <Login /></Route>
            <Route path="/notification"><Notification /></Route>
            <Route path="/notification-detail"><NotifyDetail /></Route>
            <Route path="/qr"> <Qr /> </Route>
            <Route path="/register"> <Register /></Route>
            <Route path="/sms"><Sms /></Route>
            <Route path="/txndetail"> <TxnDetail /> </Route>
            <Route path="/txn"> <Txn /></Route>
            <Route path="/"><Home /> </Route>
        </Switch>
      </Router>
  );
}

export default Header;


 