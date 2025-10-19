// src/components/video/VideoCard.tsx
import { Link } from "react-router-dom";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  views: number;
  uploader: string;
}

const VideoCard = ({ id, title, thumbnail, views, uploader }: VideoCardProps) => {
  return (
    <div className="w-64 m-2">
      <Link to={`/video/${id}`}>
        <img src={thumbnail} alt={title} className="w-full rounded" />
      </Link>
      <h3 className="font-semibold mt-1">{title}</h3>
      <p className="text-sm text-gray-500">{views} views • {uploader}</p>
    </div>
  );
};

export default VideoCard;
