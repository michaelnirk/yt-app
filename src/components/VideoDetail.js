import React from 'react';

const VideoDetail = ({video}) => {
  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={videoSrc} title="Video player" allowFullScreen/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
  return <div>Loading...</div>
};

export default VideoDetail;