import styled from "styled-components";

const OutterWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  background: #8ee4af;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (min-width: 600px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export default OutterWrapper;
