import React, { useEffect, useState } from "react";
import axios from "axios";
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
            const response = await checkBalance(accountNumber);
            setBalance(response.data);
            setError("");
        } catch (err) {
            console.error("Error fetching balance:", err);
            setError("Failed to fetch balance. Please check the account number and try again.");
            setBalance(null);
        }
    };

    useEffect(()=>{
        fetchBalance()
    },[])

    return (
        <div className="container">
            <h2>Check Account Balance</h2>
           
            {balance !== null ? (
                <p>Balance: <strong>Rs{balance}</strong></p>
            ) : (
                error && <p className="error">{error}</p>
            )}
        </div>
    );
};

export default Balance;
