import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const balance = transactions
    .reduce((acc, tx) => acc + tx.amount, 0)
    .toFixed(2);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h4 className="text-lg">Your Balance</h4>
      <h1 className="text-3xl font-bold">${balance}</h1>
    </div>
  );
}

export default Balance;
