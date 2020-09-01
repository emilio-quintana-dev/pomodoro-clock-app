import React, { Component } from "react";
import Button from "../prebuilt/Button";
import BigButton from "../prebuilt/BigButton";
import TimerWrapper from "../prebuilt/TimerWrapper";
import TimerClock from "../prebuilt/TimerClock";
import pushSound from "../sounds/button-push.mp3";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
      isPlaying: false,
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
      isPlaying: true,
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
    this.setState({
      isPlaying: false,
    });
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
          <source src={pushSound}></source>
        </audio>

        <ButtonWrapper>
          <Button onClick={this.resetTimer}>Refresh</Button>
        </ButtonWrapper>

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
        {!this.state.isPlaying ? (
          <BigButton onClick={this.playTimer}>Start</BigButton>
        ) : (
          <BigButton onClick={this.stopTimer}>Stop</BigButton>
        )}
      </TimerWrapper>
    );
  }
}

export default Timer;
