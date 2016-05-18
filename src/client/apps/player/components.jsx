import React from 'react';
import YouTube from 'react-youtube';

import store from '../root/store.js';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    // Set initial video as a demo
    const videoId = store.getState().player.videoId;
    this.state = {
      player: null,
      videoId,
    };

    // Bind callback methods to make `this` the correct context.
    this.handleSetVideo = this.handleSetVideo.bind(this);
    this.loadPlayer = this.loadPlayer.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
  }
  componentDidMount() {
    store.subscribe(this.handleSetVideo);
  }
  handleSetVideo() {
    const state = store.getState().player;
    if (state.videoId !== this.state.videoId) {
      this.setState({ videoId: state.videoId });
    }
  }
  loadPlayer(event) {
    this.setState({
      player: event.target,
    });
  }
  onStateChange(event) {
    if (event.data == window.YT.PlayerState.CUED) {
      this.state.player.playVideo();
    }
  }
  render() {
    const opts = {
      playerVars: {
        origin: window.location.origin,
      },
    };
    return (
      <YouTube
        videoId={this.state.videoId}
        opts={opts}
        onReady={this.loadPlayer}
        onStateChange={this.onStateChange}
      />
    );
  }
}

VideoPlayer.propTypes = { videoId: React.PropTypes.string };
