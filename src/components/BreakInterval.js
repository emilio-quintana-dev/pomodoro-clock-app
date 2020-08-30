import React from "react";
import Button from "./Button";
import InnerWrapper from "./InnerWrapper";

const BreakInterval = (props) => {
  const decreaseCounter = () => {
    if (props.breakInterval === 1) {
      return;
    }

    props.decreaseBreak();
  };

  const increaseCounter = () => {
    if (props.breakInterval === 60) {
      return;
    }

    props.increaseBreak();
  };
  return (
    <InnerWrapper>
      <h2>Break Length:</h2>

      <Button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decreaseCounter}
      >
        Down
      </Button>
      <p className="interval-length"> {props.breakInterval}</p>
      <Button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseCounter}
      >
        Up
      </Button>
    </InnerWrapper>
  );
};

export default BreakInterval;
