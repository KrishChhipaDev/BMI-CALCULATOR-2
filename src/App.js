import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    setBmi(weight / (heightInMeters * heightInMeters));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleSliderChange = (e) => {
    setHeight(e.target.value);
  };

  return (
    <main>
      <div className="bmiHeader">
        <h1>BMI Calculator</h1>
      </div>

      <div className="bmiForm">
        <p>Enter your height and weight to calculate your BMI</p>
        <form onSubmit={handleSubmit}>
          <p>wieght is:{weight}</p>
          <input
            type="range"
            step={1}
            min={40}
            max={200}
            onChange={handleWeightChange}
            className="slider"
          />
          <p>height is:{height}</p>
          <input
            type="range"
            step={1}
            min={100}
            max={250}
            onChange={handleHeightChange}
            className="slider"
          />
          <button className="calculateButton">Calculate</button>
        </form>
        <p>Your BMI is: {bmi.toFixed(1)}</p>
      </div>
    </main>
  );
};

export default App;
