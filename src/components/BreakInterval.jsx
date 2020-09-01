import React from "react";
import InnerWrapper from "../prebuilt/InnerWrapper";
import Input from "../prebuilt/Input";

const BreakInterval = (props) => {
  const handleChange = (event) => {
    props.updateSessionLength(event.target.value);
  };

  return (
    <InnerWrapper>
      <h2>Break Length:</h2>
      <form>
        <Input onChange={handleChange}>
          <option value="5">5:00</option>
          <option value="10">10:00</option>
          <option value="15">15:00</option>
          <option value="20">20:00</option>
        </Input>
      </form>
    </InnerWrapper>
  );
};

export default BreakInterval;
