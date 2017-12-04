import React from 'react';

const VideoListItem = (props) => {
  const Video = props.video;
    const onVideoSelect = props.onVideoSelect;
  const imageUrl = Video.snippet.thumbnails.default.url;
  return (
      <li onClick={()=> onVideoSelect(Video)} className="list-group-item">
          <div className="video-list media">
              <img className = "media-object" src={imageUrl} />
          </div>
          
          <div className = "media-body">
          <div className = "media-heading">
              {Video.snippet.title}
          </div>
          </div>
      </li>
  );  
};

export default VideoListItem;