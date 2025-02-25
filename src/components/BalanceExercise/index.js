// src/components/BalanceExercise/index.js
import React, { useState, useEffect } from "react";
import "./BalanceExercise.css";

function BalanceExercise({ name, goBack }) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [bestTime, setBestTime] = useState(0);
  const [attempts, setAttempts] = useState([]);
  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const stopTimer = () => {
    setIsActive(false);
    setAttempts([...attempts, time]);
    if (time > bestTime) {
      setBestTime(time);
    }
  };

  const resetAttempts = () => {
    setAttempts([]);
    setBestTime(0);
  };

  const calculateAverageTime = () => {
    if (attempts.length === 0) return 0;
    const total = attempts.reduce((acc, val) => acc + val, 0);
    return (total / attempts.length).toFixed(2);
  };

  return (
    <div className="exercise-container">
      <button className="back-button" onClick={goBack}>&larr;</button>
      <h2 className="exercise-title">{name}</h2>
      
      <div className="timer-circle">
        <p className="timer">{time}s</p>
      </div>

      <p className="best-time">Best Time: {bestTime}s</p>
      <p className="average-time">Average Time: {calculateAverageTime()}s</p>

      <div className="button-group">
        {!isActive ? (
          <button className="start-button" onClick={() => setIsActive(true)}>Start</button>
        ) : (
          <button className="stop-button" onClick={stopTimer}>Stop</button>
        )}
        <button className="reset-button" onClick={() => setTime(0)}>Reset</button>
        <button className="reset-button" onClick={resetAttempts}>Reset Attempts</button>
      </div>

      <div className="attempt-list">
        <h3>Previous Attempts</h3>
        <ul>
          {attempts.map((attempt, index) => (
            <li key={index}>{attempt}s</li>
          ))}
        </ul>
      </div>

      <div className="exercise-media">
        <p>Exercise Image/Video</p>
      </div>
    </div>
  );
}

export default BalanceExercise;