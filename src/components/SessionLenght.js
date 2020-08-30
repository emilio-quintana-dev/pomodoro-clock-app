import React from "react";
import Button from "./Button";
import InnerWrapper from "./InnerWrapper";

const SessionLength = (props) => {
  const decreaseCounter = () => {
    if (props.breakInterval === 1) {
      return;
    }

    props.decreaseSession();
  };

  const increaseCounter = () => {
    if (props.breakInterval === 60) {
      return;
    }

    props.increaseSession();
  };
  return (
    <InnerWrapper>
      <h2>Session Length:</h2>
      <Button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decreaseCounter}
      >
        Down
      </Button>
      <p className="interval-length"> {props.sessionLength}</p>
      <Button
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseCounter}
      >
        Up
      </Button>
    </InnerWrapper>
  );
};

export default SessionLength;
