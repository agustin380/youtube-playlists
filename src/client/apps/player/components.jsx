import React from 'react';
import YouTube from 'react-youtube';

import store from '../root/store.js';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    // Set initial video as a demo
    this.state = store.getState().player;

    // Bind callback methods to make `this` the correct context.
    this.handleSetVideo = this.handleSetVideo.bind(this);
  }
  componentDidMount() {
    store.subscribe(this.handleSetVideo);
  }
  handleSetVideo() {
    const state = store.getState().player;
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
