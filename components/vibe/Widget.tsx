import React from 'react';

interface WidgetProps {
  title: string;
  content: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({ title, content }) => (
  <div style={{ border: '1px solid gray', padding: '10px', borderRadius: '6px' }}>
    <h4>{title}</h4>
    <div>{content}</div>
  </div>
);

export default Widget;
