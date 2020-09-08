import React from "react";
import InnerWrapper from "../prebuilt/InnerWrapper";
import Selection from "../prebuilt/Selection";

const BreakInterval = (props) => {
  return (
    <InnerWrapper>
      <h2>Break Length:</h2>
      <form>
        <Selection
          onChange={(event) => props.updateBreakLength(event.target.value)}
        >
          <option value="5">5:00</option>
          <option value="10">10:00</option>
          <option value="15">15:00</option>
          <option value="20">20:00</option>
        </Selection>
      </form>
    </InnerWrapper>
  );
};

export default BreakInterval;
