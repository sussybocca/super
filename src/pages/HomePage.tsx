// src/pages/HomePage.tsx
import VideoGrid from "../components/video/VideoGrid";

const dummyVideos = Array.from({ length: 12 }).map((_, i) => ({
  id: `vid-${i}`,
  title: `Sample Video ${i + 1}`,
  thumbnail: `https://picsum.photos/300/180?random=${i}`,
  views: Math.floor(Math.random() * 10000),
  uploader: `User${i + 1}`
}));

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Trending Videos</h1>
      <VideoGrid videos={dummyVideos} />
    </div>
  );
};

export default HomePage;
