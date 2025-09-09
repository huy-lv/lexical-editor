import React from 'react';
import {useState} from 'react';

export const NumberInput = () => {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: 200,
      }}>
      <span>{1}</span>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
};
