import { PieChart, Pie, Cell, Label } from "recharts";

export default function MyPieChart({ data }) {
  function renderLabel({ name, value }) {
    return `${name} - ${value}€`;
  }

  return (
    <PieChart
      id="piechart"
      width={350}
      height={300}
      //padding={{ top: 0, right: 50, left: 20, bottom: 5 }}
    >
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={40}
        outerRadius={90}
        fill="#82ca9d"
        label={renderLabel}
        position="inside"
      >
        {" "}
        <Label value="Insights " position="center" fill="black" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={data[index].color} />
        ))}
      </Pie>
    </PieChart>
  );
}
