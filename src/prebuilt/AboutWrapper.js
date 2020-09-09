import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  background: ${({ theme }) => theme.box};
  margin: 0 auto;
  margin-top: 100px;
  padding: 40px;
  box-shadow: ${({ theme }) => theme.shadow};
  font-size: 15px;
  line-height: 30px;

  @media (min-width: 700px) {
    font-size: 18px;
  }
`;

export default AboutWrapper;
