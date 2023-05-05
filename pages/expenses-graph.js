import StyledCalendar from "@/components/calendar";
import { useState } from "react";

export default function ExpensesGraph() {
  const [currentYear, setCurrentYear] = useState(2023);

  function handleMinusYear() {
    setCurrentYear(currentYear - 1);
  }
  function handlePlusYear() {
    setCurrentYear(currentYear + 1);
  }
  return (
    <StyledCalendar
      handleMinus={handleMinusYear}
      handlePlus={handlePlusYear}
      current={currentYear}
    />
  );
}
