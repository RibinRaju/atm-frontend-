import React, { useState } from "react";
import axios from "axios";

const Deposit = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleDeposit = async () => {
    try {
      const response = await   depositMoney(accountNumber,amount);
      setMessage("Deposit successful!");
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || "Transaction failed"));
    }
  };
   useEffect(()=>{
          Deposit()
      },[])

  return (
    <div className="container">
      <h2>Deposit Money</h2>
      
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Deposit;
