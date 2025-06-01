import React from 'react';
import { useGlobalState } from '../context/GlobalState';

export default function Balance() {
  const { transactions } = useGlobalState();
  const balance = transactions
    .reduce((sum, tx) => sum + tx.amount, 0)
    .toFixed(2);

  return (
    <div>
      <p className="text-sm text-gray-500">Current Balance</p>
      <p className="mt-1 text-4xl font-extrabold text-primary">
        ${balance}
      </p>
    </div>
  );
}