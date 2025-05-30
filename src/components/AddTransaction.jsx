import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

export default function AddTransaction() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toISOString().substr(0, 10)
  );

  const onSubmit = (e) => {
    e.preventDefault();
    // Girdi veya çıktıyı uygun işaretle hesapla
    const amount = income ? +income : expense ? -expense : 0;
    if (!description || amount === 0) return;

    const newTx = {
      id: Date.now(),
      text: description,
      amount: amount,
      date: date,
    };
    addTransaction(newTx);

    // Formu temizle
    setDescription("");
    setIncome("");
    setExpense("");
    setDate(new Date().toISOString().substr(0,10));
  };

  return (
    <div className="add-transaction bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-xl mb-2">Add New Transaction</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        {/* Açıklama Input */}
        <div>
          <label htmlFor="description" className="block mb-1 font-medium">
            Açıklama
          </label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Açıklama girin..."
            className="w-full p-2 border rounded focus:outline-none focus:ring"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="date" className="block mb-1 font-medium">
            Tarih
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring"
          />
        </div>

        {/* Girdi ve Çıktı Inputları Yan Yana */}
        <div className="flex space-x-4">
          {/* Girdi */}
          <div className="flex-1">
            <label htmlFor="income" className="block mb-1 font-medium">
              Girdi
            </label>
            <input
              id="income"
              type="number"
              value={income}
              onChange={(e) => {
                setIncome(e.target.value);
                setExpense("");
              }}
              placeholder="Gelir..."
              className="w-full p-2 border rounded focus:outline-none focus:ring"
            />
          </div>

          {/* Çıktı */}
          <div className="flex-1">
            <label htmlFor="expense" className="block mb-1 font-medium">
              Çıktı
            </label>
            <input
              id="expense"
              type="number"
              value={expense}
              onChange={(e) => {
                setExpense(e.target.value);
                setIncome("");
              }}
              placeholder="Gider..."
              className="w-full p-2 border rounded focus:outline-none focus:ring"
            />
          </div>
        </div>

        {/* Ekle Butonu */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
