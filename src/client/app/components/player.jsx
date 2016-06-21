import React from 'react';
import YouTube from 'react-youtube';

const Player = ({ videoId, onReady, onStateChange }) => (
  <YouTube
    videoId={videoId}
    opts={{ playerVars: { origin: window.location.origin } }}
    onReady={onReady}
    onStateChange={onStateChange}
  />
);

Player.propTypes = {
  videoId: React.PropTypes.string,
  options: React.PropTypes.object,
  onReady: React.PropTypes.func.isRequired,
  onStateChange: React.PropTypes.func.isRequired,
};

export default Player;
