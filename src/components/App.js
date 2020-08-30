import React from "react";
import BreakInterval from "./BreakInterval";
import SessionLength from "./SessionLenght";
import Timer from "./Timer";
import Wrapper from "./Wrapper";
import AppWrapper from "./AppWrapper";
import OutterWrapper from "./OutterWrapper";
import styled from "styled-components";
import "../App.css";

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false,
    };
  }

  onIncreaseBreakLength = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1,
      };
    });
  };

  onDecreaseBreakLength = () => {
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1,
      };
    });
  };

  onDecreaseSessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1,
      };
    });
  };

  onIncreaseSessionLength = () => {
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1,
      };
    });
  };

  onUpdateTimerMinute = () => {
    this.setState((prevState) => {
      return {
        timerMinute: prevState.timerMinute - 1,
      };
    });
  };

  onToggleInterval = (isSession) => {
    if (isSession) {
      this.setState({
        timerMinute: this.state.sessionLength,
      });
    } else {
      this.setState({
        timerMinute: this.state.breakLength,
      });
    }
  };

  onResetTimer = () => {
    this.setState({
      timerMinute: this.state.sessionLength,
    });
  };

  onPlayStopTimer = (isPlay) => {
    this.setState({
      isPlay: isPlay,
    });
  };

  render() {
    return (
      <Wrapper>
        <AppWrapper>
          <Title>Pomo Clock</Title>

          <Timer
            timerMinute={this.state.timerMinute}
            breakLength={this.state.breakLength}
            updateTimerMinute={this.onUpdateTimerMinute}
            toggleInterval={this.onToggleInterval}
            resetTimer={this.onResetTimer}
            onPlayStopTimer={this.onPlayStopTimer}
          />

          {/* <Grid>
  <OutterWrapper>
    <BreakInterval
      isPlay={this.state.isPlay}
      breakInterval={this.state.breakLength}
      increaseBreak={this.onIncreaseBreakLength}
      decreaseBreak={this.onDecreaseBreakLength}
    />
  </OutterWrapper>

  <OutterWrapper>
    <SessionLength
      isPlay={this.state.isPlay}
      sessionLength={this.state.sessionLength}
      increaseSession={this.onIncreaseSessionLength}
      decreaseSession={this.onDecreaseSessionLength}
    />
  </OutterWrapper>
</Grid> */}
        </AppWrapper>
      </Wrapper>
    );
  }
}

export default App;
