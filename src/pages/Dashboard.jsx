import Header from "../components/Header";
import Balance from "../components/Balance";
import IncomeExpense from "../components/IncomeExpense";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Budget Dashboard</h1>
      {/* 1) Mevcut Bakiye */}
      <Balance />

      {/* 2) Gelir / Gider Özeti */}
      <IncomeExpense />

      {/* 3) İşlem Listesi */}
      <TransactionList />

      {/* 4) Yeni İşlem Ekleme */}
      <AddTransaction />
    </div>
  );
}

export default Dashboard;
