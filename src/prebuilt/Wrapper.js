import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em 1.5em;
  border: none;
  font-family: "Montserrat", sans-serif;
  height: 310vh;

  @media (min-width: 700px) {
    height: 290vh;
    padding: 2em 4em;
  }
`;

export default Wrapper;
