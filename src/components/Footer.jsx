import React from "react";
import styled from "styled-components";

const Text = styled.p`
  margin-top: 5em;
  text-align: center;
  color: #fff;
  font-weightL 700;
`;

const Footer = () => {
  return (
    <footer>
      <Text>
        developed with <span>❤️</span> by Emilio Quintana
      </Text>
    </footer>
  );
};

export default Footer;
