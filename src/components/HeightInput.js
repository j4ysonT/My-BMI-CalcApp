// HeightInput.js
import React, { useState } from 'react';
import './HeightInput.css'; // Import the stylesheet

const HeightInput = ({ onHeightChange, selectedUnit, onUnitChange }) => {
  const [height, setHeight] = useState('');

  const handleHeightChange = (event) => {
    const newHeight = event.target.value;
    try {
      const heightNumber = parseFloat(newHeight);
      if (!isNaN(heightNumber)) {
        setHeight(newHeight); // Update height state with the new input
        onHeightChange(heightNumber); // Pass the height value to the parent component
      } else {
        // Clear the input field if the input is not a valid number
        setHeight('');
        console.error('Invalid height input: ', newHeight);
      }
    } catch (error) {
      console.error('Error parsing height input: ', error);
    }
  };

  return (
    <div className="height-input-container">
      <label htmlFor="heightInput">Height</label>
      <div className="custom-input">
        <input
          type="text"
          id="heightInput"
          value={height}
          onChange={handleHeightChange}
          style={{ width: '170px' }}
        />
        <span className="input-label">{selectedUnit}</span>
      </div>
    </div>
  );
};

export default HeightInput;
