import { PieChart, Pie, Cell, Label } from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export default function MyPieChart({ data, dataPrototype, difference }) {
  const [dataArray, setDataArray] = useState([]);
  const [dataArrayIst, setDataArrayIst] = useState([]);

  function renderLabel({ name, value }) {
    if (value !== 0) {
      return `${name}`;
    }
  }

  function renderInnerLabel({ name, value, index }) {
    if (value !== 0 && dataArrayIst[index].value === 0) {
      return `${name}`;
    }
  }

  useEffect(() => {
    let ueberschuss = 0;
    let ueberschussIst = 0;
    if (difference >= 0) {
      ueberschuss = difference;
    } else {
      ueberschussIst = -difference;
    }

    convertDataObjectToArray();
    convertDataObjectToArrayIst();
    function convertDataObjectToArray() {
      const newArray = Object.entries(data).map(([objectName, objectValue]) => {
        return {
          name: dataPrototype[objectName]?.name,
          color: dataPrototype[objectName]?.color,
          value: objectValue.value,
        };
      });
      newArray.splice(0, 1);
      newArray.push({
        name: "",
        color: "#efefef",
        value: ueberschuss,
      });
      setDataArray(newArray);
    }
    function convertDataObjectToArrayIst() {
      const newArray = Object.entries(data).map(([objectName, objectValue]) => {
        return {
          name: dataPrototype[objectName]?.name,
          color: dataPrototype[objectName]?.color,
          value: objectValue.valueIst,
        };
      });
      newArray.splice(0, 1);
      newArray.push({
        name: "",
        color: "#efefef",
        value: ueberschussIst,
      });
      setDataArrayIst(newArray);
    }
  }, [data]);

  return (
    <StyledContainerDiv>
      <PieChart id="piechart" width={350} height={300}>
        <Pie
          data={dataArrayIst}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#82ca9d"
          label={renderLabel}
          labelLine={false}
          position="inside"
          animationBegin={0}
          animationDuration={300}
          animationEasing="linear"
        >
          {dataArray?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>{" "}
        <Pie
          data={dataArray}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={80}
          label={renderInnerLabel}
          labelLine={false}
          fill="#82ca9d"
          position="inside"
          animationDuration={300}
          animationBegin={0}
          animationEasing="linear"
        >
          {dataArray?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled.div`
  width: 350px;
  height: 300px;
  background-image: url("piechartbackgroundbaer.png");
  background-size: cover;
  border-radius: 10px;
  background-color: #efefef;
`;
