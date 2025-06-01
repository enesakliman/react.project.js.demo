import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export default function LineChartReport() {
  const { transactions } = useGlobalState();

  // Tarihe göre grupla
  const grouped = transactions.reduce((acc, tx) => {
    const d = tx.date;
    if (!acc[d]) acc[d] = { date: d, income: 0, expense: 0 };
    if (tx.amount > 0) acc[d].income += tx.amount;
    else acc[d].expense += Math.abs(tx.amount);
    return acc;
  }, {});

  // Sıralı diziye dönüştür
  const timeData = Object.values(grouped)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(item => ({
      date: item.date,
      income: item.income,
      expense: item.expense
    }));
    const COLORS = ['#00C6FF', '#8400FF'];
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4">History</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={timeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={d => d.slice(5)}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis />
          <Tooltip labelFormatter={l => new Date(l).toLocaleDateString('tr-TR')} />
          <Legend verticalAlign="bottom" height={32} />
          <Line type="monotone" dataKey="income" name="Income" stroke="#00C6FF" dot={false} />
          <Line type="monotone" dataKey="expense" name="Expense" stroke="#8400FF" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
