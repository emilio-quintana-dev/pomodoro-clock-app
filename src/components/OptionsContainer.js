import styled from "styled-components";

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  flex-basis: 100%;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

export default OptionsContainer;
