import styled from "styled-components";
import StyledButton from "../button";

export default function StyledCalendar({ handleMinus, handlePlus, current }) {
  return (
    <>
      <StyledBanner>
        <StyledButton onClick={handleMinus}>-</StyledButton> <StyledHeading2>{current}</StyledHeading2> <StyledButton onClick={handlePlus}>+</StyledButton>
      </StyledBanner>
    </>
  );
}

const StyledHeading2 = styled.h2`
  text-align: center;
  width: 130px;
  margin: 0;
  padding: 0;
  font-size: 30px;
`;

const StyledBanner = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
`;
