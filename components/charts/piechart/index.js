import { PieChart, Pie, Cell } from "recharts";

export default function MyPieChart() {
  const data = [
    {
      name: "Groceries",
      value: 400,
      color: "grey",
    },
    {
      name: "House",
      value: 800,
      color: "blue",
    },
    {
      name: "Fun",
      value: 600,
      color: "red",
    },
    {
      name: "Children",
      color: "green",
      value: 200,
    },
    {
      name: "Savings",
      color: "violet",
      value: 300,
    },
  ];

  function renderLabel({ name, value }) {
    return `${name} - ${value}€`;
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
          <Cell key={`cell-${index}`} fill={data[index].color} />
        ))}
      </Pie>
    </PieChart>
  );
}
