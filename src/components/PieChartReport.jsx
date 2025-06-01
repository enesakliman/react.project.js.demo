import React from "react";
import { useGlobalState } from "../context/GlobalState";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function PieChartReport() {
  const { transactions } = useGlobalState();
  const income = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((sum, tx) => sum + tx.amount, 0);
  const expense = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];
  const COLORS = ['#00C6FF', '#8400FF'];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-semibold mb-4">Overview</h3>
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
  );
}
