import React, { useState, useEffect } from "react";
import "./DurationExercise.css";

function DurationExercise({ name, goBack }) {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("countUp");

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => (mode === "countUp" ? prev + 1 : Math.max(prev - 1, 0)));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, mode]);

  const formatTime = (time) => {
    const mins = String(Math.floor(time / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="exercise-container">
      <div className="header">
        <button className="back-button" onClick={goBack}>&larr;</button>
      </div>
      <h2 className="exercise-title">{name}</h2>
      <div className="timer-circle">
        <p className="timer">{formatTime(seconds)}</p>
      </div>
      <p className="time-label">Time (MM:SS)</p>
      <p className="timer-mode-label">Timer Mode</p>
      <div className="mode-toggle">
        <button className={mode === "countUp" ? "active" : ""} onClick={() => setMode("countUp")}>Count Up</button>
        <button className={mode === "countDown" ? "active" : ""} onClick={() => setMode("countDown")}>Count Down</button>
      </div>
      <div className="button-group">
        <button className="start-button" onClick={() => setIsActive(true)}>Start</button>
        <button className="stop-button" onClick={() => setIsActive(false)}>Stop</button>
        <button className="reset-button" onClick={() => { setIsActive(false); setSeconds(0); }}>Reset</button>
      </div>
      <div className="exercise-media">
        <p>Exercise Image/Video</p>
      </div>
    </div>
  );
}

export default DurationExercise;