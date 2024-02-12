// conversion.js
export const convertToKG = (weight, unit) => {
    if (unit === 'lb') {
      return weight * 0.453592; // 1 lb = 0.453592 kg
    }
    return weight; // If already in kg
  };
  
  export const convertToCM = (height, unit) => {
    if (unit === 'in') {
      return height * 2.54; // 1 inch = 2.54 cm
    }
    return height; // If already in cm
  };
  