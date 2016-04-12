import React from 'react';
import ReactDOM from 'react-dom';

import YouTube from 'react-youtube';
import VideoForm from './form.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <YouTube videoId={this.props.videoId} />
        <VideoForm />
      </div>
    );
  }
}

Layout.propTypes = { videoId: React.PropTypes.string };
ReactDOM.render(<Layout videoId="iNUq-JSXvS4" />, document.getElementById('layout'));
