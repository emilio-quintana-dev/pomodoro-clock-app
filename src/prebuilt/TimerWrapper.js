import styled from "styled-components";

const TimerWrapper = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.timer};
  padding: 10px 30px 50px 30px;
`;

export default TimerWrapper;
