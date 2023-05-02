import { PieChart, Pie, Cell, Label } from "recharts";
import { useState } from "react";
import { useEffect } from "react";

export default function MyPieChart({ data }) {
  const [dataArray, setDataArray] = useState([]);

  function renderLabel({ name, value }) {
    return `${name} - ${value}€`;
  }
  useEffect(() => {
    convertDataObjectToArray();
    function convertDataObjectToArray() {
      const newArray = Object.entries(data).map(([objectName, objectValue]) => {
        return {
          name: objectName,
          color: objectValue.color,
          value: objectValue.value,
        };
      });
      console.log("newArray", newArray);
      setDataArray(newArray);
    }
  }, [data]);

  return (
    <PieChart
      id="piechart"
      width={350}
      height={300}
      //padding={{ top: 0, right: 50, left: 20, bottom: 5 }}
    >
      <Pie
        data={dataArray}
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
        <Label value="Insights " position="center" fill="black" />
        {dataArray?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
}
