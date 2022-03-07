import React from "react";
import VideoItem from "./VideoItem";
class VideosList extends React.Component {
  render() {
    const videos = this.props.videos.map((video) => {
      return (
        <VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video} />
      );
    });
    return <div className="ui relaxed divided list">{videos}</div>;
  }
}
export default VideosList;
