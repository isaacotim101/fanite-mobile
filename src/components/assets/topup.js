import React from "react";

function Topup() {
  return (
    <>
<form>
                      <div className="form-group basic">
                        <div className="input-wrapper">
                          <label className="label" htmlFor="account1">
                            From
                          </label>
                          <select
                            className="form-control custom-select"
                            id="account1"
                          >
                            <option value={0}>Savings (*** 5019)</option>
                            <option value={1}>Investment (*** 6212)</option>
                            <option value={2}>Mortgage (*** 5021)</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group basic">
                        <label className="label">Enter Amount</label>
                        <div className="input-group mb-2">
                          <span className="input-group-text" id="basic-addona1">
                            $
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter an amount"
                            defaultValue={100}
                          />
                        </div>
                      </div>
                      <div className="form-group basic">
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                          data-bs-dismiss="modal"
                        >
                          Deposit
                        </button>
                      </div>
                    </form>
    </>
  );
}

export default Topup;