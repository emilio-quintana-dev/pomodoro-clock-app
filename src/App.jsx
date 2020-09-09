import React, { useState } from "react";
import BreakInterval from "./components/BreakInterval.jsx";
import SessionLength from "./components/SessionLenght.jsx";
import Timer from "./components/Timer.jsx";
import Wrapper from "./prebuilt/Wrapper";
import AppWrapper from "./prebuilt/AppWrapper";
import OutterWrapper from "./prebuilt/OutterWrapper";
import AboutWrapper from "./prebuilt/AboutWrapper";
import Title from "./prebuilt/Title";
import Link from "./prebuilt/Link";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./Themes";
import styled from "styled-components";

const ThemeButton = styled.button`
  margin: 0 auto;
  padding: 10px 20px;
  max-width: 200px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export default function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerMinute, setTimerMinute] = useState(25);
  const [isPlay, setIsPlay] = useState(false);

  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <AppWrapper>
            <ThemeButton onClick={themeToggler}>
              {theme === "light" ? "Dark Mode " : "Light Mode "}
              <i
                className={theme === "light" ? "far fa-moon" : "far fa-sun"}
              ></i>
            </ThemeButton>

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
              break down work into intervals, traditionally 25 minutes in
              length, separated by short breaks.{" "}
              <Link href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
                Wikipedia
              </Link>
            </p>
          </AboutWrapper>

          <AboutWrapper>
            <h1>Say Hello!</h1>

            <ContactForm />
          </AboutWrapper>
          <Footer />
        </Wrapper>
      </>
    </ThemeProvider>
  );
}
