import axios from "axios";

const BASE_URL = "http://localhost:8080/api";  


export const checkBalance = async (accountNumber) => {
    try {
        const response = await axios.get(`${BASE_URL}/balance/${accountNumber}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch account balance:", error);
        throw new Error("Failed to fetch account balance");
    }
};

// Withdraw money
export const withdrawMoney = async (accountNumber, amount) => {
    try {
        const response = await axios.post(`${BASE_URL}/withdraw/${accountNumber}/${amount}`);
        return response.data;
    } catch (error) {
        console.error("Failed to withdraw money:", error);
        throw new Error("Failed to withdraw money");
    }
};

// Deposit money
export const depositMoney = async (accountNumber, amount) => {
    try {
        const response = await axios.post(`${BASE_URL}/deposit/${accountNumber}/${amount}`);
        return response.data;
    } catch (error) {
        console.error("Failed to deposit money:", error);
        throw new Error("Failed to deposit money");
    }
};
