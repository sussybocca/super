import { useState } from 'react';

export interface Vibe {
  id: string;
  title: string;
  videoUrl: string;
}

const useVibe = () => {
  const [vibes, setVibes] = useState<Vibe[]>([]);

  const addVibe = (vibe: Vibe) => {
    setVibes(prev => [...prev, vibe]);
  };

  return { vibes, addVibe };
};

export default useVibe;
