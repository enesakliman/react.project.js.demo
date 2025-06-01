import React, { useState } from "react";
import Balance from "../components/Balance";
import PieChartReport from "../components/PieChartReport";
import LineChartReport from "../components/LineChartReport";
import Modal from "../components/Modal";
import AddTransaction from "../components/AddTransaction";

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto flex-1 px-4 py-8 space-y-8">
        <div className="bg-white shadow-md rounded-xl  p-6 flex items-center justify-between">
          <Balance />
          <button
            onClick={() => setModalOpen(true)}
            className="bg-white text-primary font-semibold py-2 px-4 rounded-md shadow hover:bg-gray-100 transition"
          >
            Add New Transaction
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg-soft p-6">
            <PieChartReport />
          </div>
          <div className="bg-white rounded-xl shadow-lg-soft p-6">
            <LineChartReport />
          </div>
        </div>
      </main>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <AddTransaction />
      </Modal>
    </div>
  );
}
