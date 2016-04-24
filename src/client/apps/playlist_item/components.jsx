import React from 'react';

import store from '../root/store.js';

export default class PlayListItem extends React.Component {
  constructor(props) {
    super(props);

    this.playVideo = this.playVideo.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = { title: '', videoId: '' };
  }
  componentDidMount() {
    const titlePromise = this.props.title;
    titlePromise.then(title => {
      this.setState({ title, videoId: this.props.videoId });
    });
  }
  playVideo(event) {
    event.preventDefault();
    store.dispatch({ type: 'SET_VIDEO', videoId: this.state.videoId });
  }
  render() {
    return (
      <li onClick={this.playVideo}>{this.state.title}</li>
    );
  }
}

PlayListItem.propTypes = {
  // title: React.PropTypes.string,
  videoId: React.PropTypes.string,
};
