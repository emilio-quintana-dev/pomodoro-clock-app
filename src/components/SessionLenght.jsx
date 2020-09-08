import React from "react";
import InnerWrapper from "../prebuilt/InnerWrapper";
import Selection from "../prebuilt/Selection";

const SessionLength = (props) => {
  return (
    <InnerWrapper>
      <h2>Session Length:</h2>
      <form>
        <Selection
          onChange={(event) => props.updateSessionLength(event.target.value)}
        >
          <option value="15">15:00</option>
          <option value="20">20:00</option>
          <option value="25">25:00</option>
          <option value="30">30:00</option>
        </Selection>
      </form>
    </InnerWrapper>
  );
};

export default SessionLength;
