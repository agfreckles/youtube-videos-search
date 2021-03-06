import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div
      onClick={() => props.onVideoSelect(props.video)}
      className="item video-item"
    >
      <img
        className="ui image"
        alt={props.video.snippet.title}
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
        <div className="description">{props.video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
