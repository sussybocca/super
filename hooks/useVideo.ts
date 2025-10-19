import { useState } from 'react';

export interface VideoState {
  file: File | null;
  url: string | null;
  currentTime: number;
  duration: number;
}

const useVideo = () => {
  const [video, setVideo] = useState<VideoState>({
    file: null,
    url: null,
    currentTime: 0,
    duration: 0,
  });

  const loadVideo = (file: File) => {
    const url = URL.createObjectURL(file);
    setVideo({ file, url, currentTime: 0, duration: 0 });
  };

  const setCurrentTime = (time: number) => {
    setVideo(prev => ({ ...prev, currentTime: time }));
  };

  const setDuration = (duration: number) => {
    setVideo(prev => ({ ...prev, duration }));
  };

  return { video, loadVideo, setCurrentTime, setDuration };
};

export default useVideo;
