import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import "./App.css";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition", description: "Some description about push ups" },
    { name: "Bicycling", type: "duration", description: "Some description about bicycling" },
    { name: "Jumping Jacks", type: "repetition", description: "Some description about jumping jacks" },
    { name: "Running", type: "duration", description: "Some description about running" },
    { name: "Sit Ups", type: "repetition", description: "Some description about sit ups" },
  ];

  return (
    <div className="app-container">
      <h1 className="title">My Exercises</h1>
      {!selectedExercise ? (
        <div className="exercise-list">
          {exercises.map((exercise, index) => (
            <div key={index} className="exercise-card">
              <div className="exercise-image-placeholder" />
              <div className="exercise-details">
                <h2>{exercise.name}</h2>
                <p>{exercise.description}</p>
                <button onClick={() => setSelectedExercise(exercise)}>Start</button>
              </div>
            </div>
          ))}
        </div>
      ) : selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} goBack={() => setSelectedExercise(null)} />
      ) : (
        <DurationExercise name={selectedExercise.name} goBack={() => setSelectedExercise(null)} />
      )}
    </div>
  );
}

export default App;
