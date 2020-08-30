import React, { useState } from "react";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLenght";
import Timer from "./Timer";
import Wrapper from "./Wrapper";
import AppWrapper from "./AppWrapper";
import OutterWrapper from "./OutterWrapper";
import OptionsContainer from "./OptionsContainer";
import Title from "./Title";
import "../App.css";

export default function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);
  const [isPlay, setIsPlay] = useState(false);
  const [count, setCount] = useState(0);

  const onIncreaseBreakLength = () => {
    setBreakLength(breakLength + 1);
  };

  const onDecreaseBreakLength = () => {
    setBreakLength(breakLength - 1);
  };

  const onDecreaseSessionLength = () => {
    setSessionLength(sessionLength - 1);
    setTimerMinute(sessionLength);
  };

  const onIncreaseSessionLength = () => {
    setSessionLength(sessionLength + 1);
    setTimerMinute(sessionLength);
  };

  const onUpdateTimerMinute = () => {
    setTimerMinute(timerMinute - 1);
  };

  const onToggleInterval = (isSession) => {
    if (isSession) {
      setTimerMinute(sessionLength);
    } else {
      setTimerMinute(breakLength);
    }
  };

  const onResetTimer = () => {
    setTimerMinute(sessionLength);
  };

  const onPlayStopTimer = (isPlay) => {
    setIsPlay(isPlay);
  };

  return (
    <Wrapper>
      <AppWrapper>
        <Title>Pomo Clock</Title>
        <Timer
          timerMinute={timerMinute}
          breakLength={breakLength}
          updateTimerMinute={onUpdateTimerMinute}
          toggleInterval={onToggleInterval}
          resetTimer={onResetTimer}
          onPlayStopTimer={onPlayStopTimer}
        />

        <OptionsContainer>
          <OutterWrapper>
            <BreakInterval
              isPlay={isPlay}
              breakInterval={breakLength}
              increaseBreak={onIncreaseBreakLength}
              decreaseBreak={onDecreaseBreakLength}
            />
          </OutterWrapper>

          <OutterWrapper>
            <SessionLength
              isPlay={isPlay}
              sessionLength={sessionLength}
              increaseSession={onIncreaseSessionLength}
              decreaseSession={onDecreaseSessionLength}
            />
          </OutterWrapper>
        </OptionsContainer>
      </AppWrapper>
    </Wrapper>
  );
}
