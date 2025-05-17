import TransactionsList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";

function Transactions() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Transactions</h2>
      <TransactionsList />
      <AddTransaction />
    </div>
  );
}

export default Transactions;
