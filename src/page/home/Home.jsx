import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [accountNumber, setAccountNumber] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (accountNumber.trim() === "") {
      alert("Please enter an account number.");
      return;
    }
    navigate(`${path}/${accountNumber}`);
  };

  return (
    <>
      <div className="account-container">
        <h2 className="text-center">Enter Account Number</h2>
        <form>
          <input
            type="text"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </form>
      </div>

      <div className="action-container">
        <button className="btn-success" onClick={() => handleNavigation("/withdraw")}>
          Withdraw
        </button>
        <button className="btn-success" onClick={() => handleNavigation("/deposit")}>
          Deposit
        </button>
        <button className="btn-success" onClick={() => handleNavigation("/balance")}>
          Check Balance
        </button>
      </div>
    </>
  );
}
