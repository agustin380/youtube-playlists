import React from 'react';

import store from '../root/store.js';

export default class PlayListItem extends React.Component {
  constructor(props) {
    super(props);
    this.playVideo = this.playVideo.bind(this);
  }
  playVideo(event) {
    event.preventDefault();
    store.dispatch({ type: 'SET_VIDEO', videoId: this.props.videoId });
  }
  render() {
    return (
      <li onClick={this.playVideo}>{this.props.title}</li>
    );
  }
}

PlayListItem.propTypes = {
  title: React.PropTypes.string,
  videoId: React.PropTypes.string,
};
