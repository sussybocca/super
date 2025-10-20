// src/pages/VideoDetailPage.tsx
import { useParams } from "react-router-dom";
import { useState } from "react";

const dummyVideo = {
  id: "vid-1",
  title: "Sample Video",
  url: "https://www.w3schools.com/html/mov_bbb.mp4",
  views: 1234,
  uploader: "User1",
  description: "This is a sample video description."
};

const VideoDetailPage = () => {
  const { id } = useParams();
  const [likes, setLikes] = useState(100);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <video src={dummyVideo.url} controls className="w-full rounded mb-2" />
      <h2 className="text-2xl font-bold">{dummyVideo.title}</h2>
      <p className="text-gray-500">{dummyVideo.views} views • Uploaded by {dummyVideo.uploader}</p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setLikes(likes + 1)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          Like ({likes})
        </button>
      </div>
      <p className="mt-4">{dummyVideo.description}</p>
    </div>
  );
};

export default VideoDetailPage;
