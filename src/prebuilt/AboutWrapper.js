import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  background: #fff;
  margin: 0 auto;
  margin-top: 100px;
  padding: 40px;
  box-shadow: 5px 10px;
  font-size: 15px;
  line-height: 30px;

  @media (min-width: 700px) {
    font-size: 18px;
  }
`;

export default AboutWrapper;
