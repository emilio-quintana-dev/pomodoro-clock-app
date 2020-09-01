import React, { useState } from "react";
import BreakInterval from "./components/BreakInterval.jsx";
import SessionLength from "./components/SessionLenght.jsx";
import Timer from "./components/Timer.jsx";
import Wrapper from "./prebuilt/Wrapper";
import AppWrapper from "./prebuilt/AppWrapper";
import OutterWrapper from "./prebuilt/OutterWrapper";
import AboutWrapper from "./prebuilt/AboutWrapper";
import Title from "./prebuilt/Title";
import "./styles/App.css";

export default function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);
  const [isPlay, setIsPlay] = useState(false);
  const [count, setCount] = useState(0);

  const updateSessionLength = (newTime) => {
    setSessionLength(newTime);
    setTimerMinute(newTime);
  };

  const updateBreakLength = (newTime) => {
    setBreakLength(newTime);
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

        <OutterWrapper>
          <SessionLength
            updateSessionLength={updateSessionLength}
            isPlay={isPlay}
            sessionLength={sessionLength}
          />

          <BreakInterval
            isPlay={isPlay}
            breakInterval={breakLength}
            updateBreakLength={updateBreakLength}
          />
        </OutterWrapper>
      </AppWrapper>

      <AboutWrapper>
        <h1>About:</h1>
        <p>
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. The technique uses a timer to
          break down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Wikipedia
        </p>
      </AboutWrapper>
    </Wrapper>
  );
}
