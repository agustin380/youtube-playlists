import React from 'react';
import ReactDOM from 'react-dom';
import YouTubePlayer from 'youtube-player';

const player = YouTubePlayer('player');

export class VideoPlayer extends React.Component {
  render() {
    player.loadVideoById(this.props.videoID);
    return null;
  }
}

VideoPlayer.propTypes = {
  videoID: React.PropTypes.string.isRequired,
};

ReactDOM.render(<VideoPlayer videoID="iNUq-JSXvS4" />, document.getElementById('player'));
