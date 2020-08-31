import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }
`;

export default AppWrapper;
