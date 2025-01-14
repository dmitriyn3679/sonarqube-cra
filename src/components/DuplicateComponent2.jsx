import React from 'react';

const DuplicateComponent2 = () => {
  const getNumber = () => {
    const number = 123;
    return number;
  };
  
  const getNumber2 = () => {
    const number = 123;
    return number;
  };
  
  getNumber();
  getNumber2();
  
  return (
    <div>
      <p>This is a duplicated component.</p>
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  );
};

export default DuplicateComponent2;
