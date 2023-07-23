import React, { useState } from "react";

function Utils() {
  const [accountNumber, setAccountNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [utilityType, setUtilityType] = useState(0);
  const [showAmountField, setShowAmountField] = useState(false);
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAccountNumberChange = (event) => {
    const { value } = event.target;
    setAccountNumber(value);
  };

  const handleUtilityTypeChange = (event) => {
    const { value } = event.target;
    setUtilityType(Number(value));
    setCustomerName("");
    setShowAmountField(false);
    setPhoneNumber("");
    setAmount("");
  };

  const handleAccountNumberBlur = () => {
    if (utilityType !== 1) {
      return;
    }

    fetch(`https://envoy.fanitehub.com/yakaverify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ acc_no: accountNumber, amount: "0" }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === 1) {
          setCustomerName(data.data.CustomerName);
          setShowAmountField(true);
        } else {
          console.error("Error fetching customer name:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching customer name:", error);
      });
  };

  const handleAmountChange = (event) => {
    const { value } = event.target;
    setAmount(value);
  };

  const handlePhoneNumberChange = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };

  const handleSend = () => {
    if (utilityType === 1 && customerName && amount && phoneNumber) {
      fetch(`https://envoy.fanitehub.com/yakapay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          acc_no: accountNumber,
          amount: amount,
          phone: phoneNumber,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from yakapay API:", data);
        })
        .catch((error) => {
          console.error("Error sending data to yakapay:", error);
        });
    } else {
      console.error("Error: Please fill in all required fields.");
    }
  };

  return (
    <>
      <form>
        <div className="form-group basic">
          <div className="input-wrapper">
            <label className="label" htmlFor="account2">
              Select Utility
            </label>
            <select
              className="form-control custom-select"
              id="account2"
              onChange={handleUtilityTypeChange}
              value={utilityType}
            >
              <option value={0}>Choose Utility Type</option>
              <option value={1}>Yaka Umeme</option>
              <option value={2}>NSWC - Water</option>
            </select>
          </div>
        </div>
        <div className="form-group basic">
          <div className="input-wrapper">
            <label className="label" htmlFor="text11">
              Account Number
            </label>
            <input
              type="number"
              className="form-control"
              id="text11"
              placeholder="Enter Account Number"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              onBlur={handleAccountNumberBlur}
            />
            <i className="clear-input">
              <ion-icon name="close-circle" />
            </i>
          </div>
        </div>
        <div className="form-group basic">
              <label className="label">Enter Phone</label>
              <div className="input-group mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  name="phone"
                />
                <i className="clear-input">
                  <ion-icon name="close-circle" />
                </i>
              </div>
            </div>
         {customerName && showAmountField ? (
          <>
            <div className="form-group basic">
              <div className="input-wrapper">
                <label className="label" htmlFor="text11">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="text11"
                  value={customerName}
                  readOnly
                />
                <i className="clear-input">
                  <ion-icon name="close-circle" />
                </i>
              </div>
            </div>
            <div className="form-group basic">
              <label className="label">Enter Amount</label>
              <div className="input-group mb-2">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={handleAmountChange}
                  name="amount"
                />
                <i className="clear-input">
                  <ion-icon name="close-circle" />
                </i>
              </div>
            </div>
              <div className="form-group basic">
              <button
                type="button"
                className="btn btn-primary btn-block btn-lg"
                data-bs-dismiss="modal"
                onClick={handleSend}
                disabled={!customerName || !amount || !phoneNumber}
              >
                Send
              </button>
            </div>
          </>
        ) : null}
      </form>
    </>
  );
}

export default Utils;
