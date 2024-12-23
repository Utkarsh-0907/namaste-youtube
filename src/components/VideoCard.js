import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 shadow-lg w-65 h-auto">
      <img
        className=" rounded-lg w-65"
        alt="Video Image"
        src={thumbnails.high.url}
      />
      <ul>
        <li className="py-2 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
