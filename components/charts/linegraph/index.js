import { useEffect, useState } from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from "recharts";
import { uid } from "uid";
import months from "@/utils/data/months";
import styled from "styled-components";

export default function Linegraph({ data, currentYear, categories, whichValue, title }) {
  const [rechartsData, setRechartsData] = useState([]);

  useEffect(() => {
    changeDataForRechart();
    function changeDataForRechart() {
      let newData = [];

      for (let month = 0; month < 12; month++) {
        let newMonth = {};
        Object.keys(categories).forEach((element) => {
          const categoryName = categories[element].name;
          newMonth[categoryName] = data?.[currentYear]?.[month]?.[element]?.[whichValue];
        });
        newMonth.name = months[month];
        newData.push(newMonth);
      }
      setRechartsData(newData);
    }
  }, [data, currentYear]);

  return (
    <>
      <h3>{title}</h3>
      <StyledContainerDiv>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={350} height={350} data={rechartsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />

            {Object.keys(categories).map((key, index) => {
              return <Line key={uid()} type="monotone" dataKey={categories[key].name} stroke={categories[key].color} />;
            })}
          </LineChart>
        </ResponsiveContainer>
      </StyledContainerDiv>
    </>
  );
}

const StyledContainerDiv = styled.div`
  width: 350px;
  height: 350px;

  @media (min-width: 440px) {
    width: 440px;
  }
  @media (min-width: 600px) {
    width: 600px;
  }
`;
