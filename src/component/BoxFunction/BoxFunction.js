import React from 'react';

const BoxFunction = (props) => {
  return (
    <div style={{ width: '200px', height: '100px', background: 'blue' }}>
      <button onClick={() => props.setAge((age) => age + 1)}>+</button>
      <button onClick={() => props.setAge((age) => age - 1)}>-</button>
    </div>
  );
};

export default BoxFunction;
