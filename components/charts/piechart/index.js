import { PieChart, Pie, Cell } from "recharts";

export default function MyPieChart() {
  const data = [
    {
      name: "Groceries",
      value: 400,
    },
    {
      name: "House",
      value: 800,
    },
    {
      name: "Fun",
      value: 600,
    },
    {
      name: "Children",
      value: 200,
    },
    {
      name: "Savings",
      value: 300,
    },
  ];

  function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}`;
  }

  function renderLabel({ name, value }) {
    return `${name}`;
  }
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
        label={renderLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={getRandomColor()} />
        ))}
      </Pie>
    </PieChart>
  );
}
