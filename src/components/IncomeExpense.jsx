import React from "react";
import { useGlobalState } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useGlobalState();
  // Calculate income and expense totals
  const income = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((acc, tx) => acc + tx.amount, 0)
    .toFixed(2);
  const expense = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((acc, tx) => acc + tx.amount, 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container flex justify-between bg-white shadow-md rounded-lg p-4 mb-6">
      <div>
        <h4 className="text-sm">INCOME</h4>-{" "}
        <p className="money plus">${income}</p>+{" "}
        <p className="money plus">${income}</p>
      </div>
      <div>
        <h4 className="text-sm">EXPENSE</h4>-{" "}
        <p className="money minus">${expense}</p>+{" "}
        <p className="money minus">${expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
