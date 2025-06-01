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
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-2">Yeni İşlem Ekle</h3>
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
            placeholder="Açıklama girin..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="date" className="block mb-1 font-medium">
            Tarih
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
              Girdi (Gelir)
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
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-primary"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <label htmlFor="expense" className="block mb-1 font-medium">
              Çıktı (Gider)
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
          İşlemi Ekle
        </button>
      </form>
    </div>
  );
}
