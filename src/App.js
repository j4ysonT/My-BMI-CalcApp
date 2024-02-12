import React, { useState } from 'react';
import './App.css';
import AgeInput from './components/AgeInput';
import HeightInput from './components/HeightInput';
import WeightInput from './components/WeightInput';
import { convertToKG, convertToCM } from './components/Conversion'; // Import conversion functions
import CalculateBMI from './components/CalculateBMI';

function App() {
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm'); // Default height unit
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg'); // Default weight unit
  const [calculateBMI, setCalculateBMI] = useState(false)

  const handleAgeChange = (newAge) => {
    console.log('New Age:', newAge);
  };

  const handleWeightChange = (newWeight) => {
    setWeight(newWeight);
  };

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };

  const handleHeightUnitChange = (newUnit) => {
    setHeightUnit(newUnit);
    if (newUnit === 'cm' && heightUnit === 'in') {
      setHeight(convertToCM(height, 'cm'));
    }
  };

  const handleWeightUnitChange = (newUnit) => {
    setWeightUnit(newUnit);
    if (newUnit === 'kg' && weightUnit === 'lb') {
      setWeight(convertToKG(weight, 'kg')); 
    }
  };

  const handleCalculate = () => {
    setCalculateBMI(true);
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <AgeInput onAgeChange={handleAgeChange} />

      <HeightInput
        onHeightChange={handleHeightChange}
        selectedUnit={heightUnit}
        onUnitChange={handleHeightUnitChange}
      />
      <div>
        <label>Choose Height Unit:</label>
        <select onChange={(e) => handleHeightUnitChange(e.target.value)} value={heightUnit}>
          <option value="cm">Centimeters</option>
          <option value="in">Inches</option>
        </select>
      </div>

      <WeightInput
        onWeightChange={handleWeightChange}
        selectedUnit={weightUnit}
        onUnitChange={handleWeightUnitChange}
      />
      <div>
        <label>Choose Weight Unit:</label>
        <select onChange={(e) => handleWeightUnitChange(e.target.value)} value={weightUnit}>
          <option value="kg">Kilograms</option>
          <option value="lb">Pounds</option>
        </select>
      </div>


      <button className="calculate-button" onClick={handleCalculate}>Calculate</button>

      {calculateBMI && (
        <CalculateBMI
          height={height}
          heightUnit={heightUnit}
          weight={weight}
          weightUnit={weightUnit}
        />
      )}
    </div>
  );
}

export default App;
