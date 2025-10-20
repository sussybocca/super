import React, { useState } from 'react';
import useVibe from '../hooks/useVibe';
import VideoGrid from '../components/vibe/VideoGrid';
import VibeHeader from '../components/vibe/VibeHeader';
import Widget from '../components/vibe/Widget';
import Modal from '../components/ui/Modal';

const VibePage: React.FC = () => {
  const { vibes, addVibe } = useVibe();
  const [selected, setSelected] = useState<{ id: string; title: string; url: string } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (video: { id: string; title: string; url: string }) => {
    setSelected(video);
    setModalOpen(true);
  };

  return (
    <div>
      <VibeHeader title="Vibe Feed" />
      <VideoGrid videos={vibes} onSelect={handleSelect} />
      <Widget title="Add Sample Vibe" content={<button onClick={() => addVibe({ id: Date.now().toString(), title: 'Demo Video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' })}>Add</button>} />
      
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selected && (
          <div>
            <h3>{selected.title}</h3>
            <video src={selected.url} width={400} controls autoPlay />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default VibePage;
