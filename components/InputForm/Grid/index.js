const { default: styled } = require("styled-components");

const StyledGrid = styled.div`
  display: grid;
  width: 180px;
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-template-rows: 30px 30px 30px 30px 30px 30px;
  align-items: center;
  justify-items: center;
  padding: 0;
  margin: 0;
`;

export default StyledGrid;
