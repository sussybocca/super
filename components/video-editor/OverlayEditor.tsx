import React, { useState } from 'react';

const OverlayEditor: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div>
      <h3>Overlay Editor</h3>
      <input
        type="text"
        placeholder="Enter overlay text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      {text && <div style={{ border: '1px dashed gray', padding: '10px', marginTop: '5px' }}>{text}</div>}
    </div>
  );
};

export default OverlayEditor;
