import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import BalanceExercise from "./components/BalanceExercise";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition", description: "Some description about push ups" },
    { name: "Bicycling", type: "duration", description: "Some description about bicycling" },
    { name: "Jumping Jacks", type: "repetition", description: "Some description about jumping jacks" },
    { name: "Running", type: "duration", description: "Some description about running" },
    { name: "Sit Ups", type: "repetition", description: "Some description about sit ups" },
    { name: "Balance", type: "balance",  description: "Some description about balance" },  // New exercise type
  ];

  return (
    <div className="app-container">
      <h1 className="title">My Exercises</h1>
      {!selectedExercise ? (
        <div className="exercise-list">
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-card">
              <h2>{exercise.name}</h2>
              <p>{exercise.description}</p>
              <button onClick={() => setSelectedExercise(exercise)}>Start</button>
            </div>
          ))}
        </div>
      ) : (
        selectedExercise && selectedExercise.type === "repetition" ? (
          <RepetitionExercise name={selectedExercise.name} goBack={() => setSelectedExercise(null)} />
        ) : selectedExercise.type === "duration" ? (
          <DurationExercise name={selectedExercise.name} goBack={() => setSelectedExercise(null)} />
        ) : selectedExercise.type === "balance" ? (
          <BalanceExercise name={selectedExercise.name} goBack={() => setSelectedExercise(null)} />
        ) : (
          <div>Error: Invalid Exercise Type</div>
        )
      )}
    </div>
  );
}

export default App;
