import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function AddTransaction() {
  const { addTransaction } = useGlobalState();
  // State variables for transaction details
  const [description, setDescription] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().substr(0, 10)
  );
  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const amount = income ? +income : expense ? -expense : 0;
    if (!description || amount === 0) return;

    const newTx = {
      id: Date.now(),
      text: description,
      amount,
      date,
    };
    addTransaction(newTx);

    setDescription("");
    setIncome("");
    setExpense("");
    setDate(new Date().toISOString().substr(0, 10));
  };

  return (
    <div className="space-y-6 border-solid border-gray-200 p-6 rounded-lg shadow-lg bg-white">
      <h3 className="text-2xl font-semibold mb-2">Add New Transaction</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block mb-1 font-medium">
            Description
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1 font-medium">
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label htmlFor="income" className="block mb-1 font-medium">
              Income
            </label>
            <input
              id="income"
              type="number"
              value={income}
              onChange={(e) => {
                setIncome(e.target.value);
                setExpense("");
              }}
              placeholder="Income..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <label htmlFor="expense" className="block mb-1 font-medium">
              Expense
            </label>
            <input
              id="expense"
              type="number"
              value={expense}
              onChange={(e) => {
                setExpense(e.target.value);
                setIncome("");
              }}
              placeholder="Expense..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary"
            />
          </div>
        </div>
        <button
          type="submit"
          className="
            w-full
            bg-gradient-to-r from-primary to-accent
            text-gray-500
            hover:text-gray-900
            font-semibold
            py-3
            px-4
            rounded-lg
            shadow-lg-soft
            hover:from-primary-dark hover:to-accent-dark
            focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark
            transition
            cursor-pointer
          "
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
