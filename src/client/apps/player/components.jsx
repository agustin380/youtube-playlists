import React from 'react';
import YouTube from 'react-youtube';

import store from '../root/store.js';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    // Set initial video as a demo
    this.state = store.getState().player;
  }
  componentDidMount() {
    store.subscribe(this.handleSetVideo);
  }
  handleSetVideo() {
    const state = store.getState();
    this.setState({ videoId: state.videoId });
  }
  render() {
    const opts = {
      playerVars: {
        origin: window.location.origin,
      },
    };
    return (
      <YouTube videoId={this.state.videoId} opts={opts} />
    );
  }
}

VideoPlayer.propTypes = { videoId: React.PropTypes.string };
