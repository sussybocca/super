// src/pages/ChannelPage.tsx
import { useParams } from "react-router-dom";
import VideoGrid from "../components/// src/pages/HomePage.tsx
import VideoGrid from "../components/Video/VideoGrid";

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

export default HomePage;ideo/VideoGrid";

const dummyVideos = Array.from({ length: 8 }).map((_, i) => ({
  id: `vid-${i}`,
  title: `Channel Video ${i + 1}`,
  thumbnail: `https://picsum.photos/300/180?random=${i + 20}`,
  views: Math.floor(Math.random() * 8000),
  uploader: "ChannelUser"
}));

const ChannelPage = () => {
  const { id } = useParams();
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Channel: {id}</h1>
      <VideoGrid videos={dummyVideos} />
    </div>
  );
};

export default ChannelPage;
