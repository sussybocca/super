// src/pages/ProfilePage.tsx
import VideoGrid from "../components/Video/VideoGrid";

const dummyVideos = Array.from({ length: 6 }).map((_, i) => ({
  id: `vid-${i}`,
  title: `User Video ${i + 1}`,
  thumbnail: `https://picsum.photos/300/180?random=${i + 10}`,
  views: Math.floor(Math.random() * 5000),
  uploader: "Me"
}));

const ProfilePage = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <p className="mb-4">Username: Me</p>
      <h2 className="text-2xl mb-2">My Videos</h2>
      <VideoGrid videos={dummyVideos} />
    </div>
  );
};

export default ProfilePage;
