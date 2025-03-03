import React, { useState } from "react";
import axios from "axios";

const Withdraw = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleWithdraw = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/withdraw/${accountNumber}/${amount}`);
      setMessage("Withdrawal successful!");
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || "Transaction failed"));
    }
  };

  return (
    <div className="container">
      <h2>Withdraw Money</h2>
      <input
        type="text"
        placeholder="Enter Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Withdraw;
