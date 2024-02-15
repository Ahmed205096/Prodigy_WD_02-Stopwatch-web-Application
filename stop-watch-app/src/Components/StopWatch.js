import { useEffect, useState } from "react";
import "./StopWatch.css";

import {
  hourReturn,
  minuteReturn,
  restartTimer,
  secondReturn,
  startTimer,
} from "./timerFunctions";

export default function StopWatch() {
  const [SecondTimer, setSecondTimer] = useState(secondReturn);
  const [minuteTimer, setminuteTimer] = useState(minuteReturn);
  const [hoursTimer, sethoursTimer] = useState(hourReturn);

  useEffect(() => {
    const updateTimerValues = () => {
      sethoursTimer(hourReturn);
      setminuteTimer(minuteReturn);
      setSecondTimer(secondReturn);
    };

    // Subscribe to timer updates
    setInterval(updateTimerValues, 1);
  }, []);

  return (
    // <!-- Start The Main Container -->
    <div className="timer">
      {/* <!-- Start the internal container that hold the cards --> */}
      <div className="timer-container">
        {/* <!-- Start the hours container --> */}
        <div className="hours-container time">
          <p className="container-names">Hours</p>
          <p id="hours">{hoursTimer}</p>
        </div>
        {/* <!-- End the hours container --> */}

        <p className="dots">:</p>
        {/* <!-- Start the minutes container --> */}
        <div className="minutes-container time">
          <p className="container-names">Minutes</p>
          <p id="minute">{minuteTimer}</p>
        </div>
        {/* <!-- End the minutes container --> */}

        <p className="dots">:</p>
        {/* <!-- Start the seconds container --> */}
        <div className="seconds-container time">
          <p className="container-names">Seconds</p>
          <p id="second">{SecondTimer}</p>
        </div>
        {/* <!-- End the seconds container --> */}
      </div>
      {/* <!-- End the internal container that hold the cards --> */}

      {/* <!-- Start the buttons container --> */}
      <div className="buttons-container">
        <button
          className="pauseTimer"
          onClick={() => {
            startTimer(true);
          }}
        >
          Pause
        </button>
        <button
          className="startTimer"
          onClick={() => {
            startTimer();
          }}
        >
          Start
        </button>
        <button
          className="resetTimer"
          onClick={() => {
            restartTimer();
          }}
        >
          Reset
        </button>
      </div>
      {/* <!-- End the buttons container --> */}
    </div>
    // <!-- End The Big Container -->
  );
}
