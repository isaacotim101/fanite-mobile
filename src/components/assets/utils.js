import React, { useState } from 'react';

function Utils() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [operatorName, setOperatorName] = useState('');
  
    const handleMobileNumberChange = (event) => {
      const { value } = event.target;
      setMobileNumber(value);
  
      if (value.length >= 3) {
        const firstSixDigits = value.substring(0, 3);
        const operator = detectOperator(firstSixDigits);
        setOperatorName(operator);
      } else {
        setOperatorName('');
      }
    };
  
    const detectOperator = (digits) => {
      const operatorLookup = {
        '077': 'MTN UG',
        '078': 'MTN UG',
        '076': 'MTN UG',
        '070': 'AIRTEL UG',
        '074': 'AIRTEL UG',
        '070': 'AIRTEL UG',
        '072': 'LYCA MOBILE',
        '071': 'UTCL',
        // Add more entries as needed
      };
  
      return operatorLookup[digits] || 'Unknown Operator';
    };
  return (
    <>
<form>
                      <div className="form-group basic">
                        
                        <div className="input-wrapper">
      <input
        type="text"
        className="form-control"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        placeholder="Enter mobile number"
      />
      <i className="clear-input">
        <ion-icon name="close-circle" />
      </i>
      {operatorName && <p>Network: {operatorName}</p>}
    </div>
                      </div>
                      <div className="form-group basic">
                        <label className="label">Enter Amount</label>
                        <div className="input-group mb-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter an amount"
                          />
                          <span className="input-group-text" id="basic-addonb1">
                            Ugx
                          </span>
                        </div>
                      </div>
                      <div className="form-group basic">
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                          data-bs-dismiss="modal"
                        >
                          Buy Airtime
                        </button>
                      </div>
                    </form>

    </>
  );
}

export default Utils;
