import React, { useState } from "react";
import "./RepetitionExercise.css";

function RepetitionExercise({ name, goBack }) {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState("");

  return (
    <div className="exercise-container">
      <div className="header">
        <button className="back-button" onClick={goBack}>&larr;</button>
      </div>
      <h2 className="exercise-title">{name}</h2>
      <div className="circle-container">
        <p className="rep-count">{count}</p>
      </div>
      <p className="rep-label">Reps Completed</p>
      <div className="button-group">
        <button className="add-button" onClick={() => setCount(count + 1)}>+</button>
        <button className="subtract-button" onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
      </div>
      <input 
        type="number" 
        value={goal} 
        onChange={(e) => setGoal(e.target.value)} 
        className="goal-input"
        placeholder="Enter Rep Goals"
      />
      <div className="exercise-media">
        <p>Exercise Image/Video</p>
      </div>
    </div>
  );
}

export default RepetitionExercise;