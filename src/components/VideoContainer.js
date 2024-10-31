import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const json = await response.json();
      setVideos(json.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <div className="w-1/3 p-2 h-68" key={video.id}>
          <VideoCard info={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
