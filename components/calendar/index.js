import styled from "styled-components";

export default function Calendar({
  handleMinusYear,
  handlePlusYear,
  handleMinusMonth,
  handlePlusMonth,
  currentYear,
  currentMonth,
}) {
  return (
    <>
      <Banner>
        <button onClick={handleMinusYear}>-</button> <h2>{currentYear}</h2>{" "}
        <button onClick={handlePlusYear}>+</button>
      </Banner>
      <Banner>
        <button onClick={handleMinusMonth}>-</button> <h3>{currentMonth}</h3>{" "}
        <button onClick={handlePlusMonth}>+</button>
      </Banner>
    </>
  );
}

const Banner = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;
