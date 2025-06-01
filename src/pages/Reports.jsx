import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

export default function Reports() {
  const { transactions } = useGlobalState();

  // PieChart hesaplamaları
  const income = transactions
    .filter(tx => tx.amount > 0)
    .reduce((sum, tx) => sum + tx.amount, 0);
  const expense = transactions
    .filter(tx => tx.amount < 0)
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

  const data = [
    { name: 'Income', value: income },
    { name: 'Expense', value: expense }
  ];

  // LineChart için tarih bazlı gruplama
  const grouped = transactions.reduce((acc, tx) => {
    const d = tx.date;
    if (!acc[d]) acc[d] = { date: d, income: 0, expense: 0 };
    if (tx.amount > 0) acc[d].income += tx.amount;
    else acc[d].expense += Math.abs(tx.amount);
    return acc;
  }, {});

  const timeData = Object.values(grouped)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(item => ({
      date: item.date,
      income: item.income,
      expense: item.expense
    }));

    const COLORS = ['#00C6FF', '#8400FF'];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Reports</h2>

      {/* PieChart */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              label
            >
              {data.map((entry, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* LineChart */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-4">
        <h3 className="text-xl font-semibold mb-4">Income & Expense Over Time</h3>
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
            <Legend verticalAlign="bottom" height={36}/>
            <Line 
              type="monotone" 
              dataKey="income" 
              name="Income" 
              stroke="#00C6FF" 
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="expense" 
              name="Expense" 
              stroke="#8400FF" 
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
