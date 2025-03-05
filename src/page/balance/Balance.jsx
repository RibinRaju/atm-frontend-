import React, { useEffect, useState } from "react";
import { checkBalance } from "../../api/atmservice";
import { useParams } from "react-router-dom";

const Balance = () => {
    const { accountNumber } = useParams();
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState("");

    const fetchBalance = async () => {
        if (!accountNumber) {
            setError("Please enter an account number.");
            return;
        }

        try {
            console.log("Fetching balance for account:", accountNumber);
            const balanceAmount = await checkBalance(accountNumber); // Expecting a number
            console.log("Balance received:", balanceAmount);
            setBalance(balanceAmount);  
            setError(""); // Clear errors if successful
        } catch (err) {
            console.error("Error fetching balance:", err);
            setError("Failed to fetch balance. Please check the account number and try again.");
            setBalance(null);
        }
    };

    useEffect(() => {
        if (accountNumber) {
            fetchBalance();
        }
    }, [accountNumber]);

    return (
        <div className="container">
            <h2>Check Account Balance</h2>
            <p>Account Number: {accountNumber}</p>
            
            {balance !== null ? (
                <p>Balance: <strong>Rs {balance}</strong></p>
            ) : (
                <p className="error">{error}</p>
            )}
        </div>
    );
};

export default Balance;
