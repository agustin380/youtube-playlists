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
      <a onClick={this.playVideo} href="#" className="list-group-item">
        <h6 className="list-group-item-heading">{this.props.title}</h6>
        <p className="list-group-item-text">{this.props.duration}</p>
      </a>
    );
  }
}

PlayListItem.propTypes = {
  title: React.PropTypes.string,
  videoId: React.PropTypes.string,
  duration: React.PropTypes.string,
};
