import React, { useState } from "react";
import Button from "./Button";
import BigButton from "./BigButton";
import TimerWrapper from "./TimerWrapper";
import TimerClock from "./TimerClock";
import pushSound from "../sounds/button-push.mp3";

export default function Timer(props) {
  const [isSession, setIsSession] = useState(true);
  const [timerSecond, setTimerSecond] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  const playTimer = () => {
    playAudio();
    let intervalId = setInterval(decreaseTimer, 1000);
    props.onPlayStopTimer(true);
    setIntervalId(intervalId);
    setIsPlaying(true);
  };

  const decreaseTimer = () => {
    console.log("Timer Second", timerSecond);
    console.log("Timer Minute", props.timerMinute);
    switch (timerSecond) {
      case 0:
        if (props.timerMinute === 0) {
          if (isSession) {
            setIsSession(false);
            props.toggleInterval(isSession);
          } else {
            setIsSession(true);
            props.toggleInterval(isSession);
          }
        } else {
          props.updateTimerMinute();
          setTimerSecond(59);
        }
        break;

      default:
        setTimerSecond(timerSecond - 1);
        break;
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    props.onPlayStopTimer(false);
    setIsPlaying(false);
  };

  const resetTimer = () => {
    stopTimer();
    props.resetTimer();
    props.onPlayStopTimer(false);
    setTimerSecond(0);
    setIsSession(true);
  };

  return (
    <TimerWrapper>
      <audio className="audio-element">
        <source src={pushSound}></source>
      </audio>

      <Button onClick={resetTimer}>Refresh</Button>

      <h2>{isSession === true ? "Session" : "Break"}</h2>

      <TimerClock>
        <span> {props.timerMinute}</span>
        <span>:</span>
        <span>
          {timerSecond === 0
            ? "00"
            : timerSecond < 10
            ? "0" + timerSecond
            : timerSecond}
        </span>
      </TimerClock>
      {!isPlaying ? (
        <BigButton onClick={playTimer}>Start</BigButton>
      ) : (
        <BigButton onClick={stopTimer}>Stop</BigButton>
      )}
    </TimerWrapper>
  );
}
