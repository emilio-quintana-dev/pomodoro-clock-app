import React, { Component } from "react";
import Button from "./Button";
import PlayButton from "./PlayButton";
import TimerWrapper from "./TimerWrapper";
import TimerActions from "./TimerActions";
import TimerClock from "./TimerClock";

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    };
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  playTimer = () => {
    this.playAudio();
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayStopTimer(true);
    this.setState({
      intervalId: intervalId,
    });
  };

  decreaseTimer = () => {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });

            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });

            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;

      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  };

  stopTimer = () => {
    clearInterval(this.state.intervalId);
    this.props.onPlayStopTimer(false);
  };

  resetTimer = () => {
    this.stopTimer();
    this.props.resetTimer();
    this.props.onPlayStopTimer(false);
    this.setState({
      timerSecond: 0,
      isSession: true,
    });
  };

  render() {
    return (
      <TimerWrapper>
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
        <TimerActions>
          <Button onClick={this.stopTimer}>Stop</Button>
          <Button onClick={this.resetTimer}>Refresh</Button>
        </TimerActions>

        <h2>{this.state.isSession === true ? "Session" : "Break"}</h2>

        <TimerClock>
          <span> {this.props.timerMinute}</span>
          <span>:</span>
          <span>
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </TimerClock>
        <PlayButton onClick={this.playTimer}>Start</PlayButton>
      </TimerWrapper>
    );
  }
}

export default Timer;
