import React, { useState } from 'react';

const FilterSelector: React.FC = () => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  return (
    <div>
      <h3>Filters</h3>
      <label>
        Brightness:
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={e => setBrightness(Number(e.target.value))}
        />
      </label>
      <label>
        Contrast:
        <input
          type="range"
          min="0"
          max="200"
          value={contrast}
          onChange={e => setContrast(Number(e.target.value))}
        />
      </label>
      <div
        style={{
          width: '480px',
          height: '270px',
          backgroundColor: 'black',
          marginTop: '10px',
          filter: `brightness(${brightness}%) contrast(${contrast}%)`,
        }}
      >
        Video Preview
      </div>
    </div>
  );
};

export default FilterSelector;
