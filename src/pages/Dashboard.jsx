import React, { useState } from 'react';
import Balance from '../components/Balance';
import PieChartReport from '../components/PieChartReport';
import LineChartReport from '../components/LineChartReport';
import Modal from '../components/Modal';
import AddTransaction from '../components/AddTransaction';

export default function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Budget Dashboard</h1>

      {/* 1) Bakiye */}
      <Balance />

      {/* 2) Grafikler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <PieChartReport />
        <LineChartReport />
      </div>

      {/* 3) Modal ile Yeni İşlem Ekleme */}
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Yeni İşlem Ekle
      </button>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <AddTransaction />
      </Modal>
    </div>
  );
}
