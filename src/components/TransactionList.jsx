import React from "react";
import { useGlobalState } from "../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <>
      <div className="transactions-container bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 className="text-xl mb-4">History</h3>
        <ul className="divide-y">
          {transactions.length === 0 && (
            <li className="text-center py-4 text-gray-500">Henüz işlem yok</li>
          )}
          {transactions.map((tx) => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TransactionList;
