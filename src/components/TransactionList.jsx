import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import TransactionItem from './TransactionItem';

export default function TransactionList() {
  const { transactions } = useGlobalState();

  return (
    <div className="transactions-container bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-xl font-semibold mb-4">History</h3>
      <ul className="divide-y">
        {/* Başlık satırı */}
        <li className="flex justify-between font-medium text-gray-600 py-2 border-b">
          <span className="w-1/4">Tarih</span>
          <span className="w-2/4">Açıklama</span>
          <span className="w-1/4 text-right">Tutar</span>
        </li>

        {/* İşlem yoksa */}
        {transactions.length === 0 && (
          <li className="text-center py-4 text-gray-500">
            Henüz işlem yok
          </li>
        )}

        {/* İşlemleri listele */}
        {transactions.map(tx => (
          <TransactionItem key={tx.id} transaction={tx} />
        ))}
      </ul>
    </div>
  );
}
