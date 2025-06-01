import React from "react";
import { useGlobalState } from "../context/GlobalState";

export default function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = Math.abs(transaction.amount).toFixed(2);
  const date = new Date(transaction.date).toLocaleDateString("tr-TR");

  return (
    <li
      className={`flex justify-between items-center py-2 ${
        transaction.amount < 0
          ? "border-l-4 border-red-500"
          : "border-l-4 border-green-500"
      }`}
    >
      {/* Tarih */}
      <span className="w-1/4 text-sm text-gray-500">{date}</span>

      {/* Açıklama */}
      <span className="w-2/4">{transaction.text}</span>

      {/* Tutar + Silme */}
      <span className="w-1/4 text-right flex items-center justify-end space-x-2">
        <span>
          {sign}
          {amount}₺
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="text-red-600 hover:text-red-800 cursor-pointer"
        >
          x
        </button>
      </span>
    </li>
  );
}
