import React, { useState, useEffect } from 'react';
import { convertToKG, convertToCM } from './Conversion'; // Import conversion functions

const BMICalculator = ({ height, heightUnit, weight, weightUnit }) => {
  const [bmi, setBMI] = useState(null);

  useEffect(() => {
    const calculateBMI = () => {
      if (height && weight) {
        let heightInMeter;
        if (heightUnit === 'cm') {
          heightInMeter = height / 100; // Convert height to meter
        } else {
          heightInMeter = height * 0.0254; // Convert height from inches to meter
        }

        let weightInKg;
        if (weightUnit === 'lb') {
          weightInKg = convertToKG(weight, 'kg'); // Convert weight from pounds to kilograms
        } else {
          weightInKg = weight; // Weight is already in kilograms
        }

        const bmiValue = weightInKg / (heightInMeter * heightInMeter);
        setBMI(bmiValue.toFixed(2)); // Round to two decimal places
      } else {
        setBMI(null); // Reset BMI value if height or weight is not provided
      }
    };

    calculateBMI();
  }, [height, heightUnit, weight, weightUnit]);

  return (
    <div>
      {bmi !== null && (
        <div>
          <h3>BMI: {bmi}</h3>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
