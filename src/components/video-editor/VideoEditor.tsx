import React, { useRef, useState } from 'react';
import useVideo from '../../hooks/useVideo';
import FilterSelector from './FilterSelector';
import OverlayEditor from './OverlayEditor';
import Button from '../ui/Button';

const VideoEditor: React.FC = () => {
  const { video, loadVideo, setCurrentTime, setDuration } = useVideo();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      loadVideo(e.target.files[0]);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  return (
    <div>
      <h2>Video Editor</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
      {video.url && (
        <div>
          <video
            ref={videoRef}
            src={video.url}
            width={480}
            controls={false}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <div>
            <Button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</Button>
            <span>
              {Math.floor(video.currentTime)} / {Math.floor(video.duration)} sec
            </span>
          </div>
          <FilterSelector />
          <OverlayEditor />
        </div>
      )}
    </div>
  );
};

export default VideoEditor;
