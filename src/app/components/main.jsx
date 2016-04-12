import React from 'react';
import ReactDOM from 'react-dom';

import YouTube from 'react-youtube';


export class Layout extends React.Component {
  render() {
    return (
      <YouTube videoId={this.props.videoId} />
    );
  }
}

Layout.propTypes = { videoId: React.PropTypes.string };
ReactDOM.render(<Layout videoId="iNUq-JSXvS4" />, document.getElementById('layout'));
