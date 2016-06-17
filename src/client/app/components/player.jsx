import React from 'react';
import YouTube from 'react-youtube';

import store from '../store.js';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    // Set initial video as a demo
    const videoId = store.getState().player.videoId;
    this.state = {
      player: null,
      playlistItemIndex: 0,
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
  onStateChange(event) {
    let state;
    let playlistItem;

    if (event.data === window.YT.PlayerState.CUED) {
      this.state.player.playVideo();
    } else if (event.data === window.YT.PlayerState.ENDED) {
      // The video has ended, play the next one in the playlist.
      state = store.getState().playlist;
      playlistItem = state[++this.state.playlistItemIndex];
      if (playlistItem) {
        this.setState({ videoId: playlistItem.videoId });
      }
    }
  }
  loadPlayer(event) {
    this.setState({
      player: event.target,
    });
  }
  handleSetVideo() {
    const state = store.getState().player;
    if (state.videoId !== this.state.videoId) {
      this.setState({ videoId: state.videoId });
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
