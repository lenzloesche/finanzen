import StyledCalendar from "@/components/calendar";
import { useState } from "react";
import Linegraph from "@/components/charts/linegraph";

export default function ExpensesGraph({ data, dataPrototype }) {
  const [currentYear, setCurrentYear] = useState(2023);

  function handleMinusYear() {
    setCurrentYear(currentYear - 1);
  }
  function handlePlusYear() {
    setCurrentYear(currentYear + 1);
  }
  return (
    <>
      <h1>BÄRENGRAPH</h1>
      <StyledCalendar
        handleMinus={handleMinusYear}
        handlePlus={handlePlusYear}
        current={currentYear}
      />
      <Linegraph
        data={data}
        currentYear={currentYear}
        dataPrototype={dataPrototype}
      />
    </>
  );
}
