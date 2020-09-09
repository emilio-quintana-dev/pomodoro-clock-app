import styled from "styled-components";

const OutterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  background: ${({ theme }) => theme.timer};
  min-height: 200px;
`;

export default OutterWrapper;
