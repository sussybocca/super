import React from 'react';

interface VideoGridProps {
  videos: { id: string; title: string; url: string }[];
  onSelect: (video: { id: string; title: string; url: string }) => void;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onSelect }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
      {videos.map(video => (
        <div key={video.id} onClick={() => onSelect(video)}>
          <video width={160} height={90} src={video.url} />
          <div>{video.title}</div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
