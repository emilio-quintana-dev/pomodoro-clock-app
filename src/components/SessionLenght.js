import React from "react";
import InnerWrapper from "./InnerWrapper";
import Input from "./Input";

const SessionLength = (props) => {
  const handleChange = (event) => {
    props.updateSessionLength(event.target.value);
  };
  return (
    <InnerWrapper>
      <h2>Session Length:</h2>

      <form>
        <Input onChange={handleChange}>
          <option value="15">15:00</option>
          <option value="20">20:00</option>
          <option value="25">25:00</option>
          <option value="30">30:00</option>
          <option value="1">Test</option>
        </Input>
      </form>
    </InnerWrapper>
  );
};

export default SessionLength;
