import React from 'react';

interface VibeHeaderProps {
  title: string;
}

const VibeHeader: React.FC<VibeHeaderProps> = ({ title }) => (
  <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>{title}</h2>
);

export default VibeHeader;
