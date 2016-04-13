import React from 'react';
import YouTube from 'react-youtube';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    // Set initial video as a demo
    this.state = { videoId: this.props.videoId };
  }
  render() {
    return (
      <YouTube videoId={this.state.videoId} />
    );
  }
}

VideoPlayer.propTypes = { videoId: React.PropTypes.string };
