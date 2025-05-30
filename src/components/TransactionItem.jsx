import React from "react";
import { useGlobalState } from "../context/GlobalState";

function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();
  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = Math.abs(transaction.amount).toFixed(2);
  return (
    <>
      <li
        className={`flex justify-between p-2 ${
          transaction.amount < 0
            ? "border-l-4 border-red-500"
            : "border-l-4 border-green-500"
        }`}
      >
        <span>{transaction.text}</span>
        <span>
          {sign}${amount}
          <button
            onClick={() => deleteTransaction(transaction.id)}
            className="ml-2 text-red-600 hover:text-red-800"
          >
            x
          </button>
        </span>
      </li>
    </>
  );
}

export default TransactionItem;
