// AgeInput.js
import React, { useState } from 'react';
import './AgeInput.css'; // Import the stylesheet

const AgeInput = ({ onAgeChange }) => {
  const [age, setAge] = useState('');

  const handleAgeChange = (event) => {
    const newAge = event.target.value;
    setAge(newAge);

    // Pass the new age to the parent component
    onAgeChange(newAge);
  };

  return (
    <div className="age-input-container">
      <label htmlFor="years_input">Age (1 year or above)*</label>
      <div className="custom-input">
        <input
          type="text"
          id="years_input"
          value={age}
          onChange={handleAgeChange}
          maxLength="3"
          style={{ width: '170px' }}
        />
        <span
        className="placeholdertext"
        id="years_ph"
        >
          years
        </span>
      </div>
    </div>
  );
};

export default AgeInput;
