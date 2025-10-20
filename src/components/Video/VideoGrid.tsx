// src/components/video/VideoGrid.tsx
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: {
    id: string;
    title: string;
    thumbnail: string;
    views: number;
    uploader: string;
  }[];
}

const VideoGrid = ({ videos }: VideoGridProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoGrid;
