import React, { useState } from 'react';
import './WeightInput.css';

const WeightInput = ({ onWeightChange, selectedUnit, onUnitChange }) => {
  const [weight, setWeight] = useState('');

  const handleWeightChange = (event) => {
    const newWeight = event.target.value;
    try {
      const weightNumber = parseFloat(newWeight);
      if (!isNaN(weightNumber)) {
        setWeight(newWeight); // Update weight state with the new input
        onWeightChange(weightNumber); // Pass the weight value to the parent component
      } else {
        // Clear the input field if the input is not a valid number
        setWeight('');
        console.error('Invalid weight input: ', newWeight);
      }
    } catch (error) {
      console.error('Error parsing weight input: ', error);
    }
  };

  return (
    <div className="weight-input-container">
      <label htmlFor="weightInput">Weight</label>
      <div className="custom-input">
        <input
          type="text"
          id="weightInput"
          value={weight}
          onChange={handleWeightChange}
          style={{ width: '170px' }}
        />
        <span className="input-label">{selectedUnit}</span>
      </div>
    </div>
  )
}
export default WeightInput;